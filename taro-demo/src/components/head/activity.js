// 头部活动页
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './activity.less'
import { cursorTo } from 'readline';

class Activity extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            activity: [
                {
                    type: "cut",
                    info: [
                        {total: 48, cut: 10},
                        {total: 58, cut: 20},
                        {total: 100, cut: 30}
                    ]
                }
            ]
        }
    }

    getTextByType (type) {
        switch (type) {
            case 'cut':
            return '减';
            default: 
            return '减'
        }
    }

    getLine (arr) {
        let a = arr.map((item, index) => {
            return `满${item.total}减${item.cut}`;
        });
        return a.join(';');
    }
    

    render () {
        // 相当于取this.state中的activity中的数组中的第一个元素，命名为firstItem
        let {activity: [firstItem]} = this.state;

        return (
            <View className="activity">
                <Text className="type">{this.getTextByType(firstItem.type)}</Text>
                <Text>{this.getLine(firstItem.info)}</Text>
                <Text className="length">{this.state.activity.length}个活动</Text>
            </View>
        )
    }
}

export default Activity;