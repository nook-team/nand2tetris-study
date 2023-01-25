// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nand2Tetris study docs",
  tagline: "Nand2Tetris study documents.",
  url: "https://github.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "neu-ru",
  projectName: "nand2tetris-study",

  i18n: {
    defaultLocale: "kr",
    locales: ["kr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/neu-ru/nand2tetris-study/tree/main/",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Nand2Tetris Study",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/neu-ru/nand2tetris-study",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} neuru, Inc. Built with Docusaurus.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
