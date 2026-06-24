import type { SiteConfig } from "../types/config";

// 定义站点语言
const SITE_LANG = "zh_CN"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。

export const siteConfig: SiteConfig = {
	title: "Casumi",
	subtitle: "✦ 二次元与技术の交错之境 ✦",
	siteURL: "https://casumi713.github.io/", // 站点URL，以斜杠结尾
	siteStartDate: "2026-06-01", // 站点开始日期

	lang: SITE_LANG,

	themeColor: {
		hue: 210, // 蓝色主题色
		fixed: false,
	},

	// 特色页面开关
	featurePages: {
		anime: true,
		diary: true,
		friends: true,
		projects: true,
		skills: true,
		timeline: true,
		albums: true,
		devices: true,
	},

	// 顶栏标题配置
	navbarTitle: {
		mode: "text-icon",
		text: "Casumi",
		icon: "assets/images/casuki-transparent.webp",
		logo: "assets/images/casuki-transparent.webp",
	},

	// 页面自动缩放配置
	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false,
	},

	bilibili: {
		vmid: "your-bilibili-vmid",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},

	anilist: {
		userName: "Casumi", // AniList用户名
		fetchOnDev: false,
	},

	anime: {
		mode: "anilist",
	},

	diaryApiUrl: "",

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},

	tagStyle: {
		useNewStyle: false,
	},

	// 壁纸模式配置
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},

	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
				"/assets/desktop-banner/5.webp",
				"/assets/desktop-banner/6.webp",
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
				"/assets/mobile-banner/5.webp",
				"/assets/mobile-banner/6.webp",
			],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 1.5,
			switchable: true,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
			switchable: true,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: true,
			title: "✨ Casumi's Nest ✨",
			switchable: true,
			subtitle: [
				"🌸 编程 · 动漫 · 日常 🌸",
				"🎮 努力成为一个很厉害的人 🎮",
				"⭐ 在代码与二次元之间徘徊 ⭐",
				"🍵 一杯茶，一段代码，一部番 🍵",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 3,
		useJapaneseBadge: true,
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],
	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true,
		},
		cjkFont: {
			fontFamily: "萝莉体 第二版",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true,
		},
	},
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},
	card: {
		border: true,
		followTheme: false,
	},
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com"],
	},
};

export { SITE_LANG };
