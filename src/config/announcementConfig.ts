import type { AnnouncementConfig } from "../types/config";

// 公告栏配置 — Casumi
export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "🎉 Casumi 的个人博客正式上线啦！欢迎来访~ 🎉",
	closable: true,
	link: {
		enable: true,
		text: "了解更多",
		url: "/about/",
		external: false,
	},
};
