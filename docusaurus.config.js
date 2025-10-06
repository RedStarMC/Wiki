// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
import {themes as prismThemes} from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '红星我的世界社区 维基',
  tagline: 'RedStarMC社区的百科全书',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.redstarmc.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'redstarmc', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/redstarmc/Wiki/tree/main/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'keywords', content: 'redstarmc,红星我的世界社区,MC,我的世界,Minecraft,Wiki,维基,文档,服务器,红星,RS,RedStar,推荐,Java,优质,怎么'},
        {name: 'description', content: '红星我的世界社区（www.redstarmc.top)，是一个致力于为玩家带来快乐的游戏社区。这里是它的维基，我们可以为你的游玩过程提供许多帮助！也能从这里即时获取服务器的最新消息。'},
      ],
      navbar: {
        title: '红星我的世界社区维基',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            to: 'news',
            label: '新闻',
            position: 'left'
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '其人志',
          //   docsPluginId: 'renwu'
          // },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '管理人员页面',
            docsPluginId: 'admin'
          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://www.redstarmc.top',
            position: 'right',
            label: '官网',
          },
          {
            href: 'https://github.com/RedStarMC',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'light',
        links: [
          {
            title: '维基',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
              {
                label: '关于我们',
                to: '/about',
              },
              {
                label: '服务条款',
                to: '/service',
              },
              {
                label: '已归档',
                to: '/deprecated/intro',
              },
              {
                label: 'GitHub 仓库',
                href: 'https://github.com/redstarmc/Wiki',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: '官 方 网 站',
                href: 'https://www.redstarmc.top/'
              },
              {
                label: 'Minecraft外置登陆身份验证系统',
                href: 'https://login.redstarmc.top'
              },
              {
                label: 'QQ 频道',
                href: 'https://pd.qq.com/s/1dxf9takj',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '未添加',
                to: '1',
              }
            ],
          },
          {
            title: '本站驱动和监督信息',
            items: [
              {
                label: '本站由 GitHub Pages 强力驱动',
                href: 'https://github.com/',
              },
              {
                label: '本站由 Cloudflare 强力驱动',
                href: 'https://cloudflare.com/',
              },
              {
                label: '中央网信办违法和不良信息举报中心',
                href: 'https://www.12377.cn/',
              },
              {
                html: `<a href="https://ipw.cn/ssl/?site=wiki.redstarmc.top" title="本站支持SSL安全访问" target='_blank'><img style='display:inline-block;vertical-align:middle' alt="本站支持SSL安全访问" src="https://static.ipw.cn/icon/ssl-s1.svg"></a> <a href="https://ipw.cn/ipv6webcheck/?site=wiki.redstarmc.top" title="本站支持IPv6访问" target='_blank'><img style='display:inline-block;vertical-align:middle' alt="本站支持IPv6访问" src="https://static.ipw.cn/icon/ipv6-certified-s1.svg"></a><img src="https://w.saobby.com/w/0p5be1o6" alt="访客统计">`,
              },
            ],
          },
        ],
        // 底部版权信息
        // copyright: `Copyright © 2021 - ${new Date().getFullYear()} RedStarMC Community, All Rights Reserved.`
        copyright: `<a href="https://www.redstarmc.top/Wiki">红星我的世界社区维基</a> © 2021 - ${new Date().getFullYear()} 由 <a href="https://www.redstarmc.top">红星我的世界社区</a> 授权 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0 许可协议</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="CC"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="BY"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;" alt="SA">`
      },
      // 深浅主题
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'admin',
          path: 'admin',
          routeBasePath: 'admin',
          sidebarPath: './sidebars.js',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
      ],
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'news',
          path: 'news',
          routeBasePath: 'news',
          tagsBasePath: 'news/tags',
          feedOptions: {
            copyright: ' CC BY-NC-SA 4.0 '
          },
          blogTitle: '新闻',
          blogSidebarTitle: '测试消息',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'deprecated',
          path: 'deprecated',
          routeBasePath: 'deprecated',
          sidebarPath: './sidebars.js',
          editCurrentVersion: true,
          showLastUpdateTime: true,
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'renwu',
          path: 'renwu',
          routeBasePath: 'renwu',
          sidebarPath: './sidebars.js',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
      ]
    ],
    themes: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          indexDocs: true,
          language: "zh",
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          docsRouteBasePath: '/',
        },
      ],
    ],
};

module.exports = config;
