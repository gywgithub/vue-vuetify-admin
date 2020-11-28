module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/vue-vuetify-admin/' : '/',
  outputDir: 'docs',
  // configureWebpack: {
  //   devtool: 'source-map'
  // },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
