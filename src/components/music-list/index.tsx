import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';

export interface Props {
    id: number;
    picUrl: string;
    name: string;
    play: () => void;
}

class MusicList extends Component<Props> {
    play(id: number) {
        console.log(id)
    }

    render() {
        return (
            <View className="content">
                <View className="content-cell" onClick={this.play.bind(this, this.props.id)}>
                    <Image mode="aspectFill" src={this.props.picUrl}></Image>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export default MusicList