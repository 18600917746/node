//TODO:1.引入 http 模块 使用的 require 方式
const http = require('http');
const url = require('url');
const open = require("open");
const ejs = require('ejs');
const MongoClient = require('mongodb').MongoClient;
const MongoClient_url = 'mongodb://localhost:27017';
//TODO:2.创建 server 服务
// req 获取 请求的信息 request
// res 返回 响应的处理结果 response
const server = http.createServer(function (req , res) {
    //设置响应的请求头
    res.writeHead(200 , {
        "Content-Type": "text/html;charset=UTF-8"
    });

    if ( req.url != '/favicon.ico' ) {
        var req_data = url.parse(req.url , true).query;
        MongoClient.connect(MongoClient_url , function (err , client) {
            if ( err ) {
                console.log('数据库连接失败');
                return;
            }
            // 使用 node 的执行，进行数据的添加
            client.db('itying').collection('admin').insertMany([{
                'name': 'chengpanapn' ,
                "age": 24 ,
                "sex": "男" ,
                'info': '这是第一次连接数据库'
            } , {
                'name': 'chengpan' ,
                "age": 22 ,
                "sex": "女" ,
                'info': '这是第二次连接数据库'
            }] , function (error , data) {
                if ( error ) {
                    console.log('数据增加失败');
                    return;
                }
                console.log('数据添加成功');
                client.close();
            });
        });
        console.log(req.url);
    }


}).listen('8888' , function () {
    console.log('即将打开http://localhost:' + server.address().port);
    var url_ = 'http://localhost:' + server.address().port;
    open(url_);

});