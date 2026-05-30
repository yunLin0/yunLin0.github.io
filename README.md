# 🌟 yunLin0 个人主页 — 维护指南

> 基于 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建的文档风格个人主页

---

## 📁 项目结构

```
yunLin0.github.io/
├── .github/workflows/
│   └── deploy.yml              ← GitHub Actions 自动部署配置
├── public/
│   ├── favicon.svg              ← 网站图标
│   ├── rss.xml                  ← RSS 订阅源（手动更新）
│   ├── images/
│   │   └── bg.jpg               ← 🖼️ 全页面背景图
│   └── js/
│       ├── guestbook.js         ← 留言板脚本
│       └── github-repos.js      ← GitHub 项目卡片脚本
├── src/
│   ├── content/
│   │   └── docs/                ← 📝 所有页面内容（Markdown 文件）
│   │       ├── index.mdx        ← 首页
│   │       ├── about.mdx        ← 关于我
│   │       ├── skills.mdx       ← 技能
│   │       ├── projects.mdx     ← 项目（含 GitHub 自动拉取）
│   │       ├── experience.mdx   ← 经历
│   │       ├── contact.mdx      ← 联系
│   │       ├── guestbook.mdx    ← 留言板
│   │       └── blog/
│   │           ├── index.mdx        ← 博客列表页
│   │           ├── hello-world.mdx  ← 示例文章
│   │           └── astro-guide.mdx  ← 示例文章
│   ├── content.config.ts        ← 内容配置（一般不用改）
│   └── styles/
│       └── custom.css           ← 🎨 自定义样式
├── astro.config.mjs             ← ⚙️ 网站配置（标题、导航、背景、统计等）
├── package.json                 ← 依赖管理
└── tsconfig.json                ← TypeScript 配置（不用改）
```

---

## ✨ 功能一览

| 功能 | 说明 | 配置位置 |
|------|------|----------|
| 🖼️ 全页面背景图 | 固定背景 + 毛玻璃效果，透明度可调 | `public/images/bg.jpg` + `astro.config.mjs` |
| 🔍 透明度滑块 | 右下角滑块调节背景透明度（0%~100%） | 自动保存到 localStorage |
| 🌙 暗色模式 | 右上角切换，自动跟随系统 | 自带 |
| 🔍 全文搜索 | ⌘K 快捷键，搜索所有页面 | 自带（Pagefind） |
| 📖 阅读进度条 | 页面顶部渐变进度条 | `astro.config.mjs` |
| 📝 博客系统 | 写 Markdown 文章，带标签 | `src/content/docs/blog/` |
| 📦 GitHub 项目卡片 | 自动拉取公开仓库 | `projects.mdx` |
| 💬 留言板 | 跳转 GitHub Discussions 留言 | `guestbook.mdx` |
| 📡 RSS 订阅 | 读者可订阅博客更新 | `public/rss.xml` |
| 📊 访客统计 | Umami 隐私友好统计 | `astro.config.mjs` 中 Website ID |
| 🗺️ Sitemap | 自动生成，利于 SEO | 自带 |
| 📱 响应式布局 | 手机、平板、电脑自适应 | 自带 |

---

## 🔧 日常维护

### 你 90% 的操作只需要编辑 `src/content/docs/` 下的 `.mdx` 文件

### 1. 修改个人信息

打开 `src/content/docs/about.mdx`，直接编辑文字即可。

### 2. 添加/修改项目

打开 `src/content/docs/projects.mdx`，照着已有格式复制粘贴：

```html
<div class="project-card">
  <div class="card-header">
    <span class="card-title">项目名称</span>
    <span class="card-status">Active</span>
  </div>
  <p class="card-desc">项目描述</p>
  <div class="card-tags">
    <span class="card-tag">Python</span>
  </div>
</div>
```

> 页面底部的 GitHub 项目卡片会自动拉取你的公开仓库，不需要手动维护。

### 3. 修改技能标签

打开 `src/content/docs/skills.mdx`：

```html
<span class="skill-tag"><span class="tag-dot" style="background:#10b981"></span> 新技能名</span>
```

颜色：蓝 `#3b82f6` / 绿 `#10b981` / 黄 `#f59e0b` / 紫 `#8b5cf6` / 粉 `#ec4899` / 青 `#14b8a6`

### 4. 修改经历时间线

打开 `src/content/docs/experience.mdx`：

```html
<div class="timeline-item">
  <div class="tl-date">2025</div>
  <div class="tl-title">新的里程碑</div>
  <div class="tl-desc">描述</div>
</div>
```

### 5. 修改联系信息

打开 `src/content/docs/contact.mdx`，修改链接和文字。

### 6. 更换背景图

把新图片保存为 `public/images/bg.jpg`（或 `.png`），然后修改 `astro.config.mjs` 中的路径：

```javascript
s.textContent = '...background:url(/images/新文件名.jpg)...'
```

### 7. 调整背景默认透明度

编辑 `astro.config.mjs`，搜索 `0.35`（默认 35%），改成你想要的值（0~1）。

---

## 📝 写博客文章

### 第一步：创建文件

在 `src/content/docs/blog/` 下新建 `.mdx` 文件：

```markdown
---
title: 文章标题
description: 文章简介
date: 2026-05-30
tags: [标签1, 标签2]
---

## 正文标题

正文内容...
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
  <div class="blog-post-desc">文章简介</div>
  <div class="blog-post-tags">
    <span class="blog-tag">标签</span>
  </div>
</div>
```

### 第三步：更新 RSS

编辑 `public/rss.xml`，在 `<channel>` 中添加 `<item>` 条目。

### 第四步：推送

```bash
git add -A && git commit -m "发布博客：文章标题" && git push
```

---

## 💬 管理留言板

留言板通过 GitHub Discussions 实现。

**首次使用**：去仓库开启 Discussions：
仓库 → Settings → General → Features → 勾选 Discussions

之后访问 https://github.com/yunLin0/yunLin0.github.io/discussions 查看和回复留言。

---

## 📊 查看访客统计

1. 访问 https://cloud.umami.is
2. 登录后点击 yunlin0 查看数据

---

## 🎨 修改样式

### 改颜色

编辑 `src/styles/custom.css`，找到 `:root` 部分：

```css
:root {
  --sl-color-accent: #0ea5e9;        /* 主色调 */
  --sl-color-accent-high: #0284c7;   /* 深色 */
  --sl-color-accent-low: #e0f2fe;    /* 浅色背景 */
}
```

### 改网站标题和导航

编辑 `astro.config.mjs`：

```javascript
starlight({
  title: '你的标题',
  sidebar: [
    { label: '首页', link: '/' },
    { label: '新页面', link: '/new-page' },  // 添加新页面
  ],
  social: [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/你的用户名' },
    { icon: 'email', label: 'Email', href: 'mailto:你的邮箱' },
  ],
})
```

---

## 📖 添加新页面

### 第一步：创建文件

在 `src/content/docs/` 下新建 `.mdx` 文件：

```markdown
---
title: 新页面
description: 页面描述
---

内容...
```

### 第二步：添加到导航

编辑 `astro.config.mjs`，在 `sidebar` 数组中加一行。

### 第三步：推送

```bash
git add -A && git commit -m "添加新页面" && git push
```

---

## 🚀 发布修改

```bash
cd yunLin0.github.io
git add -A
git commit -m "说明改了什么"
git push
```

推送后等 1~2 分钟，GitHub Actions 自动构建部署。

---

## 📚 需要学习的内容

### 🟢 入门（立刻就能改）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **Markdown 语法** | 30 分钟 | [中文教程](https://markdown.com.cn) |
| **HTML 基础标签** | 1 小时 | [MDN 教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML) |
| **git 基本操作** | 30 分钟 | `add`、`commit`、`push` 三个命令 |

### 🟡 进阶（想自定义更多）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **CSS 基础** | 2~3 小时 | [CSS 教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) |
| **Astro 入门** | 2~3 小时 | [Astro 文档](https://docs.astro.build/zh-cn/) |
| **Starlight 组件** | 1~2 小时 | [Starlight 文档](https://starlight.astro.build/zh-cn/) |

### 🔴 高级（想深度定制）

| 内容 | 学习时间 | 说明 |
|------|----------|------|
| **JavaScript 基础** | 1~2 周 | 添加交互功能 |
| **响应式设计** | 2~3 天 | 适配手机和平板 |
| **Astro 组件开发** | 3~5 天 | 创建自定义组件 |

---

## ❓ 常见问题

### Q: 我改了文件但网站没变化？

1. 确认已经 `git push`
2. 去 https://github.com/yunLin0/yunLin0.github.io/actions 查看部署状态
3. 等 1~2 分钟，`Ctrl + Shift + R` 强制刷新

### Q: 本地预览？

```bash
cd yunLin0.github.io
npm install
npm run dev
```

打开 http://localhost:4321

### Q: 背景图不显示？

1. 确认图片在 `public/images/bg.jpg`
2. 右下角滑块调到 100% 试试
3. 检查浏览器控制台是否有 404 错误

### Q: 怎么换背景图？

1. 新图片保存为 `public/images/bg.jpg`
2. 推送即可，无需改代码

### Q: 留言板不能用？

去仓库 Settings → Features → 开启 Discussions

### Q: 搜索引擎收录？

提交 sitemap：`https://yunlin0.github.io/sitemap-index.xml`

---

## 📋 快速参考

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
│  换背景    → public/images/bg.jpg                 │
│  更新 RSS  → public/rss.xml                       │
│  改脚本    → public/js/*.js                       │
│                                                   │
├─────────────────────────────────────────────────┤
│  功能速查                                         │
│                                                   │
│  背景图    → public/images/bg.jpg（滑块调透明度）  │
│  暗色模式  → 自带，改色在 custom.css               │
│  搜索      → 自带（⌘K）                           │
│  博客      → blog/ 目录 + blog/index.mdx          │
│  留言板    → guestbook.mdx + GitHub Discussions    │
│  项目卡片  → 自动拉取 GitHub 仓库                  │
│  RSS       → public/rss.xml 手动更新               │
│  统计      → astro.config.mjs 中的 Umami ID       │
│  进度条    → 自动                                  │
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
