var path = require("path")

module.exports = { 
  outputDir : path.resolve(__dirname, "../backend/public/"),
  devServer: { 
    // // assetsRoot: path.resolve(__dirname, '../../backend/public'),   // 수정되는 부분이다.
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    proxy: { // proxyTable 설정 
      '/api': { 
        target: 'http://localhost:3000/api', 
        changeOrigin: true , 
        pathRewrite:{ 
          "^/api" : '' 
        } ,
        "secure": false
      }
    } 
  },
  
}
