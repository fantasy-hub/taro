import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './mainlist.less'
import Addcut from '../addcut/addcut'

class MainList extends Component {
    constructor () {
        super(...arguments);
        this.state = {

        }
    }

    render () {
        // selectCata当前的分类，currentList当前的数据列表
        let {selectCata, currentList} = this.props; 

        return (
            <View className="mainlist">
                <Text className="text">{selectCata ? selectCata.name : null}</Text>
                <View className="forlist">
                    {
                        currentList&&currentList.map((item, index) => {
                            return (
                            <View key={item.id} className="item">
                                <Image className="item-img" src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')}></Image>
                                <View className="item-info">
                                    <Text>{item.title}</Text>
                                    <Text>月售：{item.sole}</Text>
                                    <Text className="price">￥{item.price}</Text>

                                    <Addcut item={item}></Addcut>
                                </View>
                            </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

export default MainList;