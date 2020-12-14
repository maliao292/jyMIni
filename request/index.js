let defaultUrl = 'http://192.168.1.144'
let requestNum = 0
const request = (params) => {
    requestNum++
    uni.showLoading({
        title: '加载中',
    })
    return new Promise((resolve, reject) => {
        uni.request({
            ...params,
			header:{"Content-Type": "application/json"},
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            },
            complete() {
                requestNum--

                if (requestNum <= 0) {
                    uni.hideLoading()
                }
            }
        })
    })
}

// 验证码 
export const setcode = params => request({
    url: defaultUrl + '/sendsms',
    data: {params},
    method: 'POST'
})
export const homeSwiper = () => request({
    url: defaultUrl + '/home/swiperdata'
})


// 登录 
export const wxlogin = params => request({
    url: defaultUrl + '/users/wxlogin',
    data: {params},
    method: 'POST'
})