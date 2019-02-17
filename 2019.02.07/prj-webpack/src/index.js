//1.入口文件
//导包
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟DOM
const myh1 = React.createElement('h1',{id:'h1',title:'this is a h1'},'This is a H1')

const mydiv = React.createElement('div',null,'This is a div',myh1)

const element = <div>HelloReact</div>

import AppHeader from './components/AppHeader.jsx'
const element1 = <AppHeader />

import MyComponent from  './components/MyComponent.jsx'
const element2 = <MyComponent />

//将虚拟DOM渲染到页面上
ReactDOM.render(element2,document.getElementById('app'))