//TODO:1.引入 http 模块 使用的 require 方式
var http = require('http');
var url = require('url');
//TODO:2.创建 server 服务
// req 获取 请求的信息 request
// res 返回 响应的处理结果 response
http.createServer(function (req , res) {
    //设置响应的请求头
    res.writeHead(200 , {
        "Content-Type": "text/html;charset=UTF-8"
    });

    if ( req.url != '/favicon.ico' ) {
        var result = url.parse(req.url , true);
        console.log(result.query.aid);
    }
    res.write('响应信息1');
    //设置响应的处理
    res.end();
}).listen('8888');