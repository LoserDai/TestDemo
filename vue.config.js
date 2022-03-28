module.exports = {
    devServer: {
        proxy: {
            '/product_api': {
                // target: 'http://121.42.14.194:9011',
                //target: 'http://127.0.0.1:8091',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/product_api': ''
                },
                changeOrigin: true
            },
            '/content_api': {
                //target: 'http://127.0.0.1:8093',
                // target: 'http://121.42.14.194:9021',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/content_api': ''
                },
                changeOrigin: true
            },
            '/search_api': {
                //target: 'http://127.0.0.1:8096',
                // target: 'http://121.42.14.194:9021',
                target: 'http://127.0.0.1:7070',
                pathRewrite: {
                    '^/search_api': ''
                },
                changeOrigin: true
            },
            "/api":{
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        },
        disableHostCheck: true
    }
}