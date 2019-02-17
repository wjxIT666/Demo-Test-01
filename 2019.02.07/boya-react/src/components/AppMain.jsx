import React from 'react'

import cssobj from '../css/AppMain.css'

export default function AppMain() {
   return ( 
       <div>
           <div className={cssobj.banner}>
                <img src={require('../imges/boya-banner_06.png')} alt=""/>
           </div>
       </div>
   )
}