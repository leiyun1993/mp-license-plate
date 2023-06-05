// components/mp-license-plate/index.js

const LICENSE_PLATE_RULE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳使领]$/;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        //车牌
        value: {
            type: String,
            value: ""
        },
        //自动展示键盘
        autoShow: {
            type: Boolean,
            value: false
        },
        // 输入框边框颜色
        borderColor: {
            type: String,
            value: '#79aef3'
        },
        // 输入框选中边框颜色
        borderActiveColor: {
            type: String,
            value: '#330aec'
        },
        // 边框圆角
        borderRadius: {
            type: Number,
            value: 12
        },
        // 边框宽度
        borderWidth: {
            type: Number,
            value: 1
        },
        // 文字颜色
        fontColor: {
            type: String,
            value: '#333333'
        },
        // 文字大小
        fontSize: {
            type: Number,
            value: 30
        },
        //是否使用slot
        useSlot: {
            type: Boolean,
            value: false
        },
    },

    observers: {
        value(val) {
            if (val && LICENSE_PLATE_RULE.test(val)) {
                this.setData({
                    inputValue: val.split("")
                })
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        licensePlateLength: 8,
        provinceList: ["京", "津", "渝", "沪", "冀", "晋", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "琼", "川", "贵", "云", "陕", "甘", "青", "蒙", "桂", "宁", "新", "藏", "临"],
        numberList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '警'],
        letterList: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '港', '澳', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '挂', '学', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '领'],
        activeIndex: -1,
        inputValue: ["", "", "", "", "", "", "", ""],
        visible: false,
    },

    lifetimes: {
        ready() {
            if (this.properties.autoShow) {
                this.setData({
                    activeIndex: 0,
                    visible: 1
                })
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        visibleTap() {
            this.setData({
                visible: false
            })
        },
        slotTap(){
            let length = this.data.inputValue.filter(it => it).length;
            if (!this.data.visible) {
                this.setData({
                    activeIndex: length == 0 ? 0 : length - 1,
                    visible: true
                })
            }else{
                this.setData({
                    activeIndex: length == 0 ? 0 : length - 1,
                })
            }
        },
        inputTap(event) {
            const index = event.currentTarget.dataset.index;
            this.setData({
                activeIndex: index,
                visible: true
            })
        },
        btnTap(event) {
            const val = event.currentTarget.dataset.item;
            const disabled = event.currentTarget.dataset.disabled;
            if (disabled) {
                return false;
            }
            let {
                inputValue,
                activeIndex
            } = this.data;
            inputValue[activeIndex] = `${val}`;
            activeIndex++;
            this.setData({
                inputValue,
                activeIndex,
                visible: activeIndex <= 7
            })
            this.change();
        },
        delTap(event) {
            let {
                inputValue,
                activeIndex
            } = this.data;
            if (inputValue[activeIndex]) {
                inputValue[activeIndex] = "";
            } else {
                inputValue[activeIndex - 1] = "";
                activeIndex--;
            }
            this.setData({
                inputValue,
                activeIndex
            })
            this.change();
        },
        change() {
            let {
                inputValue,
            } = this.data;
            let value = inputValue.join("");
            let pass = LICENSE_PLATE_RULE.test(value);
            this.triggerEvent('change', {
                array: inputValue.filter(it => it !== ""),
                value: value,
                pass: pass,
            });
        }
    }
})