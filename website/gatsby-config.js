module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/~mmsp2018',
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options:{
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
