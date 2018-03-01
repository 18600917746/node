//TODO:引入 url 模块
var url = require('url');
// parse(url,boolean) 解析 url  第一个参数是地址，第二个参数是true的话表示把get参数转化为对象
var url_parse = url.parse('http://www.baidu.com' , true);
console.log(url_parse);

var tools = require('./tools');
console.log(tools.add(1,21));