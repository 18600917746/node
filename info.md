# 1.解决每次修改代码都要重新启动服务器的问题
        npm -g install supervisor
# 2.自定义模块引入时路径应加上 ./ .js后缀可以省略
        例如：var tools = require('./tools');