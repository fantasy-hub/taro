// 下单侧边栏
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './cata.less'
import {getEvent} from '../../utils/common'

let event = getEvent();

class Cata extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            selectCata: null,  // 选中的分类
            cata: [
                {id: 1, name: '专场'},
                {id: 2, name: '热销'},
                {id: 3, name: '折扣'},
                {id: 4, name: '汉堡'},
                {id: 5, name: '炸鸡'},
                {id: 6, name: '饮品'}
            ]
        }
    }

    handlerClick (item) {
        // console.log(2)
        if (this.state.selectCata && this.state.selectCata.id != item.id) {
            this.setState({ selectCata: item }, () => {
                // 如果onChangeCata这个函数存在，将数据通过事件传给父组件
                this.props.onChangeCata && this.props.onChangeCata(this.state.selectCata);
            });

            event.emit('changeCata')
        } else if (!this.state.selectCata) {
            this.setState({ selectCata: item }, () => {
                this.props.onChangeCata && this.props.onChangeCata(this.state.selectCata);
            });

            event.emit('changeCata')
        }
        // console.log(1);
    }

    render () {
        let {cata, selectCata} = this.state;

        return (
            <View className="cata">
                {/* 
                    1. .map()循环<Text></Text>
                    2. 把每一项的id传给key -> key={item.id}
                    3. 绑定class -> 如果selectCata存在 同时 selectCata.id == item.id，就添加class="select"
                    4. 对每一项添加点击事件 -> 将每一项的item传给回调函数
                    5. 回调函数内部逻辑：如果selectCata存在 同时 selectCata.id != item.id，就将当前项的item 传给 selectCata； 如果selectCata不存在就直接赋值。
                */}
                {
                    cata.map((item, index) => {
                        return <Text onClick={this.handlerClick.bind(this, item)} className={"cata-name " + ((selectCata && selectCata.id == item.id) ? 'select' : null)} key={item.id}>{item.name}</Text>
                    })
                }
            </View>
        )
    }
}

export default Cata;