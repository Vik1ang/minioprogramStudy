import config from "./config";

export default (url, data, method = 'GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            data: data,
            method,
            success: (res) => {
                // console.log('success', res)
                resolve(res.data)
            },
            fail: (err) => {
                // console.log('fail', res)
                reject(err)
            }
        })
    })
}