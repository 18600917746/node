//TODO:模块的导出是使用 1.exports  2. module.exports
//TODO:模块的导入是使用 1.require

//TODO:同级模块的自定义导入需要 添加 ./ 指明相对路径

//TODO:模块导入时，如果同级目录没有找到，node会默认查找 node_modules 内的模块
// var str = require('bar');
// console.log(str)

//TODO:如果模块存放在 node_modules 里面的子文件夹下
//1.使用相对路径
// var str = require('nav/nav');
// console.log(str)
//2.在你需要引入的子文件夹下 使用 npm init --yes 生成 package.json,将入口文件 main：‘写入你想引入的文件’
// var str = require('nav');
// console.log(str)
// npm 安装的第三方模块的使用
// var sd= require('silly-datetime');
// var str = sd.format(new Date(),'YYYY-MM-DD')
// console.log(str)