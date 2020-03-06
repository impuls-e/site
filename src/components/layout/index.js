import React from 'react'
import './styles.css'

import "minireset.css"

export default function Layout ({children}) {
   return (
       <>
            <div className="layout"> {children}</div>
           
        </>
    )
} 
