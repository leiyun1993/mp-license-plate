// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {

    },

    onLoad() {

    },
    change(event) {
        const val = event.detail;
        console.log(val.array) //数组形式
        console.log(val.value) //字符串形式
        console.log(val.pass) //是否验证通过

        this.setData({
            licensePlate:val.value
        })
    }
})