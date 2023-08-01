import React from 'react'
import Navbar from './Navbar'
import "../style/global.css"

function Layout({ children }) {
    return (
        <div>
            <div className='nav'>
                <Navbar />
            </div>
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Layout