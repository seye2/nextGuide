const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    // You may only need to add assetPrefix in the production.
    apiUrl:isProd ? 'https://cdn.mydomain.com' : 'http://localhost:3000',
    pageTitle:"비트나루(BITNARU) | 글로벌 암호화폐 거래소",
    assetPrefix:"https://bitnaru.com"
}
//    assetPrefix: isProd ? 'https://cdn.mydomain.com' : 'http://localhost:3000'
