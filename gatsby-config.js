module.exports = {
  siteMetadata: {
    header: "Welcome to the ULTIMATE Barbie's Store",
    title: "Barbie Store",
    description: "Barbie Store was founded when a student was bored to death. The creation of this website is to showcase how bored he actually is. ",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://barbie-store/graphql",
      },
    },
  ],
};
