import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Child from './child'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  // 更改视图：数据写法1
  state = {
    name: 'Lida'
  }

  componentWillMount () { }

  componentDidMount () { 
    // 更改视图：数据写法2
    // this.setState({name: 'Lida'})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click () {
    this.setState({name: 'Nazi'}, ()=>{
      console.log(this.state.name);
    });
  }
  change () {
    this.setState({name: '改变name值，起个中文名'})
  }
 
  render () {
    return (
      <View className='index'>
        {/* 相当于把this.change，通过函数change()，传给change属性
            bind(this) 当子组件调用父组件时，change()函数内部的this指向父组件
        */}
        {/* <Child name="Child-Grey"></Child> */}
        <Child name={this.state.name} onchange={this.change.bind(this)}></Child>

        <Text>{this.state.name}</Text>
        <Button onClick={this.click}>Change_name</Button>
      </View>
    )
  }
}