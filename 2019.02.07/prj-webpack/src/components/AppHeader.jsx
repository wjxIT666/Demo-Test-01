import React from 'react'
import styles from '../styles';
import cssobj from '../css/AppHeader.css'
console.log(cssobj.title)

export default function AppHeader() {
    return (
        <div>
            <h1 style={styles.message}>AppHeader组件</h1>
            <h2 className="title">我是css样式表</h2>
            <h2 className={cssobj.current}>我是绿色</h2>
        </div>
    )
}