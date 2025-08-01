import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Platform-Based Programming',
  tagline: 'Odd Semester 2025/2026',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://pbp-fasilkom-ui.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ganjil-2026/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pbp-fasilkom-ui', // Usually your GitHub org/user name.
  projectName: 'ganjil-2026', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['en', 'id'],
    localeConfigs: {
      en: {
        htmlLang: 'en-AU'
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        pages: {
              path: 'src/pages',
              routeBasePath: '/',
              include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'PBP Ganjil 25/26',
      logo: {
        alt: 'Fasilkom UI Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/assignments/',
          label: 'Tugas',
          position: 'left'
        },
        {
          to: '/playground/',
          label: 'Playground',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Playground',
              to: '/playground/',
            },
            {
              href: 'https://github.com/pbp-fasilkom-ui/ganjil-2025/',
              label: 'GitHub',
            },
          ],
        },
      ],
      copyright: `Copyright © PBP Fasilkom UI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
        '@docusaurus/plugin-content-docs',
        {
          id: 'assignments',
          path: 'assignments',
          routeBasePath: 'assignments',
          sidebarPath: require.resolve('./sidebars.js')
        },
    ],
  ],
};

export default config;
