import React from 'react'
import { Link } from 'gatsby'
import * as style from "./Follow.module.css"

import fb from "../images/share/Facebook_96px.png"
import yt from "../images/share/YouTube_96px.png"
import dc from "../images/share/discord_96px.png"
import ln from "../images/share/line_96px.png"

function Follow() {
  return (
    <div className={style.follow}>
        <div className={style.followtxt}>
            <p>ติดตาม</p>
        </div>
        <div>
            <Link to='https://web.facebook.com/zylaah.fx/'>
                <img src={fb} alt="follow facebook" />
            </Link>
            <Link to='https://www.youtube.com/channel/UCiDzjqh0aJv6PYXwbOq88Ow'>
                <img src={yt} alt="follow youtube" />
            </Link>
            <Link to='https://discord.gg/HENmvjkqKM'>
                <img src={dc} alt="join discord" />
            </Link>
            <Link to='https://line.me/R/ti/g/V6kIephmqy'>
                <img src={ln} alt="join line group" />
            </Link>
        </div>
    </div>
  )
}

export default Follow