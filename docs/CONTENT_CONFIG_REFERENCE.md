# 内容配置参考

内容仓库的 `data/config/` 目录下存放按 section 拆分的 JSON 配置文件。
每个文件名（不含 `.json`）对应一个配置 section，可独立编辑。

---

## 文件结构与对应关系

```
Casumi-Blog/
  data/
    config/
      site.json          → 站点基本信息（标题、副标题、URL、Banner）
      navBar.json        → 导航栏菜单
      profile.json       → 个人资料（头像、简介、社交链接）
      announcement.json  → 公告栏
      music.json         → 本地歌单
      pio.json           → Live2D 看板娘（模型、对话）
      footer.json        → 页脚自定义 HTML
```

> 所有字段**均为可选**。只填你要覆盖的字段即可。
> **向后兼容**：也支持单个 `data/site-config.json` 组合文件，它会覆盖 `data/config/` 中同名 section。

---

## 各文件字段参考

### site.json

```jsonc
{
  "title": "Casumi",
  "subtitle": "✦ 二次元与技术の交错之境 ✦",
  "siteURL": "https://casumi713.github.io/",
  "navbarTitle": {
    "mode": "text-icon",           // "text-icon" | "logo"
    "text": "Casumi",
    "icon": "assets/images/...webp",
    "logo": "assets/images/...webp"
  },
  "banner": {
    "desktop": ["/assets/desktop-banner/1.webp"],
    "mobile": ["/assets/mobile-banner/1.webp"],
    "homeText": {
      "title": "✨ Casumi's Nest ✨",
      "subtitle": ["🌸 编程 · 动漫 · 日常 🌸"]
    }
  }
}
```

### navBar.json

支持**预设链接**（自动映射为内置图标和路径）和**自定义链接**：

```jsonc
{
  "links": [
    { "preset": "Home" },           // 预设（见下方列表）
    {
      "name": "链接",
      "url": "/links/",
      "icon": "material-symbols:link",
      "children": [
        { "preset": "About" },
        {
          "name": "GitHub",
          "url": "https://github.com/Casumi",
          "external": true,
          "icon": "fa7-brands:github"
        }
      ]
    }
  ]
}
```

**可用预设名：** `Home` `Archive` `About` `Friends` `Anime` `Diary` `Albums` `Projects` `Skills` `Timeline`

### profile.json

```jsonc
{
  "avatar": "assets/images/casuki-transparent.webp",
  "name": "Casumi",
  "bio": "✨ 在代码和二次元之间反复横跳 ✨",
  "typewriter": { "enable": true, "speed": 80 },
  "links": [
    { "name": "GitHub", "icon": "fa7-brands:github", "url": "https://github.com/ca-suki" }
  ]
}
```

### announcement.json

```jsonc
{
  "title": "公告",
  "content": "🎉 欢迎来访~ 🎉",
  "closable": true,
  "link": {
    "enable": true,
    "text": "了解更多",
    "url": "/about/",
    "external": false
  }
}
```

### music.json

```jsonc
{
  "localPlaylist": [
    {
      "id": 1,
      "title": "口笛で愛は歌えない",
      "artist": "Dazbee",
      "cover": "assets/music/cover/dazbee.webp",
      "url": "assets/music/url/dazbee.mp3",
      "duration": 0
    }
  ]
}
```

> `cover` 和 `url` 支持本地路径和完整 URL（如 `https://...`）。

### pio.json

```jsonc
{
  "models": [
    "/pio/models/拉薇1/拉薇1.model3.json",
    "/pio/models/NOIR/noir.model3.json"
  ],
  "dialog": {
    "welcome": "Welcome!",
    "touch": ["What are you doing?", "HENTAI!"],
    "home": "Click here to go back to homepage!",
    "skin": ["Want to see my new outfit?", "..."],
    "close": "QWQ See you next time~",
    "link": "https://github.com/LyraVoid/Mizuki"
  }
}
```

### footer.json

```jsonc
{
  "customHtml": ""    // 留空则读取 FooterConfig.html
}
```
