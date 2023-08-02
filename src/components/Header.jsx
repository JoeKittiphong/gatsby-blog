import React from 'react'
import logo from "../images/zylaah_autotrade.png"

function Header({title, content}) {
    return (<>
        <meta charSet='utf-8' />
        <title>Zylaah autotrade | {title}</title>
        <link
            rel="icon"
            sizes="48x48"
            href={logo}
        ></link>
        <meta
            name="description"
            content={content}
        />
    </>)
}

export default Header