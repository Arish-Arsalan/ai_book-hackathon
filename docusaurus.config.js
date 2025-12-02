// @ts-check

const config = {
  title: 'My AI Book',            // REQUIRED
  url: 'http://localhost',        // REQUIRED
  baseUrl: '/',                   // REQUIRED

  favicon: 'img/favicon.ico',

  organizationName: 'Arish-Arsalan',
  projectName: 'my-ai-book',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My AI Book',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
  },
};

module.exports = config;
