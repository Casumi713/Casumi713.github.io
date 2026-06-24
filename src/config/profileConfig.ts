import type { ProfileConfig } from "../types/config";
import { contentConfig } from "../generated/content-config";

// ---------------------------------------------------------------------------
// 默认个人资料配置（代码兜底）
// ---------------------------------------------------------------------------
const DEFAULTS: ProfileConfig = {
	avatar: "assets/images/casuki-transparent.webp",
	name: "Casumi",
	bio: "✨ 在代码和二次元之间反复横跳 ✨",
	typewriter: {
		enable: true,
		speed: 80,
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ca-suki",
		},
		{
			name: "Codeberg",
			icon: "simple-icons:codeberg",
			url: "https://codeberg.org/Casumi",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/",
		},
	],
};

// ---------------------------------------------------------------------------
// 合并：内容配置优先，代码默认值兜底
// ---------------------------------------------------------------------------
const contentProfile = contentConfig.profile;

export const profileConfig: ProfileConfig = {
	...DEFAULTS,
	...(contentProfile ?? {}),
	typewriter: {
		...DEFAULTS.typewriter!,
		...(contentProfile?.typewriter ?? {}),
	},
	links: contentProfile?.links ?? DEFAULTS.links,
};
