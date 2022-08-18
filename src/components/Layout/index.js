import React from 'react'
import './style.css'

//This is the main layout for all pages
function Layout({children}) {
  return (
    <div className='layout'>
        {children}
    </div>
  )
}

export default Layout