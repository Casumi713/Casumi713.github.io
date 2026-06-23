// 友情链接数据 — Casumi

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 2,
		title: "Mizuki",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "下一代 Material Design 3 博客主题",
		siteurl: "https://github.com/LyraVoid/Mizuki",
		tags: ["Theme"],
	},
	{
		id: 3,
		title: "Codeberg",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "开源代码托管平台",
		siteurl: "https://codeberg.org",
		tags: ["Hosting"],
	},
];

export function getFriendsList(): FriendItem[] {
	return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
