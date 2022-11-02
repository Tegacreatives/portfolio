module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `wpd20iw5`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-image`,
  ],
}
