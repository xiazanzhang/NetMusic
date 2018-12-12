import Service from "./service"

class Api {
    service: Service;

    constructor() {
        this.service = new Service("https://bird.ioliu.cn/v2?url=http://111.230.15.230:3000");
    }

    top(): any {
        return new Promise((resolve, reject) => {
            this.service.request({
                url: "/top/list?idx=1",
                success: (data) => {
                    return resolve(data)
                },
                fail: (res) => {
                    return reject(res)
                }
            })
        })
    }
}

export default Api