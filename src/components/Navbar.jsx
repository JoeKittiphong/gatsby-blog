import React from 'react'
import { Link } from 'gatsby'
import * as style from "./Navbar.module.css"
import logo from "../images/zylaah_autotrade.png"

function Navbar() {
    return (
        <div className={style.nav}>
            <div className={style.boxlogo}>
                <Link to='/'>
                    <img src={logo} alt="logo" className={style.logo} />
                </Link>
                <div className={style.txtlogo}>
                    <span className={style.name}>Zylaah</span>
                    <span className={style.auto}>autotrade</span>                    
                </div>
            </div>
            <div className={style.navlink}>
                <Link className={style.link} to='/'>บทความ</Link>
                <Link className={style.link} to='/about'>เกี่ยวกับเรา</Link>
            </div>
        </div>
    )
}

export default Navbar

