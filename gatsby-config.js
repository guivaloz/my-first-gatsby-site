module.exports = {
  siteMetadata: {
    title: `Movimiento Libre`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ]
};
