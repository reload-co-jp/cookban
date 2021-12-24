const isProd = process.env.NODE_ENV == 'production'

const url = isProd ? '/cookban' : undefined
module.exports = {
    assetPrefix: url,
}
