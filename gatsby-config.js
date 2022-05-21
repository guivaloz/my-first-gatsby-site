module.exports = {
  siteMetadata: {
    title: `Movimiento Libre`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};