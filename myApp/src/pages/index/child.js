import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
// import './index.less'

// 定义class，继承Component
class Child extends Component {
    clickHandler () {
        this.props.onchange();
    }

    // render函数是必须实现的
    render () {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <Button onClick={this.clickHandler}>调用上层事件</Button>
            </View>
        )
    }
}

// 给子组件一个默认值
Child.defaultProps = {
    name: ''
}
export default Child;