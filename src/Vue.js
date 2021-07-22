/*
 * @Date: 2021-07-14 12:03:10
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-20 19:43:13
 * @Description: 迷你的Vue
 */
import Compile from './Compile'
import observe from './Observer/observe'
import Watch from './Observer/Watch';
export default class Vue {
    constructor(options) {
        // 把参数哦options对象存为￥options
        this.$options = options || {}
        // data
        this._data = options.data || undefined
        // 数据变成响应式
        observe(this._data)
        // 为什么这里还需要响应式处理呢？是为了 new Vue 出来的实例直接操作data的时候, data也能响应式
        this._initData()
        // 数据监测
        this._initWatch()
        // 模板编译
        new Compile(options.el, this)
    }

    _initData() {
        for (const key in this._data) {
            if (Object.hasOwnProperty.call(this._data, key)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this._data[key]
                    },
                    set(newValue) {
                        this._data[key] = newValue
                    }
                })
            }
        }
    }

    _initWatch() {
        // 拿到vue实例的watch属性
        let watch = this.$options.watch
        for (const key in watch) {
            if (Object.hasOwnProperty.call(watch, key)) {
                const callback = watch[key];
                new Watch(this, key, callback)
            }
        }
    }
}