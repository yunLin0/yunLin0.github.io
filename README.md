# 🌟 yunLin0 个人主页 — 维护指南

> 基于 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建的文档风格个人主页

---

## 📁 项目结构

```
yunLin0.github.io/
├── .github/workflows/
│   └── deploy.yml          ← GitHub Actions 自动部署配置
├── public/
│   └── favicon.svg          ← 网站图标
├── src/
│   ├── content/
│   │   └── docs/            ← 📝 所有页面内容（Markdown 文件）
│   │       ├── index.mdx    ← 首页
│   │       ├── about.mdx    ← 关于我
│   │       ├── skills.mdx   ← 技能
│   │       ├── projects.mdx ← 项目
│   │       ├── experience.mdx← 经历
│   │       └── contact.mdx  ← 联系
│   ├── content.config.ts    ← 内容配置（一般不用改）
│   └── styles/
│       └── custom.css       ← 🎨 自定义样式（改颜色、布局在这里）
├── astro.config.mjs         ← ⚙️ 网站配置（标题、导航、社交链接）
├── package.json             ← 依赖管理
└── tsconfig.json            ← TypeScript 配置（不用改）
```

---

## 🔧 日常维护：修改内容

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
## 新项目名称

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

在 `src/content/docs/` 下新建一个 `.mdx` 文件，例如 `blog.mdx`：

```markdown
---
title: 博客
description: 我的博客文章
---

这里写你的内容...
```

### 第二步：添加到导航

编辑 `astro.config.mjs`，在 `sidebar` 数组中加一行：

```javascript
sidebar: [
  { label: '首页', link: '/' },
  { label: '关于我', link: '/about' },
  { label: '技能', link: '/skills' },
  { label: '项目', link: '/projects' },
  { label: '经历', link: '/experience' },
  { label: '博客', link: '/blog' },      // ← 新增
  { label: '联系', link: '/contact' },
],
```

### 第三步：推送

```bash
git add -A && git commit -m "添加博客页面" && git push
```

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

### Q: 我想换主题色怎么办？

编辑 `src/styles/custom.css`，修改 `:root` 中的颜色变量，然后推送。

### Q: 怎么添加图片？

1. 把图片放到 `public/` 目录下（例如 `public/images/photo.jpg`）
2. 在 Markdown 中引用：`![照片描述](/images/photo.jpg)`

### Q: 怎么让搜索引擎收录我的网站？

网站已有 sitemap（`sitemap.xml`），提交到 Google Search Console 即可：
1. 访问 https://search.google.com/search-console
2. 添加你的网站 `https://yunlin0.github.io`
3. 提交 sitemap：`https://yunlin0.github.io/sitemap-index.xml`

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
│  改内容  → src/content/docs/*.mdx                 │
│  改样式  → src/styles/custom.css                  │
│  改配置  → astro.config.mjs                       │
│  改图标  → public/favicon.svg                     │
│                                                   │
└─────────────────────────────────────────────────┘
```

---

> 💡 **记住：你 90% 的操作只是编辑 `.mdx` 文件然后 `git push`，不需要学任何编程语言。**

有问题随时问我！
