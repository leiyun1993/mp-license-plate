# mp-license-plate

### 介绍
* mp-license-plate是一款基于微信小程序的车牌号输入控件。

### vue2版本
[vue-license-plate](https://github.com/leiyun1993/vue2-license-plate)

### vue3版本
[vue3-license-plate](https://github.com/leiyun1993/vue3-license-plate)

### 项目中使用
* 1、拷贝 /components/mp-license-plate 到你的项目中
* 2、全局或使用页面中引入组件

```
"usingComponents": {
    "mp-license-plate":"../../components/mp-license-plate/index"
}
```
* 3、在需要的页面中使用

```
<mp-license-plate 
    value="川A00001" 
    bindchange="change"
    autoShow="{{true}}"
    borderColor="red"
    borderActiveColor="blue"
    borderRadius="12"
    borderWidth="4"
    fontColor="black"
    fontSize="32"/>

change(event) {
    const val = event.detail;
    console.log(val.array) //数组形式
    console.log(val.value) //字符串形式
    console.log(val.pass) //是否验证通过
}
```
* 展示如下

![](https://github.com/leiyun1993/mp-license-plate/raw/main/screenshot/s1.jpeg)

## API

### Props
名字|类型|默认值|说明
--|--|--|--
value|String|""| 默认车牌号
autoShow|Boolean|false| 自动展示键盘
borderColor|String|#79aef3| 输入框边框颜色
borderActiveColor|String|#330aec| 输入框选中的边框颜色
borderWidth|Number|1| 边框宽度
borderRadius|Number|6| 边框圆角
fontColor|String|#333333| 文字颜色
fontSize|Number|16| 文字大小

### Events
名字|说明|回调参数
--|--|--
@change|输入改变时触发|event.detail = {array:[],value:string,pass:false}


## Change Log

* 1.0.0

首次发版


## License
[MIT](https://github.com/leiyun1993/mp-license-plate/blob/mian/LICENSE)
