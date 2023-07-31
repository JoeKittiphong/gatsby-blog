import React from 'react'
import Navbar from './Navbar'
import "../style/global.css"

function Layout({ children }) {
    return (
        <section>
            <Navbar />
            <div className="main">
                {children}
            </div>
        </section>
    )
}

export default Layout