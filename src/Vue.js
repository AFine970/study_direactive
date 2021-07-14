/*
 * @Date: 2021-07-14 12:03:10
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-14 13:57:59
 * @Description: 迷你的Vue
 */
import Compile from "./Compile"

export default class Vue {
    constructor(options) {
        // 把参数哦options对象存为￥options
        this.$options = options || {}
        // data
        this._data = options.data || undefined
        // TODO 数据变成响应式
        // 模板编译
        new Compile(options.el, this)
    }
}