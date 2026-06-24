import type { NavBarConfig, NavBarLink } from "../types/config";
import { LinkPreset } from "../types/config";
import { contentConfig } from "../generated/content-config";

// ---------------------------------------------------------------------------
// 预设名 → LinkPreset 枚举映射
// ---------------------------------------------------------------------------
const PRESET_MAP: Record<string, LinkPreset> = {
	Home: LinkPreset.Home,
	Archive: LinkPreset.Archive,
	About: LinkPreset.About,
	Friends: LinkPreset.Friends,
	Anime: LinkPreset.Anime,
	Diary: LinkPreset.Diary,
	Albums: LinkPreset.Albums,
	Projects: LinkPreset.Projects,
	Skills: LinkPreset.Skills,
	Timeline: LinkPreset.Timeline,
};

/** 将字符串预设名解析为 LinkPreset 枚举 */
function resolvePreset(name: string): LinkPreset {
	return PRESET_MAP[name] ?? LinkPreset.Home;
}

/** 递归将字符串预设名解析为 LinkPreset */
function resolveLink(
	item: NavBarLink | string,
): NavBarLink | LinkPreset {
	if (typeof item === "string") {
		return resolvePreset(item);
	}
	if (item.children) {
		return {
			...item,
			children: item.children.map((child) =>
				typeof child === "string" ? resolvePreset(child) : resolveLink(child),
			),
		};
	}
	return item;
}

// ---------------------------------------------------------------------------
// 默认导航栏配置（代码兜底）
// ---------------------------------------------------------------------------
const DEFAULT_LINKS: (NavBarLink | LinkPreset)[] = [
	LinkPreset.Home,
	LinkPreset.Archive,

	{
		name: "链接",
		url: "/links/",
		icon: "material-symbols:link",
		children: [
			{
				name: "GitHub",
				url: "https://github.com/Casumi",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Codeberg",
				url: "https://codeberg.org/Casumi",
				external: true,
				icon: "fa7-brands:git",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/",
				external: true,
				icon: "fa7-brands:bilibili",
			},
		],
	},

	{
		name: "我的",
		url: "/content/",
		icon: "material-symbols:person",
		children: [
			LinkPreset.Anime,
			LinkPreset.Diary,
			{
				name: "相册",
				url: "/albums/",
				icon: "material-symbols:photo-library",
			},
		],
	},

	{
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [LinkPreset.About, LinkPreset.Friends],
	},

	{
		name: "其他",
		url: "#",
		icon: "material-symbols:more-horiz",
		children: [
			LinkPreset.Projects,
			LinkPreset.Skills,
			LinkPreset.Timeline,
			{
				name: "设备",
				url: "/devices/",
				icon: "material-symbols:devices",
			},
		],
	},
];

// ---------------------------------------------------------------------------
// 合并：内容配置优先，代码默认值兜底
// ---------------------------------------------------------------------------
export const navBarConfig: NavBarConfig = {
	links: contentConfig.navBar?.links
		? contentConfig.navBar.links.map(resolveLink)
		: DEFAULT_LINKS,
};
