var tools ={
    add:function (a,b) {
        return a+b;
    }
};
var tools1 ={
    add:function (a,b) {
        return a-b;
    }
};
//1.使用 module.exports = tools;// 单项抛出 引入可以直接 tools.add
//2.使用 exports.tools= tools;            引用需要 tools.tools.add
//      exports.tools1= tools1;多项抛出   引用需要 tools.tools1.add
// exports.tools= tools;
// exports.tools1= tools1;