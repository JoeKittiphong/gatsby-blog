import React from 'react'
import { graphql, Link } from "gatsby"
import * as style from "./blogs.module.css"
import Header from '../components/Header'

function blogs({ data: { allMarkdownRemark } }) {
  return (
    <div className={style.box}>
      <Header title={"Blog"} content={"all content"} ></Header>
      {allMarkdownRemark.nodes.map(({ id, frontmatter }) => {
        return <div key={id} className={style.card}>
          <div className={style.img}>
            <img className={style.cardimg} src={frontmatter.cover} />
          </div>
          <div className={style.detail}>
            <div>
              <h1>{frontmatter.head}</h1>
              <p>{frontmatter.title}</p>
            </div>
            <Link className={style.btn} to={frontmatter.path}>อ่านต่อ ...</Link>
          </div>
        </div>
      })}
    </div>
  )
}

export default blogs

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