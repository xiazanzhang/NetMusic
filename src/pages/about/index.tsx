import { Component, Config } from '@tarojs/taro'
import { View, Text, OpenData } from '@tarojs/components'
import './index.less'

export class About extends Component {
    config: Config = {
        navigationBarTitleText: '关于'
    }

    render() {
        return (
            <View className="container">
                <View className="avatar">
                    <OpenData type='userAvatarUrl' />
                </View>
                <View className="tips">
                    <Text>随时随地，想听就听</Text>
                </View>
            </View>
        )
    }
}