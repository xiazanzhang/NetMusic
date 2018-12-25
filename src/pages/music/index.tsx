import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Header from '../../components/header'
import MusicList from '../../components/music-list'
import Api from '../../service/api'

export interface Props {
    title: string;
    list: PlayList;
}

export interface PlayList {
    tracks: Tracks
}

export interface Tracks {
    name: string,
    id: number,
    al: Al
}

export interface Al {
    picUrl: string
}

export default class Index extends Component<Props> {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '精品歌单'
    }

    state = {
        title: "精品歌单",
        list: {
            playlist: {
                tracks: [{
                    name: "",
                    id: 0,
                    al: {
                        picUrl: ""
                    }
                }]
            }
        }
    }

    api = new Api();

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.api.top().then((res) => {
            this.setState({
                list: res
            })
        });
    }

    render() {
        let tracks = this.state.list.playlist.tracks

        const musicList = tracks.map((item) => {
            return <MusicList key={Number(item.id)} musicId={item.id} name={item.name} picUrl={item.al.picUrl}></MusicList>
        })

        return (
            <View>
                <View>
                    <Header></Header>
                    <Text className='title'>{this.props.title}</Text>
                </View>
                <View>
                    {musicList}
                </View>
            </View>
        )
    }
}

