# vue 指令学习笔记

## 快速开始

```bash
npm install

npm run serve
```

## 项目结构

```txt
|-- study_direactive
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- readme.md
    |-- webpack.config.js
    |-- src
    |   |-- Compile.js // 编译
    |   |-- index.js // 主入口
    |   |-- Vue.js // mini-vue对象
    |   |-- Observer // 引入之前写好的响应式模块
    |       |-- array.js
    |       |-- defineReactive.js
    |       |-- Dep.js
    |       |-- observe.js
    |       |-- Observer.js
    |       |-- utils.js
    |       |-- Watch.js
    |-- www
        |-- index.html
```

## 概述

结合数据响应式模块，实现了一个简单的双向绑定 `v-model` 指令
