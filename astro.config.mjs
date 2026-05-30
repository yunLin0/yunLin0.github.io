// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yunlin0.github.io',
  integrations: [
    starlight({
      title: 'yunLin0',
      description: 'Developer & Creator — 个人主页',
      favicon: '/favicon.svg',
      lastUpdated: true,
      pagination: true,
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/yunLin0' },
        { icon: 'email', label: 'Email', href: 'mailto:z_jialin0@163.com' },
        { icon: 'rss', label: 'RSS', href: 'https://yunlin0.github.io/rss.xml' },
      ],
      sidebar: [
        { label: '首页', link: '/' },
        { label: '关于我', link: '/about' },
        { label: '技能', link: '/skills' },
        { label: '项目', link: '/projects' },
        {
          label: '博客',
          items: [
            { label: '文章列表', link: '/blog' },
          ],
        },
        { label: '经历', link: '/experience' },
        { label: '留言板', link: '/guestbook' },
        { label: '联系', link: '/contact' },
      ],
      head: [
        // Umami 访客统计（稍后配置 website-id）
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-website-id': '1b0dea26-8a0a-4e4a-b913-76218fda8d76',
            src: 'https://cloud.umami.is/script.js',
          },
        },
        // 阅读进度条
        {
          tag: 'script',
          content: `
            document.addEventListener('DOMContentLoaded', function() {
              var bar = document.createElement('div');
              bar.className = 'reading-progress';
              document.body.prepend(bar);
              window.addEventListener('scroll', function() {
                var scrollTop = window.scrollY;
                var docHeight = document.documentElement.scrollHeight - window.innerHeight;
                var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                bar.style.width = progress + '%';
              });
            });
          `,
        },
        // 背景透明度控制滑块
        {
          tag: 'script',
          content: `
            document.addEventListener('DOMContentLoaded', function() {
              var saved = localStorage.getItem('bg-opacity');
              if (saved !== null) {
                document.documentElement.style.setProperty('--bg-opacity', saved);
              }
              var ctrl = document.createElement('div');
              ctrl.className = 'bg-control';
              ctrl.innerHTML = '<label>背景</label><input type="range" min="0" max="100" value="' + Math.round((saved || 0.15) * 100) + '"><span class="opacity-value">' + Math.round((saved || 0.15) * 100) + '%</span>';
              document.body.appendChild(ctrl);
              var slider = ctrl.querySelector('input');
              var val = ctrl.querySelector('.opacity-value');
              slider.addEventListener('input', function() {
                var v = slider.value / 100;
                document.documentElement.style.setProperty('--bg-opacity', v);
                val.textContent = slider.value + '%';
                localStorage.setItem('bg-opacity', v);
              });
            });
          `,
        },
      ],
      customCss: ['./src/styles/custom.css'],
      disable404Route: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    }),
    sitemap(),
  ],
});
