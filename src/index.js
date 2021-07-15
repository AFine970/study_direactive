/*
 * @Date: 2021-07-14 11:58:13
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-14 21:19:28
 * @Description: 主入口
 */
import Vue from './Vue'

window.Vue = Vue

const vm = new Vue({
    el: '#app',
    data: {
        a: 1
    },
    watch: {
        a() {
            console.log('a改变了');
        }
    }
})

console.log(vm);
vm.a++