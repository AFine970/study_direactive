/*
 * @Date: 2021-07-14 12:04:04
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-14 14:19:31
 * @Description: 模板编译
 */
export default class Compile {
    constructor(el, vue) {
        // vue实例
        this.$vue = vue
        // 挂载点
        this.$el = document.querySelector(el)
        if (this.$el) {
            this.node2Fragment(this.$el)
        }
        this.compile()
    }

    // DOM节点转换为fragment
    node2Fragment(el) {
        let fragment = document.createDocumentFragment()
        // 让所有的DOM节点都进fragment
        let child = el.firstChild
        while(child) {
            // console.log('child', child)
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    }

    node2Element() {
        
    }

    node2Text() {

    }

    compile() {

    }
}