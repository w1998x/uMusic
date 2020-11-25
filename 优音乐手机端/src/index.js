//引入核心库
import React from 'react'
//引入DOM库
import ReactDOM from 'react-dom'

//全局引入rem文件
import './assets/js/remScale'
//全局引入css样式重置
import './assets/css/reset.css'
//引入路由模式
import { BrowserRouter } from 'react-router-dom'
//引入要渲染的组件
import App from './App'

//把组件名称当做标签去渲染
ReactDOM.render(<BrowserRouter>
    <React.StrictMode><App /></React.StrictMode>
</BrowserRouter>, document.getElementById('root'))