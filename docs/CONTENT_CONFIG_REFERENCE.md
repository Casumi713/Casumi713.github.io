# 内容配置参考

本文件描述内容仓库（`data/site-config.json`）中所有可配置字段的结构与作用。

## 文件位置

```
Casumi-Blog/
  data/
    site-config.json   ← 在内容仓库中编辑此文件
```

所有字段**均为可选**。只填写你要覆盖的字段，其余将自动使用主题默认值。

---

## site 段 — 站点基本信息

```jsonc
{
  "site": {
    "title": "Casumi",              // 站点标题（浏览器标签页）
    "subtitle": "✦ 二次元与技术の交错之境 ✦", // 副标题
    "siteURL": "https://casumi713.github.io/", // 站点 URL（末尾 /）
    "navbarTitle": {                 // 顶栏标题
      "mode": "text-icon",           // "text-icon" | "logo"
      "text": "Casumi",              // 标题文字
      "icon": "assets/images/...webp", // 标题图标
      "logo": "assets/images/...webp"  // Logo 图片
    },
    "banner": {                      // 首页横幅
      "desktop": ["..."],            // 桌面端横幅图片数组
      "mobile": ["..."],             // 移动端横幅图片数组
      "homeText": {                  // 首页文字
        "title": "✨ Casumi's Nest ✨",
        "subtitle": ["🌸 编程 · 动漫 · 日常 🌸"]
      }
    }
  }
}
```

---

## navBar 段 — 导航栏菜单

```jsonc
{
  "navBar": {
    "links": [
      // 预设链接（自动映射为内置图标和路径）
      { "preset": "Home" },

      // 完整自定义链接
      {
        "name": "链接",                 // 显示名称
        "url": "/links/",              // 链接地址
        "icon": "material-symbols:link", // Iconify 图标名
        "children": [                  // 子菜单（可选）
          {
            "name": "GitHub",
            "url": "https://github.com/Casumi",
            "external": true,          // 外部链接（新标签打开）
            "icon": "fa7-brands:github"
          },
          { "preset": "About" }       // 子菜单中也可以使用预设
        ]
      }
    ]
  }
}
```

### 可用的预设名

| 预设名 | 用途 |
|--------|------|
| `Home` | 首页 |
| `Archive` | 归档 |
| `About` | 关于 |
| `Friends` | 友链 |
| `Anime` | 追番 |
| `Diary` | 日记 |
| `Albums` | 相册 |
| `Projects` | 项目 |
| `Skills` | 技能 |
| `Timeline` | 时间线 |

---

## profile 段 — 个人资料

```jsonc
{
  "profile": {
    "avatar": "assets/images/casuki-transparent.webp", // 头像
    "name": "Casumi",
    "bio": "✨ 在代码和二次元之间反复横跳 ✨",
    "typewriter": {
      "enable": true,    // 是否启用打字机效果
      "speed": 80        // 打字速度（毫秒）
    },
    "links": [           // 社交链接
      {
        "name": "GitHub",
        "icon": "fa7-brands:github",
        "url": "https://github.com/ca-suki"
      }
    ]
  }
}
```

---

## announcement 段 — 公告栏

```jsonc
{
  "announcement": {
    "title": "公告",
    "content": "🎉 欢迎来访~ 🎉",
    "closable": true,
    "link": {
      "enable": true,
      "text": "了解更多",
      "url": "/about/",
      "external": false    // 是否新标签打开
    }
  }
}
```

---

## music 段 — 歌单

```jsonc
{
  "music": {
    "localPlaylist": [
      {
        "id": 1,
        "title": "口笛で愛は歌えない",    // 歌曲名
        "artist": "Dazbee",            // 歌手
        "cover": "assets/music/cover/dazbee.webp", // 封面（本地或 URL）
        "url": "assets/music/url/dazbee.mp3",      // 音频（本地或 URL）
        "duration": 0                  // 时长（秒，0=未知）
      }
    ]
  }
}
```

> 提示：`cover` 和 `url` 支持完整 URL（如 `https://...`）和本地路径。

---

## pio 段 — Live2D 看板娘

```jsonc
{
  "pio": {
    "models": [                                  // 模型路径列表（第一个为默认）
      "/pio/models/拉薇1/拉薇1.model3.json",
      "/pio/models/NOIR/noir.model3.json"
    ],
    "dialog": {                                  // 对话文本
      "welcome": "Welcome to Mizuki Website!",   // 欢迎词
      "touch": ["What are you doing?", "HENTAI!"], // 触摸回应（数组，随机选一个）
      "home": "Click here to go back to homepage!", // 首页提示
      "skin": ["Want to see my new outfit?", "..."], // 换装提示
      "close": "QWQ See you next time~",         // 关闭提示
      "link": "https://github.com/LyraVoid/Mizuki"  // 关于链接
    }
  }
}
```

---

## footer 段 — 页脚

```jsonc
{
  "footer": {
    "customHtml": ""  // 自定义 HTML（如备案号）。为空则读取 FooterConfig.html
  }
}
```

---

## 完整示例

```jsonc
{
  "site": { "title": "Casumi" },
  "profile": { "name": "Casumi" }
}
```

只覆盖 `title` 和 `profile.name`，其余所有配置使用主题默认值。
