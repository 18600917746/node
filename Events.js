var events = require('events');

var EventEmitter = new events.EventEmitter();

// on 只用来接收收据 需要使用 emit 事件触发
EventEmitter.on('one' , function (data) {
    console.log(data);
});

EventEmitter.emit('one' , '发送的数据');
