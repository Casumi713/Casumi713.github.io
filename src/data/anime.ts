// 本地番剧数据配置 — Casumi
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "Bocchi the Rock!",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/btr.webp",
		description: "ぼっち・ざ・ろっく！— 孤独摇滚，年度最佳音乐番",
		episodes: "12 episodes",
		year: "2022",
		genre: ["音乐", "日常", "喜剧"],
		studio: "CloverWorks",
		link: "https://www.bilibili.com/bangumi/media/md28351427",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-10",
		endDate: "2022-12",
	},
	{
		title: "Lycoris Recoil",
		status: "completed",
		rating: 9.5,
		cover: "/assets/anime/lkls.webp",
		description: "Girl's gunfight — 年度原创佳作",
		episodes: "13 episodes",
		year: "2022",
		genre: ["动作", "日常"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "Girls Band Cry",
		status: "watching",
		rating: 9.0,
		cover: "/assets/anime/gbc.webp",
		description: "トゲナシトゲアリ — 少女乐队，青春的呐喊",
		episodes: "13 episodes",
		year: "2024",
		genre: ["音乐", "日常", "青春"],
		studio: "Toei Animation",
		link: "https://www.bilibili.com/bangumi/media/md28351427",
		progress: 10,
		totalEpisodes: 13,
		startDate: "2024-04",
		endDate: "2024-06",
	},
];

export default localAnimeList;
