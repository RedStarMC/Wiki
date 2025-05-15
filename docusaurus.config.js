// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '红星游戏社区 维基',
  tagline: 'RedStarMC社区的百科全书',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://redstarmc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'redstarmc', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/redstarmc/Wiki/blob/main'
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
      navbar: {
        title: '红星游戏社区',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '开始',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '近期更新',
            docsPluginId: 'release'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '管理人员必看',
            docsPluginId: 'admin'
          },
//          {
//            type: 'docSidebar',
//            sidebarId: 'tutorialSidebar',
//            position: 'left',
//            label: '日志',
//            docsPluginId: 'logs'
//          },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/redstarmc/Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '维基',
            items: [
              {
                label: '开始',
                to: '/intro',
              },
              {
                label: '关于',
                to: '/about',
              },
              {
                label: '已归档',
                to: '/deprecated/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/redstarmc/Wiki',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: '官网',
                href: 'https://www.redstarmc.top/'
              },
              {
                label: '外置登陆身份验证系统',
                href: 'https://login.redstarmc.top'
              },
              {
                label: 'QQ频道',
                href: 'https://pd.qq.com/s/1dxf9takj',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/redstarmc/Wiki',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} RedStarMC Community, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
    plugins: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
            indexDocs: true,
            language: "zh",
        },
      ],
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
        '@docusaurus/plugin-content-docs',
        {
          id: 'release',
          path: 'release',
          routeBasePath: 'release',
          sidebarPath: './sidebars.js',
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
      ]
      // [
      //   '@docusaurus/plugin-content-docs',
      //   {
      //     id: 'logs',
      //     path: 'logs',
      //     routeBasePath: 'logs',
      //     sidebarPath: './sidebars.js',
      //     editCurrentVersion: true,
      //     showLastUpdateAuthor: true,
      //     showLastUpdateTime: true,
      //   },
      // ],
    ],
    themes: [

    ],
};

module.exports = config;
