const { resolve } = require("path")
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/zylaah_autotrade.png`, // This path is relative to the root of the site.
            }
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: resolve("src/contents")
            }
        }
    ]
}