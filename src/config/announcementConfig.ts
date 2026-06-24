import type { AnnouncementConfig } from "../types/config";
import { contentConfig } from "../generated/content-config";

// ---------------------------------------------------------------------------
// 默认公告栏配置（代码兜底）
// ---------------------------------------------------------------------------
const DEFAULTS: AnnouncementConfig = {
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

// ---------------------------------------------------------------------------
// 合并
// ---------------------------------------------------------------------------
const contentAnnouncement = contentConfig.announcement;

export const announcementConfig: AnnouncementConfig = {
	...DEFAULTS,
	...(contentAnnouncement ?? {}),
	link: {
		...DEFAULTS.link!,
		...(contentAnnouncement?.link ?? {}),
	},
};
