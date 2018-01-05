const pluginsForProd = [require('cssnano')()]

module.exports = ctx => ({
  plugins: [require('autoprefixer')].concat(
    ctx.env === 'production' ? pluginsForProd : []
  )
})
