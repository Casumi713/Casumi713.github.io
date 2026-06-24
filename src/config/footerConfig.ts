import type { FooterConfig } from "../types/config";
import { contentConfig } from "../generated/content-config";

// ---------------------------------------------------------------------------
// 默认页脚配置（代码兜底）
// ---------------------------------------------------------------------------
const DEFAULTS: FooterConfig = {
	enable: false, // 是否启用Footer HTML注入功能
	customHtml: "", // HTML格式的自定义页脚信息，例如备案号等，默认留空
	// 也可以直接编辑 FooterConfig.html 文件来添加备案号等自定义内容
	// 注意：若 customHtml 不为空，则使用 customHtml 中的内容；若 customHtml 留空，则使用 FooterConfig.html 文件中的内容
	// FooterConfig.html 可能会在未来的某个版本弃用
};

// ---------------------------------------------------------------------------
// 合并
// ---------------------------------------------------------------------------
export const footerConfig: FooterConfig = {
	...DEFAULTS,
	...contentConfig.footer,
};
