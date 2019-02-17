//1.
import React from 'react'
import ReactDOM from 'react-dom'

//2.
const myh1 = React.createElement('h1',{id:"h1",title:"this is a h1"},'This is a H1')
const mydiv = React.createElement('div',null,'This is a Div',myh1)

const element = <div>HelloReact</div>

import AppHeader from './components/AppHeader.jsx'
import AppMain from './components/AppMain.jsx'
import AppMain2 from './components/AppMain2.jsx'
const element1 = <div>
    <AppHeader />
    <AppMain />
    <AppMain2 />
</div>
//3.
ReactDOM.render(element1,document.getElementById('app'))