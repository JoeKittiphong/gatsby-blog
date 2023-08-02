import React from 'react'
import * as style from "./Banner.module.css"
import bg from "../images/blog welcome.jpg"

function Banner() {
  return (
    <div className={style.banner}>
        <p>แชร์บทความ ความรู้ และเทคนิค รวมถึงการเขียนโค้ด</p>
        <p>สำหรับการทำระบบเทรดอัตโนมัติ</p>
        <p>ตลาดที่เราสนใจได้แก่ Forex Crypto หุ้น และ option</p>
        <img className={style.bg} src={bg} alt="welcome background" />
    </div>
  )
}

export default Banner