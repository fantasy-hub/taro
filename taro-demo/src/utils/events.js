// 定义一个事件池
class Event {
    constructor () {
        this.events = {};
    }

    // 监听
    on (eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }
    // 触发
    emit (eventName, params) {
        if (this.events[eventName]) {
            this.events[eventName].map((callback) => {
                callback(params);
            })
        }
    }
}

export default Event;