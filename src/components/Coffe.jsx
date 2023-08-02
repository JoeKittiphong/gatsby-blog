import React, { useState } from 'react'
import * as style from "./Coffe.module.css"
import coffe from "../images/Iced Coffee_100px.png"
import payment from "../images/coffe paid truemoney.jpg"

function Coffe() {
    
    const [active, setActive] = useState(style.payment)
    const enter=()=>{
        active == style.payment? setActive(style.active) : setActive(style.payment);
        
    }
    return (
        <div className={style.paycoffe}>
            <button onClick={enter} className={style.coffe}>
                <img src={coffe} alt="coffe" />
            </button>
            <div className={active}>
                <button onClick={enter} className={style.close}>X</button>
                <img src={payment} alt="payment" />
                <p className={style.support}>ขอบคุณสำหรับค่ากาแฟคับ</p>
            </div>
        </div>
    )
}

export default Coffe