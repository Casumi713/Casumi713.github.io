import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const API_URL = "https://graphql.anilist.co";
const CONFIG_PATH = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../src/config/siteConfig.ts",
);
const OUTPUT_FILE = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../src/data/bangumi-data.json",
);

async function getConfigValue(pattern) {
	try {
		const configContent = await fs.readFile(CONFIG_PATH, "utf-8");
		const match = configContent.match(pattern);
		if (match && match[1]) {
			const val = match[1];
			if (val === "your-bangumi-id" || val === "your-anilist-id" || !val) {
				return null;
			}
			return val;
		}
		return null;
	} catch {
		return null;
	}
}

const STATUS_MAP = {
	CURRENT: "watching",
	PLANNING: "planned",
	COMPLETED: "completed",
	DROPPED: "dropped",
	PAUSED: "onhold",
	REPEATING: "watching",
};

const LIST_QUERY = `
query ($userName: String) {
  MediaListCollection(userName: $userName, type: ANIME) {
    lists {
      name
      status
      entries {
        id
        status
        score
        progress
        startedAt { year month day }
        completedAt { year month day }
        media {
          id
          title { romaji english native }
          episodes
          format
          mediaStatus: status
          averageScore
          genres
          coverImage { large medium }
          siteUrl
          description
          startDate { year month day }
          endDate { year month day }
          studios {
            edges {
              isMain
              node { name }
            }
          }
        }
      }
    }
  }
}
`;

async function fetchAnilistData(userName) {
	console.log(`Fetching anime list for AniList user: ${userName}...`);

	const response = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: LIST_QUERY,
			variables: { userName },
		}),
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`AniList API error ${response.status}: ${text}`);
	}

	const json = await response.json();

	if (json.errors) {
		throw new Error(
			`AniList API errors: ${json.errors.map((e) => e.message).join(", ")}`,
		);
	}

	return json.data?.MediaListCollection?.lists || [];
}

function extractStudio(studios) {
	if (!studios?.edges) return "Unknown";
	const main = studios.edges.find((e) => e.isMain);
	return main?.node?.name || studios.edges[0]?.node?.name || "Unknown";
}

function formatDate(dateObj) {
	if (!dateObj || !dateObj.year) return "";
	const { year, month, day } = dateObj;
	if (!month) return String(year);
	return day ? `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}` : `${year}-${String(month).padStart(2, "0")}`;
}

function processEntries(lists) {
	const results = [];
	let total = 0;

	for (const list of lists) {
		const status = STATUS_MAP[list.status] || list.name?.toLowerCase() || "unknown";
		const entries = list.entries || [];

		for (const entry of entries) {
			total++;
			const media = entry.media || {};
			const title = media.title?.native || media.title?.romaji || media.title?.english || "Unknown Title";
			const totalEpisodes = media.episodes || 0;
			const score = entry.score || 0;
			const startDate = formatDate(media.startDate);
			const endDate = formatDate(media.endDate);
			const year = media.startDate?.year ? String(media.startDate.year) : "";

			// Strip HTML tags from description
			const desc = media.description ? media.description.replace(/<[^>]*>/g, "").trim() : "";

			results.push({
				title,
				status,
				rating: score,
				cover: media.coverImage?.large || media.coverImage?.medium || "/assets/anime/default.webp",
				description: desc,
				episodes: totalEpisodes ? `${totalEpisodes} episodes` : "Unknown",
				year,
				genre: media.genres?.slice(0, 3) || ["Unknown"],
				studio: extractStudio(media.studios),
				link: media.siteUrl || `https://anilist.co/anime/${media.id}`,
				progress: entry.progress || 0,
				totalEpisodes,
				startDate,
				endDate,
			});
		}
	}

	console.log(`Processed ${results.length} entries from ${lists.length} lists`);
	return results;
}

async function main() {
	console.log("Initializing AniList data update script...");

	const userName = await getConfigValue(/anilist:\s*\{[\s\S]*?userName:\s*["']([^"']+)["']/);
	if (!userName) {
		console.warn("No AniList userName found in config, skipping.");
		return;
	}

	console.log(`AniList user: ${userName}`);

	const lists = await fetchAnilistData(userName);
	const animeList = processEntries(lists);

	if (animeList.length === 0) {
		console.log("No anime data found.");
		return;
	}

	const dir = path.dirname(OUTPUT_FILE);
	try {
		await fs.access(dir);
	} catch {
		await fs.mkdir(dir, { recursive: true });
	}

	await fs.writeFile(OUTPUT_FILE, JSON.stringify(animeList, null, 2));
	console.log(`\nUpdate complete! Data saved to: ${OUTPUT_FILE}`);
	console.log(`Total: ${animeList.length} anime series`);
}

main().catch((err) => {
	console.error("\n✘ Script execution error:");
	console.error(err);
	process.exit(1);
});
