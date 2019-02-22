import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Top from './top'
import './head.less'
import Activity from './activity'

class Head extends Component {
    constructor () {
        // super() 作为函数调用。继承父函数以后必须要执行super()，super的this指向子函数
        super(...arguments);
        this.state = {
            store: {
                title: '麦当劳',
                notice: '欢迎光临，很高兴为您服务',
                tags: ['好吃', '好吃', '真好吃']
            }
        }
    }

    render () {
        // ES6解构赋值
        let {store} = this.state

        return (
            <View className="head">
                <Top></Top>

                {/* 头部商户信息 */}
                <Image className="back" src={require('../../assets/img/head_bg.jpg')}></Image>
                <View className="store">
                    <Image className="store-img" src={require('../../assets/img/head_icon.jpg')}></Image>
                    <View className="store-text">
                        <Text>{store.title}</Text>
                        <Text>{store.notice}</Text>
                        <View>
                            {store.tags.map((item, index) => <Text key="index" className="tags-text">{item}</Text>)}
                        </View>
                    </View>
                </View>

                <Activity></Activity>
            </View>
        )
    }
}

export default Head;