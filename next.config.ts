const isProd = process.env.NODE_ENV == 'production';

const url = isProd ? '/cookbam' : '';
module.exports = {
    assetPrefix: url,
}
