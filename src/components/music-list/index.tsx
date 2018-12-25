import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import './index.less'

export interface Props {
    musicId: number;
    picUrl: string;
    name: string;
}

export default class MusicList extends Component<Props> {
    play(id: number, picUrl: string, name: string) {
        Taro.playBackgroundAudio({
            dataUrl: "https://music.163.com/song/media/outer/url?id=" + id + ".mp3",
            title: name,
            coverImgUrl: picUrl
        })
    }

    render() {
        return (
            <View className="content">
                <View className="content-cell" onClick={this.play.bind(this, this.props.musicId, this.props.picUrl, this.props.name)}>
                    <Image mode="aspectFill" src={this.props.picUrl}></Image>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}