import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Head from '../../components/head/head'
import Main from '../../components/main/main'
import Foot from '../../components/foot/foot'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head></Head>
        <Main></Main>
        <Foot></Foot>
      </View>
    )
  }
}

