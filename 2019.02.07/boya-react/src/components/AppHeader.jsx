import React from 'react'

import cssobj from '../css/AppHeader.css'

console.log(cssobj.header)
export default function AppHeader() {
   return (
        <div>
            <div className={cssobj.header}>
                <div className={cssobj.w}>
                   <div className={cssobj.nav}>
                        {/* 1.logo */}
                        <div className={cssobj.logo}>
                            <img src={require('../imges/boya-logo_03.png')} alt=""/>
                        </div>
                        {/* 2.navbar */}
                        <div className={cssobj.navbar}>
                            <ul className={cssobj.normal}>
                                <li id="li1" className={cssobj.normalLi} onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}>首页</li>
                                <li id={cssobj.normalLi2} className={cssobj.normalLi}>博雅游戏</li>
                                <li id="li3" className={cssobj.normalLi} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>博雅新闻</li>
                                <li id="li4" className={cssobj.normalLi} onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}>关于我们</li>
                                <li id="li5" className={cssobj.normalLi} onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}>客服中心</li>
                                <li id="li6" className={cssobj.normalLi} onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6}>投资者关系</li>
                                <li id={cssobj.li7} className={cssobj.normalLi} onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut7}>加入我们</li>
                            </ul>
                        </div>
                        {/* 3.box */}
                        <div className={cssobj.box}>
                            <a href="#" className={cssobj.a1}>中文</a>
                            <a id="a11" href="#" className={cssobj.a11} onMouseOver={handleMouseOvera11} onMouseOut={handleMouseOuta11}>EN</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
   )
}

function handleMouseOver1() {
   document.getElementById('li1').style.color = "#fff";
}

function handleMouseOut1() {
    document.getElementById('li1').style.color = "";
 }

 function handleMouseOver3() {
    document.getElementById('li3').style.color = "#fff";
 }
 
 function handleMouseOut3() {
     document.getElementById('li3').style.color = "";
  }

  function handleMouseOver4() {
    document.getElementById('li4').style.color = "#fff";
 }
 
 function handleMouseOut4() {
     document.getElementById('li4').style.color = "";
  }

  function handleMouseOver5() {
    document.getElementById('li5').style.color = "#fff";
 }
 
 function handleMouseOut5() {
     document.getElementById('li5').style.color = "";
  }

  function handleMouseOver6() {
    document.getElementById('li6').style.color = "#fff";
 }
 
 function handleMouseOut6() {
     document.getElementById('li6').style.color = "";
  }

  function handleMouseOver7() {
    document.getElementById(cssobj.li7).style.color = "#fff";
 }
 
 function handleMouseOut7() {
     document.getElementById(cssobj.li7).style.color = "";
  }

  function handleMouseOvera11() {
    document.getElementById('a11').style.color = "#38b774";
 }
 
 function handleMouseOuta11() {
     document.getElementById('a11').style.color = "";
  }

 