import React from 'react'
import { graphql } from "gatsby"
import * as style from "./blogTemplate.module.css"
import Header from '../components/Header'

import Fbshare from '../components/Share'
import Coffe from '../components/Coffe'

function blogTemplate({data}) {
    const url = `https://zylaah-autotrade.com//${data.markdownRemark.frontmatter.path}`
    return (
        <div className={style.blog}>
            <Coffe></Coffe>
            <Fbshare className={style.share} url={url} quote={data.markdownRemark.frontmatter.title} hastag={"#zylaah #zylaahautotrade #autotrade #ea #forex #forexea"} />
            <Header title={data.markdownRemark.frontmatter.head} content={data.markdownRemark.frontmatter.title} ></Header>
            <div className={style.title}>
                <h1>
                    {data.markdownRemark.frontmatter.head}
                </h1>
                <div className={style.writen}>
                    <p>ผู้เขียน : {data.markdownRemark.frontmatter.writer}</p>
                    <p>{data.markdownRemark.frontmatter.date}</p>
                </div>
            </div>
            <div className={style.content} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            <div className={style.tag}>
                Tag : {data.markdownRemark.frontmatter.tag}
            </div>
        </div>
    )
}

export default blogTemplate

export const query = graphql`
    query($id : String) {
        markdownRemark(id : {eq : $id}) {
            html
            frontmatter {
                head
                title
                cover
                writer
                date
                tag
                path
            }
        }
    }
`