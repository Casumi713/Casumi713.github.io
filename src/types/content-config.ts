/**
 * 内容仓库配置的类型定义
 *
 * 定义 data/site-config.json（内容仓库）中可配置的字段结构。
 * 代码仓库的 src/config/*.ts 从 content-config.ts 导入这些值并与默认值合并。
 */

import type { NavBarLink } from "./config";
import type { Song } from "../components/widgets/music-player/types";

// ─── Site ──────────────────────────────────────────────────────

export interface ContentSiteBannerConfig {
	desktop?: string[];
	mobile?: string[];
	homeText?: {
		title?: string;
		subtitle?: string[];
	};
}

export interface ContentSiteConfig {
	title?: string;
	subtitle?: string;
	siteURL?: string;
	navbarTitle?: {
		mode?: "text-icon" | "logo";
		text?: string;
		icon?: string;
		logo?: string;
	};
	banner?: ContentSiteBannerConfig;
}

// ─── NavBar ────────────────────────────────────────────────────

export interface ContentNavBarConfig {
	links?: (NavBarLink | string)[];
}

// ─── Profile ───────────────────────────────────────────────────

export interface ContentProfileConfig {
	avatar?: string;
	name?: string;
	bio?: string;
	typewriter?: {
		enable?: boolean;
		speed?: number;
	};
	links?: {
		name: string;
		url: string;
		icon: string;
	}[];
}

// ─── Announcement ──────────────────────────────────────────────

export interface ContentAnnouncementConfig {
	title?: string;
	content?: string;
	closable?: boolean;
	link?: {
		enable?: boolean;
		text?: string;
		url?: string;
		external?: boolean;
	};
}

// ─── Music ─────────────────────────────────────────────────────

export interface ContentMusicConfig {
	localPlaylist?: Song[];
}

// ─── Pio ───────────────────────────────────────────────────────

export interface ContentPioDialogConfig {
	welcome?: string;
	touch?: string[];
	home?: string;
	skin?: [string, string];
	close?: string;
	link?: string;
}

export interface ContentPioConfig {
	models?: string[];
	dialog?: ContentPioDialogConfig;
}

// ─── Footer ────────────────────────────────────────────────────

export interface ContentFooterConfig {
	customHtml?: string;
}

// ─── Root ──────────────────────────────────────────────────────

export interface ContentConfig {
	site?: ContentSiteConfig;
	navBar?: ContentNavBarConfig;
	profile?: ContentProfileConfig;
	announcement?: ContentAnnouncementConfig;
	music?: ContentMusicConfig;
	pio?: ContentPioConfig;
	footer?: ContentFooterConfig;
}
