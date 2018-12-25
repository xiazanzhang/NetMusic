import Taro, { Component } from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import { Config } from "@tarojs/taro";
import './index.less'

export default class Mv extends Component {
    config: Config = {
        navigationBarTitleText: '关于'
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>123123</Text>
            </View>
        )
    }
}