const {resolve} = require("path")

exports.createPages =async({actions, graphql})=>{
    const {data : {allMarkdownRemark}, errors} = await graphql(`
        query {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                        path
                        cover
                    }
                }
            }
        }
    `)

    if(errors) return Promise.reject(error)

    allMarkdownRemark.nodes.forEach(({id, frontmatter}) => {
        actions.createPage({
            path : frontmatter.path,
            component : resolve("./src/template/blogTemplate.jsx"),
            context : {
                id
            }
        })        
    })    
}
