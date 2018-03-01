var fs = require('fs');

//TODO: fs.stat 检测路径是文件还是目录
// fs.stat('node_modules' , (err , status) => {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log('文件' + status.isFile());
//     console.log('目录' + status.isDirectory());
// });

//TODO:创建一个目录 fs.mkdir(path,mode,callback)  path=创建文件的路径名 ，mode=目录的权限 默认是 0777 回调，传递异常参数 err
// fs.mkdir('test',function (err) {
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('创建目录成功');
// });

//TODO:创建写入文件 fs.writeFile(path,data,option,callback)  path=需要写入的文件 data=需要写入的数据 option={encoding:utf-8 当数据是 buffer 时，该值应该是 ignored，mode:写读文件的权限 默认是 438, flag: 默认是 'w'}
// fs.writeFile('test.txt' , '第一次写入文件' , function (err) {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log('文件写入成功');
// });

//TODO:创建/追加写入文件 fs.appendFile(path,data,option,callback)  path=需要写入的文件 data=需要 追加 写入的数据 option={encoding:utf-8 当数据是 buffer 时，该值应该是 ignored，mode:写读文件的权限 默认是 438, flag: 默认是 'w'} callback=回调函数
// fs.appendFile('test.txt' , '第一次写入文件' , function (err) {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log('文件写入成功');
// });

//TODO:读取文件内容 fs.readFile(path,callback)  path=文件的路径  callback=回调函数(异常，读取的数据) 文件读取的都是 buffer 数据 需要 toString() 转化
// fs.readFile('test.txt' , function (err , data) {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log(data.toString());
// });

//TODO:读取文件夹内容 fs.readdir(path,callback)  path=文件的路径  callback=回调函数(异常，[文件名])
// fs.readdir('node_modules' , function (err , data) {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log(data);
// });

//TODO:1.文件重命名 2.剪切文件 + 挪移文件 fs.rename(old_path,new_path,callback) old_path=需要重命名的文件 new_path=新的文件名 callback=回调
// fs.rename('node_modules/test.txt' , 'test.txt' , function (err) {
//     if ( err ) {
//         console.log(err);
//         return false;
//     }
//     console.log('剪切 + 挪移 成功');
// });

//TODO: 删除目录 fs.rmdir(path,callback) path=需要删除的文件目录 callback=异常回调
fs.rmdir('node_nodules' , function (err) {
    if ( err ) {
        console.log(err);
        return false;
    }
    console.log('删除文件目录成功');
});
// TODO: 删除文件 fs.unlink(path,callback) path=需要删除的文件名 callback=异常回调
fs.unlink('test.txt' , function (err) {
    if ( err ) {
        console.log(err);
        return false;
    }
    console.log('删除文件成功');
});