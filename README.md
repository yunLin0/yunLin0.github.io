# 🌟 yunLin0 个人主页 — 维护指南

> 基于 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建的文档风格个人主页

---

## 📁 项目结构

```
yunLin0.github.io/
├── .github/workflows/
│   └── deploy.yml          ← GitHub Actions 自动部署配置
├── public/
│   ├── favicon.svg          ← 网站图标
│   ├── rss.xml              ← RSS 订阅源（手动更新）
│   └── js/
│       ├── guestbook.js     ← 留言板脚本
│       └── github-repos.js  ← GitHub 项目卡片脚本
├── src/
│   ├── content/
│   │   └── docs/            ← 📝 所有页面内容（Markdown 文件）
│   │       ├── index.mdx    ← 首页
│   │       ├── about.mdx    ← 关于我
│   │       ├── skills.mdx   ← 技能
│   │       ├── projects.mdx ← 项目（含 GitHub 自动拉取）
│   │       ├── experience.mdx← 经历
│   │       ├── contact.mdx  ← 联系
│   │       ├── guestbook.mdx← 留言板
│   │       └── blog/
│   │           ├── index.mdx        ← 博客列表页
│   │           ├── hello-world.mdx  ← 示例文章
│   │           └── astro-guide.mdx  ← 示例文章
│   ├── content.config.ts    ← 内容配置（一般不用改）
│   └── styles/
│       └── custom.css       ← 🎨 自定义样式（改颜色、布局在这里）
├── astro.config.mjs         ← ⚙️ 网站配置（标题、导航、社交链接）
├── package.json             ← 依赖管理
└── tsconfig.json            ← TypeScript 配置（不用改）
```

---

## ✨ 已有功能一览

| 功能 | 说明 | 配置位置 |
|------|------|----------|
| 🌙 暗色模式 | 右上角切换，自动跟随系统 | 自带，CSS 在 `custom.css` |
| 🔍 全文搜索 | ⌘K 快捷键，搜索所有页面内容 | 自带（Pagefind） |
| 📝 博客系统 | 写 Markdown 文章，自动归档 | `src/content/docs/blog/` |
| 📦 GitHub 项目卡片 | 自动拉取你的 GitHub 公开仓库 | `projects.mdx` + `public/js/github-repos.js` |
| 💬 留言板 | 跳转 GitHub Discussions 留言 | `guestbook.mdx` + `public/js/guestbook.js` |
| 📡 RSS 订阅 | 读者可订阅你的博客更新 | `public/rss.xml` |
| 📊 访客统计 | Umami 隐私友好统计 | `astro.config.mjs` 中的 `head` |
| 📖 阅读进度条 | 页面顶部显示阅读进度 | `astro.config.mjs` 中的 `head` |
| 🗺️ Sitemap | 自动生成，利于搜索引擎收录 | 自带 |
| 📱 响应式布局 | 手机、平板、电脑自适应 | 自带 |

---

## 🔧 日常维护

### 你 90% 的操作只需要编辑 `src/content/docs/` 下的 `.mdx` 文件

这些文件就是你网站的"文章"，用 **Markdown** 语法编写。

### 1. 修改个人信息

打开 `src/content/docs/about.mdx`，直接编辑文字即可：

```markdown
## 你好！

我是 **yunLin0**，一名充满好奇心的开发者。

你想写什么就写什么，支持 **加粗**、*斜体*、`代码` 等格式。
```

### 2. 添加/修改项目

打开 `src/content/docs/projects.mdx`，照着已有格式复制粘贴：

```markdown
<div class="project-card">
  <div class="card-header">
    <span class="card-title">项目名称</span>
    <span class="card-status">Active</span>
  </div>
  <p class="card-desc">
    在这里写项目描述，说明做了什么、用了什么技术。
  </p>
  <div class="card-tags">
    <span class="card-tag">Python</span>
    <span class="card-tag">Flask</span>
  </div>
</div>
```

> **注意**：页面底部的"GitHub 开源项目"区域会自动拉取你的 GitHub 仓库，不需要手动维护。

### 3. 修改技能标签

打开 `src/content/docs/skills.mdx`，添加或删除标签：

```markdown
<span class="skill-tag"><span class="tag-dot" style="background:#10b981"></span> 新技能名</span>
```

颜色代码参考：
- 🔵 蓝色：`#3b82f6`
- 🟢 绿色：`#10b981`
- 🟡 黄色：`#f59e0b`
- 🟣 紫色：`#8b5cf6`
- 🩷 粉色：`#ec4899`
- 🔷 青色：`#14b8a6`

### 4. 修改经历时间线

打开 `src/content/docs/experience.mdx`：

```markdown
<div class="timeline-item">
  <div class="tl-date">2025</div>
  <div class="tl-title">新的里程碑</div>
  <div class="tl-desc">描述你做了什么</div>
</div>
```

### 5. 修改联系信息

打开 `src/content/docs/contact.mdx`，修改链接和文字。

---

## 📝 写博客文章

### 第一步：创建文件

在 `src/content/docs/blog/` 下新建 `.mdx` 文件，例如 `my-post.mdx`：

```markdown
---
title: 文章标题
description: 文章简介（会显示在列表页）
date: 2026-05-30
tags: [标签1, 标签2]
---

## 正文标题

正文内容，支持所有 Markdown 语法：

- 列表
- **加粗**
- `代码`
- [链接](https://example.com)

代码块：

```python
print("Hello World!")
```

:::tip[提示框]
这是一个提示框，支持 tip、note、caution、danger 等类型。
:::
```

### 第二步：添加到博客列表

打开 `src/content/docs/blog/index.mdx`，在 `<div class="blog-list">` 中添加：

```html
<div class="blog-post-item">
  <a href="/blog/my-post">
    <div class="blog-post-title">文章标题</div>
  </a>
  <div class="blog-post-meta">
    <span>📅 2026-05-30</span>
    <span>⏱️ 5 分钟</span>
  </div>
  <div class="blog-post-desc">
    文章简介，一两句话概括。
  </div>
  <div class="blog-post-tags">
    <span class="blog-tag">标签1</span>
    <span class="blog-tag">标签2</span>
  </div>
</div>
```

### 第三步：更新 RSS

编辑 `public/rss.xml`，在 `<channel>` 中添加：

```xml
<item>
  <title>文章标题</title>
  <link>https://yunlin0.github.io/blog/my-post/</link>
  <description>文章简介</description>
  <pubDate>Sat, 30 May 2026 00:00:00 +0800</pubDate>
  <guid>https://yunlin0.github.io/blog/my-post/</guid>
</item>
```

> **日期格式**：`Sun, Mon, Tue, Wed, Thu, Fri, Sat` + 日 月 年 时间 +0800

### 第四步：推送

```bash
git add -A && git commit -m "发布博客：文章标题" && git push
```

---

## 💬 管理留言板

留言板通过 GitHub Discussions 实现：

1. 访问 https://github.com/yunLin0/yunLin0.github.io/discussions
2. 查看访客留言
3. 可以回复、标记为已解答

> **首次使用**：需要在 GitHub 仓库设置中开启 Discussions 功能。
> 仓库 → Settings → General → Features → 勾选 Discussions

---

## 📊 查看访客统计

网站集成了 [Umami](https://umami.is) 访客统计：

1. 访问 https://cloud.umami.is
2. 注册账号并添加网站 `https://yunlin0.github.io`
3. 获取 Website ID
4. 编辑 `astro.config.mjs`，把 `YOUR_WEBSITE_ID` 替换为真实 ID：

```javascript
head: [
  {
    tag: 'script',
    attrs: {
      defer: true,
      'data-website-id': '你的真实ID',  // ← 替换这里
      src: 'https://cloud.umami.is/script.js',
    },
  },
],
```

---

## 🎨 修改样式

### 改颜色

编辑 `src/styles/custom.css`，找到 `:root` 部分：

```css
:root {
  --sl-color-accent: #0ea5e9;        /* 主色调（蓝色） */
  --sl-color-accent-high: #0284c7;   /* 深一点的蓝 */
  --sl-color-accent-low: #e0f2fe;    /* 浅蓝背景 */
}
```

暗色模式颜色在 `[data-theme="dark"]` 部分，一起改。

常用颜色：
- 天蓝：`#0ea5e9`
- 翡翠绿：`#10b981`
- 紫罗兰：`#8b5cf6`
- 珊瑚红：`#f43f5e`
- 琥珀黄：`#f59e0b`

### 改网站标题和导航

编辑 `astro.config.mjs`：

```javascript
export default defineConfig({
  integrations: [
    starlight({
      title: '你的标题',           // ← 改这里
      sidebar: [
        { label: '首页', link: '/' },
        { label: '关于我', link: '/about' },
        // 添加新页面在这里 ↓
        { label: '新页面', link: '/new-page' },
      ],
      social: [
        // 修改社交链接
        { icon: 'github', label: 'GitHub', href: 'https://github.com/你的用户名' },
        { icon: 'email', label: 'Email', href: 'mailto:你的邮箱' },
      ],
    }),
  ],
});
```

---

## 📖 添加新页面

### 第一步：创建文件

在 `src/content/docs/` 下新建 `.mdx` 文件，例如 `links.mdx`：

```markdown
---
title: 友情链接
description: 我的朋友们
---

这里写内容...
```

### 第二步：添加到导航

编辑 `astro.config.mjs`，在 `sidebar` 数组中加一行：

```javascript
sidebar: [
  { label: '首页', link: '/' },
  { label: '关于我', link: '/about' },
  { label: '技能', link: '/skills' },
  { label: '项目', link: '/projects' },
  { label: '博客', link: '/blog' },
  { label: '经历', link: '/experience' },
  { label: '留言板', link: '/guestbook' },
  { label: '友情链接', link: '/links' },    // ← 新增
  { label: '联系', link: '/contact' },
],
```

### 第三步：推送

```bash
git add -A && git commit -m "添加友情链接页面" && git push
```

---

## 🚀 发布修改

每次修改后，需要提交到 GitHub，网站会自动更新：

```bash
# 1. 进入项目目录
cd yunLin0.github.io

# 2. 查看你改了哪些文件
git status

# 3. 添加所有修改
git add -A

# 4. 提交（引号里写你改了什么）
git commit -m "更新项目描述"

# 5. 推送到 GitHub
git push
```

推送后等 1~2 分钟，GitHub Actions 会自动构建并部署，刷新网站即可看到更新。

---

## 📚 需要学习的内容

### 🟢 入门（立刻就能改）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **Markdown 语法** | 30 分钟 | 写内容必备，[中文教程](https://markdown.com.cn) |
| **HTML 基础标签** | 1 小时 | `<div>`、`<p>`、`<a>`、`<span>` 等，[MDN 教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML) |
| **git 基本操作** | 30 分钟 | `add`、`commit`、`push` 三个命令够用 |

### 🟡 进阶（想自定义更多）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **CSS 基础** | 2~3 小时 | 改颜色、字体、间距，[CSS 教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) |
| **Astro 入门** | 2~3 小时 | 了解框架基本概念，[Astro 文档](https://docs.astro.build/zh-cn/) |
| **Starlight 组件** | 1~2 小时 | 使用 Card、Tabs 等内置组件，[Starlight 文档](https://starlight.astro.build/zh-cn/) |

### 🔴 高级（想深度定制）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **JavaScript 基础** | 1~2 周 | 添加交互功能 |
| **响应式设计** | 2~3 天 | 适配手机和平板 |
| **Astro 组件开发** | 3~5 天 | 创建自定义组件 |

---

## ❓ 常见问题

### Q: 我改了文件但网站没变化？

1. 确认你已经 `git push` 了
2. 去 https://github.com/yunLin0/yunLin0.github.io/actions 查看部署状态
3. 等待 1~2 分钟，然后**强制刷新**浏览器（`Ctrl + Shift + R`）

### Q: 我想在本地预览怎么办？

```bash
# 进入项目目录
cd yunLin0.github.io

# 安装依赖（只需执行一次）
npm install

# 启动本地开发服务器
npm run dev
```

然后浏览器打开 http://localhost:4321 即可预览。修改文件后页面会自动刷新。

### Q: 构建失败了怎么办？

1. 去 https://github.com/yunLin0/yunLin0.github.io/actions 查看错误日志
2. 最常见的原因是 Markdown 语法写错了（比如 `<div>` 没有闭合）
3. 检查你最近改的文件，对照已有格式排查

### Q: 暗色模式颜色不好看怎么改？

编辑 `src/styles/custom.css`，找到 `[data-theme="dark"]` 部分，修改颜色变量。

### Q: 怎么添加图片？

1. 把图片放到 `public/` 目录下（例如 `public/images/photo.jpg`）
2. 在 Markdown 中引用：`![照片描述](/images/photo.jpg)`

### Q: 怎么让搜索引擎收录我的网站？

网站已有 sitemap（`sitemap.xml`），提交到 Google Search Console 即可：
1. 访问 https://search.google.com/search-console
2. 添加你的网站 `https://yunlin0.github.io`
3. 提交 sitemap：`https://yunlin0.github.io/sitemap-index.xml`

### Q: GitHub 项目卡片没显示？

1. 确认你的 GitHub 仓库是 **公开** 的
2. 检查浏览器控制台是否有 API 请求错误
3. GitHub API 有速率限制，频繁访问可能被暂时屏蔽

### Q: 留言板不能用？

1. 需要先在 GitHub 仓库中开启 Discussions：
   - 仓库 → Settings → General → Features → 勾选 Discussions
2. 开启后，访客点击"提交留言"会跳转到 GitHub 进行留言

---

## 📋 快速参考卡片

```
┌─────────────────────────────────────────────────┐
│  日常修改流程                                     │
│                                                   │
│  1. 编辑 src/content/docs/ 下的 .mdx 文件         │
│  2. git add -A                                    │
│  3. git commit -m "说明改了什么"                   │
│  4. git push                                      │
│  5. 等 1~2 分钟，刷新网站                         │
│                                                   │
├─────────────────────────────────────────────────┤
│  本地预览                                         │
│                                                   │
│  npm run dev    →  http://localhost:4321          │
│                                                   │
├─────────────────────────────────────────────────┤
│  文件速查                                         │
│                                                   │
│  改内容    → src/content/docs/*.mdx               │
│  写博客    → src/content/docs/blog/*.mdx          │
│  改样式    → src/styles/custom.css                │
│  改配置    → astro.config.mjs                     │
│  改图标    → public/favicon.svg                   │
│  更新 RSS  → public/rss.xml                       │
│  改脚本    → public/js/*.js                       │
│                                                   │
├─────────────────────────────────────────────────┤
│  功能速查                                         │
│                                                   │
│  暗色模式  → 自带，改色在 custom.css               │
│  搜索      → 自带（⌘K）                           │
│  博客      → blog/ 目录 + blog/index.mdx          │
│  留言板    → guestbook.mdx + GitHub Discussions    │
│  项目卡片  → 自动拉取 GitHub 仓库                  │
│  RSS       → public/rss.xml 手动更新               │
│  统计      → astro.config.mjs 中的 Umami ID       │
│  进度条    → 自带                                  │
│                                                   │
└─────────────────────────────────────────────────┘
```

---

## 🔗 相关链接

- [Astro 文档](https://docs.astro.build/zh-cn/)
- [Starlight 文档](https://starlight.astro.build/zh-cn/)
- [Markdown 教程](https://markdown.com.cn)
- [Umami 统计](https://umami.is)
- [GitHub Discussions](https://docs.github.com/zh/discussions)

---

> 💡 **记住：你 90% 的操作只是编辑 `.mdx` 文件然后 `git push`，不需要学任何编程语言。**

有问题随时问我！
