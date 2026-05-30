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

| &nbsp;&nbsp;&nbsp;&nbsp;功能&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| --- | --- |
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

| &nbsp;&nbsp;层级&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用途&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| --- | --- | --- |
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

## 🎮 学习闯关路线

> 每通关一关，解锁下一关。集齐全部徽章，你就是全栈战士 🏆

```
╔══════════════════════════════════════════════════════════════╗
║  🎯 当前进度: ██░░░░░░ 2/8 关  ·  已获得 2/8 枚徽章        ║
╚══════════════════════════════════════════════════════════════╝
```

---

### ⚔️ 第一关｜召唤师入门 — HTML & CSS 基础

```
难度: ★☆☆☆☆  |  预计耗时: 2~3 周  |  前置条件: 无
```

**通关目标**：
- [ ] 用 HTML 搭出一个完整页面（标题、段落、图片、链接、表单）
- [ ] 用 CSS 实现 Flexbox 两栏布局 + Grid 九宫格
- [ ] 给页面加上动画效果（过渡 / 关键帧）
- [ ] 用 Git 完成一次完整的 commit → push → PR 流程

**推荐装备**：
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/) — 前端百科全书
- [freeCodeCamp](https://www.freecodecamp.org/) — 免费交互式课程
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Flexbox 图解

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「标记使者」徽章** — 你已掌握网页的骨骼与皮肤
</details>

---

### ⚔️ 第二关｜魔法咏唱 — CSS 进阶

```
难度: ★★☆☆☆  |  预计耗时: 2~3 周  |  前置条件: 第一关通过
```

**通关目标**：
- [ ] 用 Tailwind CSS / UnoCSS 重构第一关页面
- [ ] 实现响应式设计（手机 / 平板 / 桌面三档适配）
- [ ] 理解 CSS 变量并搭建一套主题系统（亮色 / 暗色）
- [ ] 用 CSS Modules 或 Scoped Style 做组件样式隔离

**推荐装备**：
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs) — 原子化 CSS 框架
- [UnoCSS](https://unocss.dev/) — 即时按需的原子化引擎
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) — 新一代响应式方案

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「样式大师」徽章** — 你已能用 CSS 驾驭任何布局
</details>

---

### ⚔️ 第三关｜初入异世界 — JavaScript 核心

```
难度: ★★★☆☆  |  预计耗时: 3~4 周  |  前置条件: 第二关通过
```

**通关目标**：
- [ ] 熟练使用 ES6+ 语法（解构、箭头函数、模板字符串、Promise）
- [ ] 完成 DOM 操作：动态渲染列表、事件委托、表单验证
- [ ] 用 Fetch API 调用一个公开 API 并渲染数据
- [ ] 理解 async/await 并处理错误

**推荐装备**：
- [JavaScript.info](https://javascript.info/) — 现代 JS 教程
- [ES6 入门教程 — 阮一峰](https://es6.ruanyifeng.com/) — 中文经典
- [Can I Use](https://caniuse.com/) — 兼容性查询

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「脚本术士」徽章** — 你已能让网页活起来
</details>

---

### ⚔️ 第四关｜锻造圣剑 — TypeScript

```
难度: ★★★☆☆  |  预计耗时: 2~3 周  |  前置条件: 第三关通过
```

**通关目标**：
- [ ] 理解类型系统：基础类型、接口、泛型
- [ ] 能为一个 JS 项目添加 TS 支持并逐步迁移
- [ ] 使用类型守卫和条件类型处理复杂场景
- [ ] 在 Astro 项目中正常编写 `.ts` 文件

**推荐装备**：
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/) — 权威参考
- [TypeScript Playground](https://www.typescriptlang.org/play) — 在线实验
- [类型体操入门](https://github.com/type-challenges/type-challenges) — 进阶挑战

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「类型守护者」徽章** — 你已能用类型武装自己的代码
</details>

---

### ⚔️ 第五关｜召唤坐骑 — 前端框架

```
难度: ★★★★☆  |  预计耗时: 4~6 周  |  前置条件: 第四关通过
```

**通关目标**：
- [ ] 学习 React / Vue / Svelte 中任一框架的核心概念
- [ ] 完成组件化开发：父子通信、状态管理、生命周期
- [ ] 用框架做一个小型 SPA（待办列表 / 天气查询）
- [ ] 了解 Astro Islands 架构，能在 Astro 中嵌入框架组件

**推荐装备**：
- [React 官方文档](https://react.dev/) — 2024 新版教程
- [Vue.js 官方文档](https://cn.vuejs.org/) — 中文友好
- [Svelte 教程](https://svelte.dev/tutorial) — 最轻量的选择

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「框架骑士」徽章** — 你已拥有自己的战斗伙伴
</details>

---

### ⚔️ 第六关｜铸造神殿 — Astro 全栈

```
难度: ★★★★☆  |  预计耗时: 3~4 周  |  前置条件: 第五关通过
```

**通关目标**：
- [ ] 用 Astro 从零搭建一个完整站点（≥5 个页面）
- [ ] 掌握 Content Collections 实现类型安全的 Markdown 管理
- [ ] 实现 SSG 静态生成 + 部署到 GitHub Pages
- [ ] 添加搜索、暗色模式、RSS 等功能

**推荐装备**：
- [Astro 官方文档](https://docs.astro.build/zh-cn/) — 最权威教程
- [Starlight](https://starlight.astro.build/) — 文档站主题
- [Astro Templates](https://astro.build/themes/) — 模板灵感

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「神殿建筑师」徽章** — 你已能独立建造完整的网站殿堂
>
> 💡 **恭喜！你已通关本项目所用的全部技术栈！** 以下关卡为进阶挑战。
</details>

---

### ⚔️ 第七关｜飞升之路 — 部署与性能

```
难度: ★★★★★  |  预计耗时: 2~3 周  |  前置条件: 第六关通过
```

**通关目标**：
- [ ] 用 Lighthouse 跑分 ≥ 90（性能 / SEO / 可访问性）
- [ ] 配置 GitHub Actions CI/CD 自动部署流水线
- [ ] 实现 SEO 优化：Meta 标签、Open Graph、Sitemap、结构化数据
- [ ] 用 View Transitions API 添加页面切换动画

**推荐装备**：
- [Web.dev 性能指南](https://web.dev/performance) — Google 官方
- [PageSpeed Insights](https://pagespeed.web.dev/) — 在线跑分
- [Astro SSG Guide](https://docs.astro.build/guides/static-assets/) — 静态资源优化

<details>
<summary>🎁 通关奖励</summary>

> 🏅 **「飞升者」徽章** — 你的作品已达到生产级标准
</details>

---

### ⚔️ 第八关｜最终试炼 — 全能战士

```
难度: ★★★★★  |  预计耗时: 持续进化  |  前置条件: 第七关通过
```

**通关目标**：
- [ ] 实现 PWA 离线支持（Service Worker + Manifest）
- [ ] 接入 i18n 国际化，支持中英双语
- [ ] 集成数据库（Supabase / Turso）实现真实后端功能
- [ ] 用 Astro Middleware 实现服务端逻辑
- [ ] 构建一个完整的 SaaS / 开源项目并发布

**推荐装备**：
- [PWA 文档](https://web.dev/articles/what-are-pwas) — 渐进式 Web 应用
- [Supabase](https://supabase.com/) — 开源 Firebase 替代
- [Astro Middleware](https://docs.astro.build/guides/middleware/) — 请求拦截

<details>
<summary>🎁 通关奖励</summary>

> 🏅🏆 **「全能战士」终极徽章** — 你已掌握从前端到部署的全部技能！
>
> **你就是 Full-Stack Developer！**
</details>

---

```
╔══════════════════════════════════════════════════════════════╗
║  🏆 全部通关后解锁成就：                                      ║
║                                                              ║
║  🥉 初出茅庐 — 通关第 1~2 关                                  ║
║  🥈 独当一面 — 通关第 3~5 关                                  ║
║  🥇 独步天下 — 通关第 6~7 关                                  ║
║  👑 全能战士 — 通关全部 8 关                                   ║
╚══════════════════════════════════════════════════════════════╝
```

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
