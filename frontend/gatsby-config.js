require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Interview Buddy`,
    description: `Practice for your next behavioural interview with Interview Buddy`,
    author: `@Buddy`,
    siteUrl: `https://interview-buddy.netlify.app/`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-WCX0EEQYEL", // Google Analytics / GA
        ],

        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: false,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: false,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Interview Buddy",
        short_name: "Interview Buddy",
        start_url: "/",
        background_color: "#f56565",
        theme_color: "#dcdee2",
        display: "standalone",
        icon: "src/assets/images/video-solid.svg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Interview Buddy",
        short_name: "Interview Buddy",
        start_url: "/",
        background_color: "#f56565",
        theme_color: "#dcdee2",
        display: "standalone",
        icon: "src/assets/images/video-solid.svg", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
