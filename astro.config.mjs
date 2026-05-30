// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yunlin0.github.io',
  integrations: [
    starlight({
      title: 'yunLin0',
      description: 'Developer & Creator — 个人主页',
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/yunLin0' },
        { icon: 'email', label: 'Email', href: 'mailto:z_jialin0@163.com' },
      ],
      sidebar: [
        { label: '首页', link: '/' },
        { label: '关于我', link: '/about' },
        { label: '技能', link: '/skills' },
        { label: '项目', link: '/projects' },
        { label: '经历', link: '/experience' },
        { label: '联系', link: '/contact' },
      ],
      customCss: ['./src/styles/custom.css'],
      disable404Route: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    }),
  ],
});
