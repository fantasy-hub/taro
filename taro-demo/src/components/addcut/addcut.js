import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './addcut.less'
import {getNum, setNum, getEvent} from '../../utils/common'

const myEvent = getEvent(); 
console.log(myEvent);
class Addcut extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            num: 0  // 初始数值：用于操作加减操作
        }
    }

    // 初始化时，取得商品数量
    componentDidMount () {
        // console.log(this.props.item);
        this.setState({num: getNum(this.props.item)});

        myEvent.on('changeCata', () => {
            // 监听到分类改变，进项单品数量刷新 
            this.setState({num: getNum(this.props.item)});            
        });
    }

    handlerCut () {
        if (this.props.item) {
            if (this.state.num > 0) {
                setNum(this.props.item, this.state.num, 'cut', () => {
                    this.setState({num: getNum(this.props.item)})
                    myEvent.emit('addcut');
                });
            } else {
                return;
            }
        }
    }

    handlerAdd () {
        if (this.props.item) {
            setNum(this.props.item, this.state.num, 'add', () => {
                this.setState({num: getNum(this.props.item)})
                myEvent.emit('addcut');
                console.log("a");
            });
        }
    }

    render () {
        let hideClass = this.state.num > 0 ? '' : 'hide';

        return (
            <View className="addcut">
                <Image onClick={this.handlerCut.bind(this)} className={'operate cut ' + hideClass} src={require('../../assets/img/cut.png')}></Image>
                <Text className={"total " + hideClass}>{this.state.num}</Text>
                <Image onClick={this.handlerAdd.bind(this)} className="operate add" src={require('../../assets/img/add.png')}></Image>
            </View>
        )
    }
}

export default Addcut;