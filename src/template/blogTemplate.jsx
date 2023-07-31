import React from 'react'
import { graphql } from "gatsby"
import * as style from "./blogTemplate.module.css"
import Header from '../components/Header'

function blogTemplate({ data: { markdownRemark } }) {
    const data = markdownRemark.frontmatter
    return (
        <div className={style.blog}>
            <Header title={data.head} content={data.title} ></Header>
            <div className={style.title}>
                <h1>
                    {data.head}
                </h1>
                <div className={style.writen}>
                    <p>ผู้เขียน : {data.writer}</p>
                    <p>{data.date}</p>
                </div>
            </div>
            <div className={style.content} dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
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
            }
        }
    }
`
