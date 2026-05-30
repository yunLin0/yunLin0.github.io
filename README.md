<div align="center">

# 🌐 yunLin0.github.io

**yunLin 的个人主页 —— 用 Astro + Starlight 打造的现代化个人文档站**

[![Astro](https://img.shields.io/badge/Astro-v6.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Starlight](https://img.shields.io/badge/Starlight-v0.39-5800FF?logo=starlight&logoColor=white)](https://starlight.astro.build)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222)](https://pages.github.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**[🚀 在线访问](https://yunlin0.github.io) · [📝 博客](https://yunlin0.github.io/blog) · [💬 留言板](https://yunlin0.github.io/guestbook)**

</div>

---

## 📖 项目简介

这是一个基于 **Astro 6 + Starlight** 构建的个人介绍文档站，集成了博客、留言板、全文搜索、访客统计等功能。采用 **Islands Architecture（岛屿架构）**，按需加载交互组件，确保极致性能。

## ✨ 功能特性

| 功能 | 说明 |
|------|------|
| 🏠 个人主页 | Hero 欢迎区 + 信息卡片网格 |
| 👤 关于我 | 个人简介、兴趣爱好 |
| 🛠️ 技能树 | 分组彩色标签展示 |
| 📂 项目集 | 手动卡片 + GitHub 仓库自动获取 |
| 📅 时间线 | 学习/工作经历 |
| 📝 博客 | MDX 文章 + 标签分类 + 阅读进度条 |
| 💬 留言板 | 基于 GitHub Discussions |
| 🔍 全文搜索 | Pagefind 实现（Starlight 内置） |
| 📊 访客统计 | Umami 隐私友好分析 |
| 🌗 深色模式 | 一键切换 + 自动记忆偏好 |
| 🎨 背景图 | 动漫背景 + 毛玻璃效果 + 透明度可调 |
| 📡 RSS | 订阅博客更新 |

## 🛠️ 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| 框架 | [Astro](https://astro.build) v6.4 | 静态站点生成，Islands 架构 |
| 主题 | [Starlight](https://starlight.astro.build) v0.39 | 文档风格 UI，内置搜索/暗色模式 |
| 语言 | TypeScript + MDX | 类型安全 + 丰富内容 |
| 部署 | [GitHub Pages](https://pages.github.com) | 免费托管 + 自动部署 |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | push 自动构建发布 |
| 统计 | [Umami](https://umami.is) | 隐私友好访客分析 |
| 搜索 | [Pagefind](https://pagefind.app) | 静态全文搜索引擎 |

## 📁 项目结构

```
yunLin0.github.io/
├── .github/workflows/      # GitHub Actions 自动部署
│   └── deploy.yml
├── public/                  # 静态资源（不经过构建处理）
│   ├── images/              # 图片资源
│   │   └── bg.jpg           # 背景图
│   ├── js/                  # 外部 JS 脚本
│   │   ├── github-repos.js  # GitHub 仓库自动获取
│   │   └── guestbook.js     # 留言板跳转脚本
│   └── rss.xml              # RSS 订阅源
├── src/
│   ├── content/docs/        # ⭐ 所有页面内容（MDX 文件）
│   │   ├── index.mdx        # 首页
│   │   ├── about.mdx        # 关于我
│   │   ├── skills.mdx       # 技能树
│   │   ├── projects.mdx     # 项目集
│   │   ├── experience.mdx   # 时间线
│   │   ├── contact.mdx      # 联系方式
│   │   ├── guestbook.mdx    # 留言板
│   │   └── blog/            # 博客文章
│   │       ├── index.mdx    # 博客列表
│   │       ├── hello-world.mdx
│   │       └── astro-guide.mdx
│   ├── styles/
│   │   └── custom.css       # 自定义样式
│   └── content.config.ts    # 内容集合配置
├── astro.config.mjs         # ⭐ 核心配置文件
├── package.json
└── tsconfig.json
```

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18（推荐 20+）
- **包管理器**：npm / pnpm / yarn

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/yunLin0/yunLin0.github.io.git
cd yunLin0.github.io

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
# 浏览器打开 http://localhost:4321

# 4. 构建生产版本
npm run build

# 5. 预览构建结果
npm run preview
```

> [!TIP]
> 开发模式支持热更新，修改文件后浏览器自动刷新。

## 📝 维护指南

### 一、日常内容更新

#### 编辑已有页面

所有页面内容在 `src/content/docs/` 目录下，直接编辑对应的 `.mdx` 文件即可：

```
src/content/docs/
├── index.mdx         → 首页 Hero + 卡片
├── about.mdx         → 关于我
├── skills.mdx        → 技能标签
├── projects.mdx      → 项目卡片
├── experience.mdx    → 时间线
├── contact.mdx       → 联系方式
└── guestbook.mdx     → 留言板
```

#### 添加新博客文章

在 `src/content/docs/blog/` 下新建 `.mdx` 文件：

```mdx
---
title: 文章标题
description: 文章描述
date: 2026-01-15
tags: [标签1, 标签2]
---

# 文章标题

正文内容...
```

> [!NOTE]
> 博客列表页 (`blog/index.mdx`) 会自动读取 `blog/` 目录下的所有文章并展示。

#### 更新侧边栏导航

编辑 `astro.config.mjs` 中的 `sidebar` 数组：

```javascript
sidebar: [
  { label: '首页', link: '/' },
  { label: '关于我', link: '/about' },
  // 添加新页面...
]
```

#### 更新社交链接

编辑 `astro.config.mjs` 中的 `social` 对象：

```javascript
social: [
  { icon: 'github', href: 'https://github.com/yunLin0', label: 'GitHub' },
  // 添加新链接...
]
```

#### 修改背景图

1. 替换 `public/images/bg.jpg` 为你自己的图片
2. 在 `astro.config.mjs` 的 head 配置中调整透明度（`opacity: 0.35`）

#### 修改主题颜色

编辑 `src/styles/custom.css` 中的 CSS 变量：

```css
:root {
  --sl-color-accent: #4F46E5;        /* 主色调 */
  --sl-color-accent-high: #4338CA;   /* 悬停色 */
  /* 更多颜色变量... */
}
```

### 二、GitHub 仓库自动获取

`public/js/github-repos.js` 会自动从 GitHub API 拉取你的公开仓库并展示在项目页。

如需排除某些仓库，在 `projects.mdx` 中修改过滤列表：

```html
<script is:inline src="/js/github-repos.js"
  data-exclude="repo1,repo2,yunLin0.github.io">
</script>
```

### 三、留言板配置

留言板基于 GitHub Discussions 实现，确保：

1. 仓库已启用 **Discussions** 功能（Settings → Features → Discussions）
2. `public/js/guestbook.js` 中的仓库名正确

### 四、访客统计 (Umami)

1. 登录 [Umami Cloud](https://cloud.umami.is)
2. 在 `astro.config.mjs` 中替换 Website ID：
   ```javascript
   { tag: 'script', attrs: { src: 'https://analytics.umami.is/script.js', 'data-website-id': '你的ID' } }
   ```
3. 访问 Umami 控制台查看数据

### 五、依赖更新

```bash
# 检查可更新的依赖
npm outdated

# 更新所有依赖（谨慎，可能有破坏性变更）
npm update

# 更新 Astro 到最新大版本
npm install astro@latest
npm install @astrojs/starlight@latest

# 安全检查
npm audit
```

> [!TIP]
> 建议每月检查一次依赖更新，重大版本升级前先在本地测试。

### 六、部署流程

```
git push → GitHub Actions 自动构建 → 部署到 GitHub Pages
```

无需手动部署，推送到 `main` 分支即自动发布。GitHub Actions 工作流定义在 `.github/workflows/deploy.yml`。

### 七、常见问题排查

| 问题 | 解决方案 |
|------|---------|
| 样式没生效 | `Ctrl+Shift+R` 强制刷新（浏览器缓存问题） |
| 构建报错 | 检查 Node.js 版本 >= 18 |
| 背景图不显示 | 确认 `public/images/bg.jpg` 存在且路径正确 |
| 留言板打不开 | 仓库需先启用 Discussions 功能 |
| 搜索不工作 | 运行 `npm run build` 后搜索索引才会更新 |

---

## 📚 学习路线

<details>
<summary><b>🟢 第一阶段：前端基础</b></summary>

- **HTML5**：语义化标签、表单、多媒体
- **CSS3**：Flexbox、Grid 布局、动画、变量
- **JavaScript**：ES6+ 语法、DOM 操作、异步编程
- **Git**：版本控制、分支管理、Pull Request

**推荐资源**：
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [JavaScript.info](https://javascript.info/)
</details>

<details>
<summary><b>🔵 第二阶段：CSS 进阶</b></summary>

- **Tailwind CSS / UnoCSS**：原子化 CSS 框架
- **CSS Modules**：作用域样式隔离
- **响应式设计**：媒体查询、容器查询
- **CSS 变量与主题系统**

**推荐资源**：
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [CSS-Tricks](https://css-tricks.com/)
</details>

<details>
<summary><b>🟠 第三阶段：Astro 框架</b></summary>

- **Islands Architecture**：按需水合，极致性能
- **Content Collections**：类型安全的 Markdown/MDX
- **文件路由与布局系统**
- **SSG vs SSR**：静态生成与服务端渲染

**推荐资源**：
- [Astro 官方文档](https://docs.astro.build/zh-cn/)
- [Astro 中文教程](https://docs.astro.build/zh-cn/getting-started/)
</details>

<details>
<summary><b>🟣 第四阶段：UI 框架集成</b></summary>

- 在 Astro 中使用 **React / Vue / Svelte / Solid** 作为交互岛屿
- 组件通信与状态管理
- 选择合适的框架场景

**推荐资源**：
- [React 官方文档](https://react.dev/)
- [Vue.js 官方文档](https://cn.vuejs.org/)
- [Svelte 教程](https://svelte.dev/tutorial)
</details>

<details>
<summary><b>🔴 第五阶段：内容与数据</b></summary>

- **MDX**：在 Markdown 中使用 JSX 组件
- **Astro Content Collections**：类型安全内容管理
- **数据获取模式**：静态数据 + API 调用
- **RSS 订阅**实现

**推荐资源**：
- [MDX 官方文档](https://mdxjs.com/)
- [Astro Content Collections](https://docs.astro.build/guides/content-collections/)
</details>

<details>
<summary><b>🟡 第六阶段：部署与优化</b></summary>

- **GitHub Pages / Vercel / Netlify / Cloudflare Pages**
- **Lighthouse 审计**与性能优化
- **SEO**：Meta 标签、Open Graph、Sitemap
- **View Transitions API**：页面切换动画

**推荐资源**：
- [Web.dev 性能指南](https://web.dev/performance)
- [PageSpeed Insights](https://pagespeed.web.dev/)
</details>

<details>
<summary><b>⚪ 第七阶段：进阶方向</b></summary>

- **Starlight 文档站**（本项目所用）
- **Astro Middleware**：请求拦截与处理
- **PWA**：渐进式 Web 应用
- **i18n 国际化**：多语言支持
- **数据库集成**：Supabase / Turso

**推荐资源**：
- [Starlight 官方文档](https://starlight.astro.build/zh-cn/)
- [Astro GitHub](https://github.com/withastro/astro)
</details>

---

## 🗺️ 路线图

- [x] 基础页面（首页、关于、技能、项目、经历、联系）
- [x] 博客系统 + 标签分类
- [x] GitHub 仓库自动获取
- [x] 深色模式 + 背景图 + 毛玻璃效果
- [x] 全文搜索 (Pagefind)
- [x] 访客统计 (Umami)
- [x] RSS 订阅
- [x] 留言板 (GitHub Discussions)
- [x] 阅读进度条
- [ ] 评论系统 (Giscus)
- [ ] 多语言 (i18n)
- [ ] PWA 支持
- [ ] 动画与视图过渡

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

**Made with ❤️ by [yunLin](https://github.com/yunLin0)**

[![GitHub](https://img.shields.io/badge/GitHub-yunLin0-181717?logo=github)](https://github.com/yunLin0)
[![Email](https://img.shields.io/badge/Email-z__jialin0%40163.com-EA4335?logo=gmail&logoColor=white)](mailto:z_jialin0@163.com)

</div>
