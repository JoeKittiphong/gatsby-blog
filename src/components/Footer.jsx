import React from 'react'
import * as style from "./Footer.module.css"
import fb from "../images/facebook_60px.png"
import yt from "../images/YouTube_48px.png"
import dc from "../images/Discord Bubble_48px.png"
import ws from "../images/website_52px.png"
import ln from "../images/line_100px.png"
import { Link } from 'gatsby'

function Footer() {
    return (
        <div className={style.footer}>
            <Link to='https://web.facebook.com/zylaah.fx/'>
                <img className={style.img} src={fb} alt="facebok" />
            </Link>
            <Link to='https://www.youtube.com/channel/UCiDzjqh0aJv6PYXwbOq88Ow'>
                <img className={style.img} src={yt} alt="youtube" />
            </Link>
            <Link to='https://discord.gg/HENmvjkqKM'>
                <img className={style.img} src={dc} alt="discord" />
            </Link>
            <Link to='https://line.me/R/ti/g/V6kIephmqy'>
                <img className={style.img} src={ln} alt="discord" />
            </Link>
            <Link to='/'>
                <img className={style.img} src={ws} alt="website" />
            </Link>
        </div>
    )
}

export default Footer