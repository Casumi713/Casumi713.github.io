import type { PioConfig } from "../types/config";
import { contentConfig } from "../generated/content-config";

// ---------------------------------------------------------------------------
// 默认 Pio 看板娘配置（代码兜底）
// ---------------------------------------------------------------------------
const DEFAULTS: PioConfig = {
	enable: true, // 启用看板娘
	models: [
		"/pio/models/拉薇1/拉薇1.model3.json", // 默认模型
		"/pio/models/NOIR/noir.model3.json", // 可切换
	],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	hideAboutMenu: false,
	dialog: {
		welcome: "Welcome to Mizuki Website!",
		touch: [
			"What are you doing?",
			"Stop touching me!",
			"HENTAI!",
			"Don't bully me like that!",
		],
		home: "Click here to go back to homepage!",
		skin: ["Want to see my new outfit?", "The new outfit looks great~"],
		close: "QWQ See you next time~",
		link: "https://github.com/LyraVoid/Mizuki",
	},
};

// ---------------------------------------------------------------------------
// 合并
// ---------------------------------------------------------------------------
const contentPio = contentConfig.pio;

export const pioConfig: PioConfig = {
	...DEFAULTS,
	...(contentPio ?? {}),
	dialog: {
		...DEFAULTS.dialog,
		...(contentPio?.dialog ?? {}),
	},
};
