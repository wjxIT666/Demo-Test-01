import React from 'react'

import cssobj from '../css/AppMain2.css'

export default function AppMain2() {
    return (
        <div>
            <div className={cssobj.w}>
                {/* 1.form */}
                <div className={cssobj.form}>
                    <div className={cssobj.left}>
                        <h3>博雅游戏</h3>
                    </div>
                </div>
                {/* 2.main */}
                <div className={cssobj.main}>
                    {/* slideLeft */}
                    <div className="slideLeft">
                    
                    </div>
                    {/* slideRight */}
                    <div className={cssobj.slideRight}>
                        <ul className={cssobj.normal}>
                            <li className={cssobj.normalLi}>
                                <div className={cssobj.normalLiDiv1}>
                                    <p className={cssobj.normalLiDiv1P1}>斗地主<span className={cssobj.normalLiDiv1P1Span1}>LANDLORDS</span></p>
                                </div>
                                <div className={cssobj.normalLiDiv2}>
                                    <img src={require("../imges/boya-main_01.png")} alt=""/>
                                </div>
                                <div className={cssobj.normalLiDiv3}>
                                    <div className={cssobj.box1}>
                                        <i className={cssobj.i1} onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}></i>
                                        <p id={cssobj.current1}>App Store</p>
                                    </div>
                                    <div className={cssobj.box2}>
                                        <i className={cssobj.i2} onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11}></i>
                                        <p id={cssobj.current11}>二维码下载</p>
                                    </div>
                                </div>
                            </li>

                            <li className={cssobj.normalLi}>
                                <div className={cssobj.normalLiDiv1}>
                                    <p className={cssobj.normalLiDiv1P1}>麻将全集<span className={cssobj.normalLiDiv1P1Span1}>MAHJONG GAMES</span></p>
                                </div>
                                <div className={cssobj.normalLiDiv2}>
                                    <img src={require("../imges/boya-main_02.png")} alt=""/>
                                </div>
                                <div className={cssobj.normalLiDiv3}>
                                    <div className={cssobj.box1}>
                                        <i className={cssobj.i1} onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}></i>
                                        <p id={cssobj.current2}>App Store</p>
                                    </div>
                                    <div className={cssobj.box2}>
                                        <i className={cssobj.i2} onMouseOver={handleMouseOver22} onMouseOut={handleMouseOut22}></i>
                                        <p id={cssobj.current22}>二维码下载</p>
                                    </div>
                                </div>
                            </li>

                            <li className={cssobj.normalLi}>
                                <div className={cssobj.normalLiDiv1}>
                                    <p className={cssobj.normalLiDiv1P1}>四川麻将<span className={cssobj.normalLiDiv1P1Span1}>SICHUAN MAHJONG</span></p>
                                </div>
                                <div className={cssobj.normalLiDiv2}>
                                    <img src={require("../imges/boya-main_03.png")} alt=""/>
                                </div>
                                <div className={cssobj.normalLiDiv3}>
                                    <div className={cssobj.box1}>
                                        <i className={cssobj.i1} onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}></i>
                                        <p id={cssobj.current3}>App Store</p>
                                    </div>
                                    <div className={cssobj.box2}>
                                        <i className={cssobj.i2} onMouseOver={handleMouseOver33} onMouseOut={handleMouseOut33}></i>
                                        <p id={cssobj.current33}>二维码下载</p>
                                    </div>
                                </div>
                            </li>

                            <li className={cssobj.normalLi}>
                                <div className={cssobj.normalLiDiv1}>
                                    <p className={cssobj.normalLiDiv1P1}>四人斗地主<span className={cssobj.normalLiDiv1P1Span1}>FOUR LANDLORDS</span></p>
                                </div>
                                <div className={cssobj.normalLiDiv2}>
                                    <img src={require("../imges/boya-main_04.png")} alt=""/>
                                </div>
                                <div className={cssobj.normalLiDiv3}>
                                    <div className={cssobj.box1}>
                                        <i className={cssobj.i1} onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}></i>
                                        <p id={cssobj.current4}>App Store</p>
                                    </div>
                                    <div className={cssobj.box2}>
                                        <i className={cssobj.i2} onMouseOver={handleMouseOver44} onMouseOut={handleMouseOut44}></i>
                                        <p id={cssobj.current44}>二维码下载</p>
                                    </div>
                                </div>
                            </li>

                            <li className={cssobj.normalLi}>
                                <div className={cssobj.normalLiDiv1}>
                                    <p className={cssobj.normalLiDiv1P1}>中国象棋<span className={cssobj.normalLiDiv1P1Span1}>CHINESE CHESS OF BOYAA</span></p>
                                </div>
                                <div className={cssobj.normalLiDiv2}>
                                    <img src={require("../imges/boya-main_05.png")} alt=""/>
                                </div>
                                <div className={cssobj.normalLiDiv3}>
                                    <div className={cssobj.box1}>
                                        <i className={cssobj.i1} onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}></i>
                                        <p id={cssobj.current5}>App Store</p>
                                    </div>
                                    <div className={cssobj.box2}>
                                        <i className={cssobj.i2} onMouseOver={handleMouseOver55} onMouseOut={handleMouseOut55}></i>
                                        <p id={cssobj.current55}>二维码下载</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function handleMouseOver1() {
   document.getElementById(cssobj.current1).style.color = "#9ed9ba";
}

function handleMouseOut1() {
    document.getElementById(cssobj.current1).style.color = "";
 }

 function handleMouseOver11() {
    document.getElementById(cssobj.current11).style.color = "#2183ee";
 }
 
 function handleMouseOut11() {
     document.getElementById(cssobj.current11).style.color = "";
  }

  function handleMouseOver2() {
    document.getElementById(cssobj.current2).style.color = "#9ed9ba";
 }
 
 function handleMouseOut2() {
     document.getElementById(cssobj.current2).style.color = "";
  }
 
  function handleMouseOver22() {
     document.getElementById(cssobj.current22).style.color = "#2183ee";
  }
  
  function handleMouseOut22() {
      document.getElementById(cssobj.current22).style.color = "";
   }

   function handleMouseOver3() {
    document.getElementById(cssobj.current3).style.color = "#9ed9ba";
 }
 
 function handleMouseOut3() {
     document.getElementById(cssobj.current3).style.color = "";
  }
 
  function handleMouseOver33() {
     document.getElementById(cssobj.current33).style.color = "#2183ee";
  }
  
  function handleMouseOut33() {
      document.getElementById(cssobj.current33).style.color = "";
   }

   function handleMouseOver4() {
    document.getElementById(cssobj.current4).style.color = "#9ed9ba";
 }
 
 function handleMouseOut4() {
     document.getElementById(cssobj.current4).style.color = "";
  }
 
  function handleMouseOver44() {
     document.getElementById(cssobj.current44).style.color = "#2183ee";
  }
  
  function handleMouseOut44() {
      document.getElementById(cssobj.current44).style.color = "";
   }

   function handleMouseOver5() {
    document.getElementById(cssobj.current5).style.color = "#9ed9ba";
 }
 
 function handleMouseOut5() {
     document.getElementById(cssobj.current5).style.color = "";
  }
 
  function handleMouseOver55() {
     document.getElementById(cssobj.current55).style.color = "#2183ee";
  }
  
  function handleMouseOut55() {
      document.getElementById(cssobj.current55).style.color = "";
   }