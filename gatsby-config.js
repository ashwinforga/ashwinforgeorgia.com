module.exports = {
  siteMetadata: {
    siteUrl: 'https://ashwinforgeorgia.com',
    author: 'Ashwin Ramaswami',
    title: `Ashwin Ramaswami for State Senate`,
    description: `Ashwin Ramaswami for State Senate`,
    navigation: [
      // {
      //   title: '',
      //   items: [{ text: 'Home', link: '/' }],
      // },
      // {
      //   items: [{ text: 'Blog', link: '/blog' }],
      // },
      {
        title: '',
        items: [{ text: 'About', link: '/about' }],
      },
      {
        items: [
          { text: 'Issues', link: '/issues' },
        ],
      },
      {
        items: [
          { text: 'Media', link: '/media' },
        ],
      },
      {
        items: [
          { text: 'FAQ', link: '/faq' },
        ],
      },
      // {
      //   items: [
      //     { text: 'Why not Shawn Still?', link: '/shawn-still' },
      //   ],
      // },
      // TODO: re-add Volunteer
      // {
      //   items: [
      //     { text: 'Volunteer', link: '/volunteer' },
      //   ],
      // },
      // {
      //   items: [
      //     { text: 'Donate', link: 'https://secure.actblue.com/' },
      //   ],
      // },
      // {
      //   title: 'Document submenu',
      //   items: [
      //     { text: 'Navigation link', link: '/' },
      //     { text: 'Navigation link', link: '/' },
      //     { text: 'Navigation link', link: '/' },
      //   ],
      // },
    ],
    secondaryLinks: [
      { text: 'Secondary link', link: '/' },
      { text: 'Another secondary link', link: '/' },
    ],

    /**
     * Search.gov configuration
     *
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      // Only change this if you're using a CNAME. Learn more here: https://search.gov/manual/cname.html
      endpoint: 'https://search.usa.gov',

      // Replace this with your search.gov site handle.
      affiliate: 'affiliate-agency-account',

      // Replace this with your access key.
      access_key: 'affiliate-agency-account-access-key',
    },

    /**
     * Digital Analytics Program (DAP) configuration
     *
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
      // agency: 'your-agency',
      // Optional
      // subagency: 'your-subagency',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-256x256.png`
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', allow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
