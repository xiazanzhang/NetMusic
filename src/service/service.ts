import Taro from '@tarojs/taro'

class Service {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    request(obj): any {
        Taro.request({
            url: this.baseUrl + obj.url,
            data: obj.data,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return obj.success(res.data)
        })
    }
}

export default Service 