const path = require('path');

module.exports = {
    entry:"./index.js",// 指定打包的入口
    output:{//指定打包后的入口
        //公共路径设置
        // publicPath:"http://cdn.baidu.com",
        path:path.resolve(__dirname,"./build"),
        filename:"index.js"
    }
    
}