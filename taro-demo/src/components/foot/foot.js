import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './foot.less'
import {getAllItemInfo, getEvent} from '../../utils/common'

let events = getEvent();
console.log("b", events);
class Foot extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            num: 0,  // 商品合计
            allPrice: null,  // 价格合计
            sendPrice: 0,  // 配送费
            supportTake: false,  // 支持自提
            sendMustPrice: 20,  // 起送费
            sendItem: 'new'
        };
    }

    componentDidMount () {
        // 初始化页面时，购物车获取所有选中的商品
        let { allPrice, allNum } = getAllItemInfo();
        this.setState({ num: allNum, allPrice: allPrice });

        console.log(0);
        // 监听加减商品事件
        events.on('addcut', () => {
            // 商品变化时重新计算
            console.log(1);
            let { allPrice, allNum } = getAllItemInfo();
            this.setState({ num: allNum, allPrice: allPrice });
        })
    }

    render () {
        let {num, sendPrice, supportTake, sendMustPrice, sendItem, allPrice} = this.state;

        return (
            <View className="foot">
                <View className="foot-body">
                    {num ? <Text className="num">{num}</Text> : null}
                    <Image className="store-img" src={require('../../assets/img/car1.png')}></Image>
                    <View className="info">
                        {sendPrice ? <Text>另需配送费￥{sendPrice}|</Text> : null}
                        {allPrice > 0 ? <Text>{allPrice}</Text> : <Text>另需配送费￥{sendPrice}|</Text>}
                        {supportTake ? <Text>支持自取</Text> : <Text>不支持自取</Text>}
                    </View>
                    <View className="submit">
                        <Text>{sendMustPrice ? `￥${sendMustPrice}起送` : null}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Foot;