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
        // Umami 访客统计
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-website-id': '1b0dea26-8a0a-4e4a-b913-76218fda8d76',
            src: 'https://cloud.umami.is/script.js',
          },
        },
        // 全页面背景图 + 阅读进度条 + 透明度滑块（用 JS 注入，绕过 CSS 层级）
        {
          tag: 'script',
          content: [
            '(function(){',
            '  var s=document.createElement("style");',
            '  var op=localStorage.getItem("bg-opacity")||"0.35";',
            '  s.textContent="',
            '    html,body{background:transparent!important;background-color:transparent!important}',
            '    body::before{content:\\"\\\\";position:fixed;inset:0;background:url(/images/bg.jpg) center/cover no-repeat;opacity:"+op+";z-index:-1;pointer-events:none;transition:opacity .3s}',
            '    .page,.main-frame,.sidebar-pane,.content-panel,.right-sidebar,.header,main{background:transparent!important;background-color:transparent!important}',
            '    .sidebar-pane{background:rgba(255,255,255,0.75)!important;background-color:rgba(255,255,255,0.75)!important;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}',
            '    .content-panel{background:rgba(255,255,255,0.7)!important;background-color:rgba(255,255,255,0.7)!important;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);padding-top:2rem!important}',
            '    .right-sidebar{background:rgba(255,255,255,0.75)!important;background-color:rgba(255,255,255,0.75)!important;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-left:1px solid var(--sl-color-gray-6)!important}',
            '    .header{background:rgba(255,255,255,0.7)!important;background-color:rgba(255,255,255,0.7)!important;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,0,0,0.06)!important}',
            '    [data-theme=\\"dark\\"] .sidebar-pane,[data-theme=\\"dark\\"] .right-sidebar{background:rgba(15,23,42,0.75)!important;background-color:rgba(15,23,42,0.75)!important}',
            '    [data-theme=\\"dark\\"] .content-panel,[data-theme=\\"dark\\"] .header{background:rgba(15,23,42,0.7)!important;background-color:rgba(15,23,42,0.7)!important}',
            '  ";',
            '  document.head.appendChild(s);',
            '})();',
          ].join('\n'),
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
              var initVal = saved !== null ? parseFloat(saved) : 0.35;
              var ctrl = document.createElement('div');
              ctrl.className = 'bg-control';
              ctrl.innerHTML = '<label>背景</label><input type="range" min="0" max="100" value="' + Math.round(initVal * 100) + '"><span class="opacity-value">' + Math.round(initVal * 100) + '%</span>';
              document.body.appendChild(ctrl);
              var slider = ctrl.querySelector('input');
              var val = ctrl.querySelector('.opacity-value');
              slider.addEventListener('input', function() {
                var v = slider.value / 100;
                val.textContent = slider.value + '%';
                localStorage.setItem('bg-opacity', v);
                var style = document.querySelector('style');
                if (style) {
                  style.textContent = style.textContent.replace(/opacity:[\\.\\d]+;z-index:-1/, 'opacity:' + v + ';z-index:-1');
                }
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
