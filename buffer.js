// const fs = require('fs');

/*
* 1.流读取
* 2.流创建
* 3.管道读取
* */


// TODO:读取数据（分布读取数据）
// var readStream = fs.createReadStream('test.txt');
// var str='';
// //统计读取次数
// var count =0;
//
// //TODO:数据流方式读取文件是通过 事件广播 来执行的
//
// //读取数据
// readStream.on('data',function (chunk) {
//     str+=chunk;
//     count++;
// });
// //读取完毕
// readStream.on('end',function (chunk) {
//     console.log(str);
//     console.log(count);
// });
// //读取失败
// readStream.on('error',function (err) {
//     console.log(err);
// });

// TODO:覆盖写入数据

// //创建写入数据
// var data ='数据流的方式写入数据\n';
// var writerStrem = fs.createWriteStream('test.txt');
//
// //通过循环
// for (let i=0;i<20;i++){
//     writerStrem.write(data,'UTF8');
// }
//
// writerStrem.end();
// writerStrem.on('finish',function () {
//     console.log('写入完成');
// });
// writerStrem.on('error',function (err) {
//     console.log(err.stack);
// });
// console.log('程序执行完毕');

//TODO:通过管道的方式实现 文件内容的赋值

// //创建一个可读流
// var readerStrem = fs.createReadStream('test.txt');
// //创建一个可写流
// var writerStrem = fs.createWriteStream('output.txt');
//
// readerStrem.pipe(writerStrem);
// console.log('程序执行完毕');

// //TODO:使用回调来 解决异步问题
// var fs = require('fs');
//
// function getName(callback) {
//     fs.readFile('test.txt' , function (err , data) {
//         if ( err ) {
//             console.log(err);
//         } else {
//             callback(data);
//         }
//     });
// };
//
// getName(function (data) {
//     console.log(data.toString());
// });

// //TODO:使用 events EventEmitter.on 广播事件 EventEmitter.emit 触发事件
// var events = require('events');
//
// var EventEmitter = new events.EventEmitter();
//
// // on 只用来接收收据 需要使用 emit 事件触发
// EventEmitter.on('one' , function (data) {
//     console.log(data);
// });
//
// EventEmitter.emit('one' , '发送的数据');