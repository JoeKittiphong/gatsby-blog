import React from 'react'
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton
} from "react-share"

import share from "../images/share/share_96px.png"
import fb from "../images/share/Facebook_96px.png"
import ln from "../images/share/line_96px.png"
import tw from "../images/share/twitter_circled_96px.png"

import * as style from "./Share.module.css"


function Fbshare({ url, quote, hastag }) {
  return (
    <div className={style.share}>
      <p className={style.sharelogo}>แชร์</p>
      <FacebookShareButton url={url} quote={quote} hashtag={hastag}>
        <img className={style.logo} src={fb} alt="facebook share" />
      </FacebookShareButton>

      <LineShareButton url={url} quote={quote} hashtag={hastag}>
        <img className={style.logo} src={ln} alt="line share" />
      </LineShareButton>

      <TwitterShareButton url={url} quote={quote} hashtag={hastag}>
        <img className={style.logo} src={tw} alt="twitter share" />
      </TwitterShareButton>

    </div>
  )
}

export default Fbshare