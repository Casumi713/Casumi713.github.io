---
title: "使用 Astro + Codeberg Pages 搭建个人博客"
description: "从零开始搭建一个二次元风格的个人博客站点的完整过程"
published: 2026-06-23
tags: ["教程", "Astro", "Codeberg"]
category: "技术"
draft: false
---

## 📝 前言

最近用 **Astro** + **Mizuki 主题** 搭建了个人博客，部署在 Codeberg Pages 上。记录一下整个过程，希望对想搭建自己博客的朋友有帮助。

## 🏗 技术选型

| 组件 | 选择 | 理由 |
|------|------|------|
| 框架 | Astro 5.x | 静态站点生成，性能优秀 |
| 主题 | Mizuki | 二次元风格，功能丰富 |
| 部署 | Codeberg Pages | 免费、支持 CI/CD |
| 包管理 | pnpm | 快速、节省磁盘 |

## ⚡ 快速开始

### 1. 创建项目

```bash
# 克隆 Mizuki 主题
git clone https://github.com/yokiusagi55/Mizuki-astro.git my-blog
cd my-blog

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 2. 配置站点

编辑 `src/config.ts`，修改站点名称、主题色、个人资料等。

```typescript
// 主题色 hue: 粉色 330
themeColor: { hue: 330 }
```

### 3. 写文章

在 `src/content/posts/` 目录下创建 Markdown 文件：

```markdown
---
title: "我的第一篇文章"
description: "文章描述"
published: 2026-06-23
tags: ["标签1", "标签2"]
category: "分类"
draft: false
---

文章内容在这里...
```

### 4. 部署到 Codeberg Pages

创建 `.forgejo/workflows/deploy.yml`：

```yaml
name: Deploy to Codeberg Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: corepack enable && pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: https://codeberg.org/git-pages/action@v2
        with:
          token: ${{ forge.token }}
          source: dist/
```

## 🎨 个性化定制

### 主题色

Mizuki 支持自定义主题色，通过调整 `hue` 值来改变整体色调：

- 🔴 红色: 0
- 🟣 紫色: 280
- 💗 粉色: 330 (推荐!)
- 🔵 蓝色: 210

### 启用樱花特效

在 `config.ts` 中找到 `sakuraConfig`，将 `enable` 设为 `true`：

```typescript
sakuraConfig: {
  enable: true,  // 🌸 飘落的樱花特效
  sakuraNum: 21, // 花瓣数量
}
```

## 📌 小贴士

1. **图片资源**：放在 `public/` 目录下可以直接通过 `/` 引用
2. **自定义域名**：创建 `.domains` 文件并配置 DNS 即可
3. **评论系统**：Mizuki 支持 Twikoo 评论，配置好 `envId` 即可启用

## 🎯 总结

用 Astro 搭建博客非常愉快，Mizuki 主题的开箱即用体验很棒，Codeberg Pages 的免费部署也很方便。推荐给想在二次元风格和个人博客之间找到平衡点的朋友们！

---

*Happy Coding! 🚀*
