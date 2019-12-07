require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Vintage Cameras`,
    description: `Example site built with Gatsby JS and Tailwind CSS.`,
    author: ``
  },
  plugins: [

    `gatsby-plugin-sharp`,

    `gatsby-transformer-sharp`,

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vintage Cameras`,
        short_name: `Vintage Cameras`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/images/bh-logo.gif`, // This path is relative to the root of the site.
      }
    },

    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },

    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },

    {
      resolve: `gatsby-source-directus7`,
      options: {
        /**
         * The base URL of Directus.
         */
        url: `https://directus2.bob-humphrey.com`,
        /**
         * Directus project to connect to, if empty defaults to '_' (Directus's default project name).
         */
        project: `_`,
        /**
         * If your Directus installation needs authorization to access the required api,
         * you'll also need to supply the credentials here. In addition to your own
         * Collections, the Directus System Collections 'Collections', 'Files'
         * and 'Relations' should be readable either to the Public group
         * or the user account you provide.
         */
        email: `${process.env.DIRECTUS_EMAIL}`,
        password: `${process.env.DIRECTUS_PASSWORD}`,
        /**
         * Optional - set the status of the items you want to receive. E.g. if you functionality
         * want to receive items with status 'published'.
         * `targetStatus` sets the status you want the items to have. `defaultStatus`
         * defines a fallback status that will also be accepted (e.g. you want
         * items with status 'draft', but 'published' is also acceptable)
         *
         */
        targetStatus: `published`,
        defaultStatus: `published`
      },
    }

  ]
};
