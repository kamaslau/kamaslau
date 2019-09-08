---
title: Vue.js组件间调用
date: 2019-09-09 03:04:02
categories: [前端]
tags: [Vue.js, JavaScript]
---

## 父组件调用子组件
### 父组件
``` html
<button @click="trigger_child">点击触发子组件方法</button>
<Child ref="my_child">子组件</child>
```
``` javascript
methods: {
    trigger_child() {
        const param = '需要传递到子组件相应方法的参数内容'
        this.$refs.my_child.child_method(param)
    }
}
```
### 子组件
``` javascript
methods: {
    child_method(event) {
        console.log(event)
    }
}
```

## 子组件调用父组件
### 子组件
触发父组件submit事件，并传递content作为参数
``` javascript
this.$emit('submit', content)
```
### 父组件
子组件触发父组件submit事件时，调用submit_form方法，并声明传入的参数名为item
``` html
<Child :value="item" @submit="submit_form" />
```
``` javascript
methods: {
    submit_form(item) {
        console.log(item)
    }
}
```
