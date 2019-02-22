/**
 * tag标签页
 * changeCata(), getData() 主要用于模拟数据
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import MainList from './mainlist.js'
import './main.less'

class Main extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            current: 0,
            tabList: [{ title: '下单' },{ title: '评价' }, { title: '商家'}],
            menuList: [],  // 维护整体数据（当找到就不用去加载） —— 所有的数据
            currentList: [],  // 渲染页面数据 （找不到就去加载，找到后放到menuList进行缓存）—— 当前选中下的数据
            selectCata: null  // 切换分类时传递分类名称
        };

    }

    changeTab (value) {
        this.setState({
            current: value
        })
    }

    // 切换分类
    changeCata (selectCata) {
        this.setState({selectCata: selectCata});

        // 逻辑分析详见：https://www.imooc.com/video/18414
        // 如果在menuList中查找到数据项item的pid 等于 分类项selectCata的id的数据。就不去加载数据
        if (this.state.menuList.some(item => item.pid == selectCata.id)) {
            this.setState({currentList: this.state.menuList.filter(item => item.pid == selectCata.id)});
        } else {
            this.setState(
                { menuList: this.state.menuList.concat(this.getData(selectCata)) },
                () => {
                    this.setState({currentList: this.state.menuList.filter(item => item.pid == selectCata.id)});
                    // console.log(1, this.state.currentList);
                }
            )
        }
    }

    getData (selectCata) {
        let count = Math.round(Math.random()*2);
        return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
            img: count,
            pid: selectCata.id,
            id: selectCata.id + '_' + k,
            title: '分类' + selectCata.id + ' ' + '单品' + (k + 1),
            sole: Math.round(Math.random() * 50),
            price: Math.round(Math.random() * 20)
        }))
    }

    render () {
        let {current, tabList, currentList, selectCata} = this.state;

        return (
            <View className="main">
                {/* <AtTabs current={this.state.current}
                    onClick={this.changeTab.bind(this)}
                    tabList={[{ title: '下单' },{ title: '评价' }, { title: '商家'}]}> */}
                <AtTabs current={current}
                    onClick={this.changeTab.bind(this)}
                    tabList={tabList}>
                    {/* 下单 */}
                    <AtTabsPane>
                        <View className="main-body">
                            <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
                            <MainList style="width: 100%" currentList={currentList} selectCata={selectCata}></MainList>
                        </View>
                    </AtTabsPane>
                    {/* 评价 */}
                    <AtTabsPane>
                        2
                    </AtTabsPane>
                    {/* 商家 */}
                    <AtTabsPane>
                        3
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default Main;