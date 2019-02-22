// 头部操作页
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './top.less'

class Top extends Component {
    render () {
        return (
            <View className="top">
                <View className="left">
                    <Image className="img" src={require('../../assets/img/left.png')}></Image>
                </View>
                <View className="right">
                    <Image className="img" src={require('../../assets/img/sousuo.png')}></Image>
                    <Image className="img" src={require('../../assets/img/collect.png')}></Image>
                    <Image className="img" src={require('../../assets/img/people.png')}></Image>
                    <Image className="img" src={require('../../assets/img/more.png')}></Image>
                </View>
            </View>
        )
    }
}

export default Top;