/*
 * @Date: 2021-07-14 12:04:04
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-07-22 10:02:50
 * @Description: 模板编译
 */
import Watch from './Observer/Watch';
export default class Compile {
    constructor(el, vue) {
        // vue实例
        this.$vue = vue
        // 挂载点
        this.$el = document.querySelector(el)
        if (this.$el) {
            // 调用函数，让节点变成fragment，轻量化的虚拟节点
            let $fragment = this.node2Fragment(this.$el)
            // 编译
            this.compile($fragment)
            // 替换好的内容需要上树
            this.$el.appendChild($fragment)
        }
    }

    // DOM节点转换为fragment
    node2Fragment(el) {
        let fragment = document.createDocumentFragment()
        // 让所有的DOM节点都进fragment
        let child = el.firstChild
        while (child) {
            // console.log('child', child)
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    }

    compile(el) {
        // 得到子元素
        const childNodes = el.childNodes

        

        childNodes.forEach(node => {
            const text = node.textContent
            if (node.nodeType === 1) {
                this.compileElement(node)
            } else if (node.nodeType === 3) {
                // const name = regx.exec(text)[1]
                this.compileText(node, text)
                // console.log(node, text)
            }
        })
    }

    compileElement(node) {
        // 方便之处在于这里不是字符串，而是属性列表
        let nodeAttrs = node.attributes

        Array.from(nodeAttrs).forEach(attr => {
            // 分析指令
            const attrName = attr.name
            const value = attr.value
            
            if (attrName.indexOf('v-') === 0) {
                // console.log('找到指令了')
                switch (attrName) {
                    case 'v-model':
                        new Watch(this.$vue, value, value => {
                            node.value = value
                        })

                        let v = this.getVueVal(this.$vue, value)
                        node.value = v

                        node.addEventListener('input', e => {
                            const newVal = e.target.value
                            
                            this.setVueVal(this.$vue, value, newVal)
                            v = newVal
                        })
                        break
                    case 'v-if':
                        // TODO
                        break
                    case 'v-for':
                        // TODO
                        break
                }
            }
        })

        // 判断当前节点是否有子节点？有，则进行递归该节点
        if (node.childNodes) {
            this.compile(node)
        }
    }

    compileText(node, text) {
        const nameRegx = /\{\{(.*)\}\}/
        const expRegx = /(\{\{.*\}\})/
        if (nameRegx.test(text)) {
            const name = nameRegx.exec(text)[1]
            const exp = expRegx.exec(text)[1]
            node.textContent = text.replace(exp, this.getVueVal(this.$vue, name))
            new Watch(this.$vue, name, value => {
                node.textContent = text.replace(exp, value)
            })
        }
    }

    getVueVal(vue, exp) {
        let val = vue
        if (typeof exp !== 'string' || !exp) return
        const exps = exp.split('.')
        exps.forEach(key => {
            val = val[key]
        })
        return val
    }
    
    setVueVal(vue, exp, value) {
        let val = vue
        if (typeof exp !== 'string' || !exp) return
        const exps = exp.split('.')
        exps.forEach((key, index) => {
            if (index < exps.length - 1) {
                val = val[key]
            } else {
                val[key] = value
            }
        })
    }
}