import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';

class MusicList extends Component {

    render() {
        return (
            <View className="content">
                <View className="content-cell">
                    <Image mode="aspectFill" src="http://p1.music.126.net/Kn40TnCtp2f3uqEVdOFc-w==/109951163710835311.jpg"></Image>
                    <Text>忆乱世英雄 | 挥旗扬鞭 金戈铁马遍天下</Text>
                </View>
            </View>
        )
    }
}

export default MusicList