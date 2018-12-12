import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Header from '../../components/header'
import MusicList from '../../components/music-list'
import Api from '../../service/api'

export interface Props {
    title: string;
    list: object;
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
                    name: '',
                    al: {
                        id: -1,
                        picUrl: ''
                    }
                }
                ]
            }
        }
    }

    numbers: Array<Number> = [...Array(100).keys()];

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const api = new Api();

        api.top().then((result) => {
            this.setState({
                list: result
            })
        });
    }

    play(id: number) {
        console.log(id)
    }

    render() {
        const musicList = this.state.list.playlist.tracks.map((item) => {
            return <MusicList  key={Number(item.al.id)} id={item.al.id} name={item.name} picUrl={item.al.picUrl}></MusicList>
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

