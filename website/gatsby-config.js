module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/~mmsp2018',
  siteMetadata: {
    title: 'MMSP 2018',
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
