module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'https://www.wumeili.top',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'https://www.wumeili.top'
                }
            }
        }
    }
}