module.exports = {
  siteMetadata: {
    title: `Diverge Weekly`,
    subtitle: `A weekly newsletter on design in a global context`,
    author: `Andrew Lovett-Barron`,
    description: `A weekly newsletter on design in a global context`,
    siteUrl: `https://divergeweekly.com/`,
    social: {
      twitter: `divergeweekly`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          `gatsby-remark-reading-time`,
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                designer: {
                  classes: "designer",
                  title: "required",
                },
                security: {
                  classes: "security",
                  title: "optional",
                },
                region: {
                  classes: "region",
                  title: "required",
                },
                tweet: {
                  classes: "tweet",
                  title: "required",
                },
                jobad: {
                  classes: "jobad",
                  title: "required",
                },
                featurejob: {
                  classes: "featurejob",
                  title: "optional",
                },
                classified: {
                  classes: "ad",
                  title: "optional",
                },
                quote: {
                  classes: "quote",
                  title: "optional",
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-145942876-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diverge Weekly`,
        short_name: `divergeweekly`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
