import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

export const navBarConfig: NavBarConfig = {
	links: [
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
	],
};
