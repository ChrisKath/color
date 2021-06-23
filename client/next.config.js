const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: false
})

module.exports = {
  future: {
    webpack5: true
  },
  productionBrowserSourceMaps: false
}
