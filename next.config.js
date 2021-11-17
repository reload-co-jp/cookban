const isProd = process.env.NODE_ENV == 'production';

const url = isProd ? '/cookban' : '';
module.exports = {
    assetPrefix: url,
}
