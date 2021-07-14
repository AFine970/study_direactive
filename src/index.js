/*
 * @Date: 2021-07-14 11:58:13
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-14 12:22:21
 * @Description: 主入口
 */
import Vue from './Vue'

window.Vue = Vue

const vm = new Vue({
    el: '#app',
    data: {
        a: 1
    }
})