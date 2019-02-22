import Taro from '@tarojs/taro'
import Event from './events'

// 实例化一个时间管理器
let myEvent = new Event();

// 获取数量（载入页面时取得）: 统计传入的信息 统计总和
// 缓存数据要使用taro的方法：要兼容h5和小程序
// {item.id: {}, item.id: {}}
const itemkey = 'zaozuo'
export function getNum (item) {
    let store = Taro.getStorageSync(itemkey);
    if (store && store[item.id]) {
        // 查找：要定义缓存的数据结构
        // 如果对象的item.id属性存在，就return出item.id.num
        return store[item.id].num;
    } else {
        return 0;
    }
}

// 设置数量（当增加 减少时触发）： num是由加减组件自身的state存储的。
// 初始total值有getNum()函数获取
// 当减的数量等于0时，要删除item的数据结构。
export function setNum (item, num, type, callback) {
    if (item) {
        let store = Taro.getStorageSync(itemkey);
        if (!store) {store = {}};

        if (type == 'cut') {
            if (num == 1) {
                // 删除单品数据结构
                if (store[item.id]) {
                    delete store[item.id];
                }
            } else {
                if (store[item.id]) {
                    store[item.id].num = num -1;
                }
            }
            // 进行缓存数据更新
            Taro.setStorageSync(itemkey, store);
            
            callback && callback();
        }
        if (type == 'add') {
            if (store[item.id]) {
                store[item.id].num = num + 1;
            } else {
                // 没有加过，对item进行结构 添加一个num: 1 属性
                store[item.id] = {num: 1, ...item};
            }

            Taro.setStorageSync(itemkey, store);
            
            callback && callback();
        }
    }
}

export function getEvent () {
    return myEvent;
}

// 获取所有商品的数量及价格
export function getAllItemInfo () {
    let allPrice = 0, // 总价格
        allNum = 0;  // 总数量

    // 取商品信息
    let store = Taro.getStorageSync(itemkey);
    console.log(store);
    if (store) {
        // 对store对象进行遍历
        console.log(Object.keys(store))
        Object.keys(store).map((key, index) => {
            if (store[key]) {
                allPrice += store[key].price * store[key].num;
                allNum += store[key].num;
            }
        });
    }

    return { allPrice, allNum }
}