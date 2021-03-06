import Taro, { Component, Config } from '@tarojs/taro'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        requiredBackgroundModes: ["audio"],
        pages: [
            'pages/music/index',
            'pages/mv/index',
            'pages/about/index'
        ],
        window: {
            navigationStyle: "custom",
            backgroundColor: "#000"
        },
        tabBar: {
            color: "#fff",
            borderStyle: 'black',
            selectedColor: '#fff',
            backgroundColor: "#000",
            list: [{
                "selectedIconPath": "assets/icons/icon_01.png",
                "iconPath": "assets/icons/icon_01.png",
                "pagePath": "pages/music/index",
                "text": "音乐"
            },
            {
                "selectedIconPath": "assets/icons/icon_01.png",
                "iconPath": "assets/icons/icon_01.png",
                "pagePath": "pages/mv/index",
                "text": "视频"
            },
            {
                "selectedIconPath": "assets/icons/icon_02.png",
                "iconPath": "assets/icons/icon_02.png",
                "pagePath": "pages/about/index",
                "text": "关于"
            }]
        }
    }

    componentDidMount() { }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Index />
        )
    }
}

Taro.render(<App />, document.getElementById('app'))