/*
 * @Date: 2021-07-14 11:58:13
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-21 19:44:56
 * @Description: 主入口
 */
import Vue from './Vue'

window.Vue = Vue

const vm = new Vue({
    el: '#app',
    data: {
        a: 10,
        b: {
            m: {
                n: 7
            }
        }
    },
    watch: {
        a() {
            console.log('a改变了');
        }
    }
})

window.vm = vm
window.handleClick = function() {
    vm.b.m.n++
}