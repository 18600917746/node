var fs = require('fs');
//TODO: 1.判断是否存在 upload 文件夹，没有就创建 （用于图片上穿到指定文件夹）
//
// fs.stat('upload' , function (err , stats) {
//     if ( err ) {
//         fs.mkdir('upload' , function (error) {
//             if ( error ) {
//                 console.log(error);
//                 return false;
//             }
//             console.log('创建文件夹成功');
//
//         });
//     }else{
//         console.log(stats.isDirectory());
//     }
//
// });

//TODO: 2.读取 node_modules 内的全部文件 判断是文件还是目录 并打印出所有的目录
var FilesArr = [];
fs.readdir('node_modules' , function (err , files) {
    if ( err ) {
        console.log(err);
    } else {
        (function getFile(i) {
            if ( i == files.length ) {
                console.log(FilesArr);
                return false;
            }
            fs.stat('node_modules/' + files[i] , function (error , stats) {
                if ( error ) {
                    console.log(error);
                    return false;
                } else {
                    if ( stats.isDirectory() ) {
                        FilesArr.push(files[i]);
                    }
                    //递归调用
                    getFile(i + 1);
                }
            });
        })(0);
        console.log('是否为异步')
    }
});