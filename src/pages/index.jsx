import React from 'react'
import { graphql, Link } from "gatsby"
import * as style from "./blogs.module.css"
import Header from '../components/Header'
import Banner from '../components/Banner'

import Follow from '../components/Follow'

function index({ data: { allMarkdownRemark } }) {
  return (
    <div className={style.box}>
      <Follow></Follow>
      <Header title={"Blog"} content={"all content"} ></Header>
      <Banner></Banner>
      {allMarkdownRemark.nodes.map(({ id, frontmatter }) => {
        return <div key={id} className={style.card}>
          <div className={style.img}>
            <img className={style.cardimg} src={frontmatter.cover} />
          </div>
          <div className={style.detail}>
            <div>
              <h1 className={style.head}>{frontmatter.head}</h1>
              <p className={style.title}>{frontmatter.title}</p>
            </div>
            <Link className={style.btn} to={frontmatter.path}>อ่านต่อ ...</Link>
          </div>
        </div>
      })}
    </div>
  )
}

export default index

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    head
                    title
                    path
                    cover
                    writer
                    date
                }
            }
        }
    }
`