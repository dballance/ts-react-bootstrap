const pluginsForProd = [require('cssnano')()]

module.exports = ctx => ({
  plugins: [require('postcss-import')(), require('postcss-cssnext')()].concat(
    ctx.env === 'production' ? pluginsForProd : []
  )
})
