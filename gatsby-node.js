const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const util = require("util")
const fs = require("fs")
const glob = require("glob")
const globAsync = util.promisify(glob)
const readFileAsync = util.promisify(fs.readFile)
// const inlineCss = require("inline-css")
const cheerio = require("cheerio")
const htmlToText = require("html-to-text")
const juice = require("juice")

function dedupeCategories(allMarkdownRemark) {
  const uniqueCategories = new Set()
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    uniqueCategories.add(node.frontmatter.category)
  })
  // Create new array with duplicates removed
  return Array.from(uniqueCategories)
}

function dedupeTags(allMarkdownRemark) {
  const uniqueTags = new Set()
  // Iterate over all articles
  allMarkdownRemark.edges.forEach(({ node }) => {
    // Iterate over each category in an article
    node.frontmatter.tags.forEach(tag => {
      uniqueTags.add(tag)
    })
  })
  // Create new array with duplicates removed
  return Array.from(uniqueTags)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const mailPost = path.resolve(`./src/templates/mail-post.js`)
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const catTemplate = path.resolve("./src/templates/category-list.js")
  const TagListTemplate = path.resolve("./src/templates/tag-list.js")

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    // Generate the web html
    createPage({
      path: `/${post.node.frontmatter.category}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })

    // Generate the Mail html
    createPage({
      path: `/mail_${post.node.frontmatter.category}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Generate Category Pages
  // Note, this assumes a SINGLE category, not arrays
  const dedupedCategories = dedupeCategories(result.data.allMarkdownRemark)
  dedupedCategories.forEach(category => {
    createPage({
      path: `${category}`,
      component: catTemplate,
      // Create props for our CategoryList.js component
      context: {
        category,
        // Create an array of ids of articles in this category
        ids: result.data.allMarkdownRemark.edges
          .filter(({ node }) => {
            return node.frontmatter.category == category
          })
          .map(({ node }) => node.id),
      },
    })
  })

  // Generate Tag Pages
  // Note, this assumes a ARRAY category, not arrays
  const dedupedTags = dedupeTags(result.data.allMarkdownRemark)
  // Iterate over categories and create page for each
  dedupedTags.forEach(tag => {
    createPage({
      path: `tag/${tag}`,
      component: TagListTemplate,

      context: {
        tag,
        ids: result.data.allMarkdownRemark.edges
          .filter(({ node }) => {
            return node.frontmatter.tags.includes(tag)
          })
          .map(({ node }) => node.id),
      },
    })
  })

  // Make tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase()}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

// Renders out pages
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // console.log("OnCreatePage", page)
  if (page.path.includes("/mail")) {
    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
      ...page,
      context: {
        ...page.context,
        house: `Gryffindor`,
      },
    })
  }
}

exports.onPostBuild = async () => {
  console.log(
    "Build Complete for Post Build",
    path.resolve(__dirname, "public/mail/")
  )

  const pattern = "public/mail_*/**/*.html"
  const files = await globAsync(pattern, { nodir: true })

  const inlined = files.map(async file => {
    const data = await readFileAsync(file, "utf8")

    return new Promise(async (resolve, reject) => {
      let html = String(data)
      const url = "https://divergeweekly.com"

      const $ = cheerio.load(html)
      $("script").remove() // remove scripts

      $("link").remove() // remove links

      $("img[src^='/']").prop("href", function(_idx, oldHref) {
        if (!oldHref) {
          console.log("Something is weird", oldHref, _idx)
        } else {
          return oldHref.append(url)
        }
      })

      // $("a[href^='/']").prop("src", function(_idx, oldHref) {
      //   if (!oldHref) {
      //     console.log("Something is weird", oldHref, _idx)
      //   } else {
      //     return oldHref.append(url)
      //   }
      // })

      // Convert Gatsby image to image
      $(".gatsby-resp-image-wrapper").each(function() {
        const _this = this

        $(this).replaceWith(
          `<img src="${url +
            $(this)
              .find("img")
              .attr("src")}" alt="${$(this)
            .find("img")
            .attr("alt")}" />`
        )
      })

      // COnvert picture
      $("picture").each(function() {
        const _this = this

        $(this).replaceWith(
          `<img src="${url +
            $(this)
              .find("img")
              .attr("src")}" alt="${$(this)
            .find("img")
            .attr("alt")}" />`
        )
      })

      // Convert all links
      $("a")
        .not('[href^="http"],[href^="https"],[href^="mailto:"],[href^="#"]')
        .each(function() {
          $(this).attr("href", function(index, value) {
            if (value) {
              if (value.substr(0, 1) !== "/") {
                value = url + value
              }

              return url + value
            } else {
              console.log("Weird.", index, value)
            }
          })
        })

      const text = htmlToText.fromString($.html(), {
        wordwrap: 130,
      })

      const inlined = juice($.html())

      // Write HTML

      fs.writeFile(file, inlined, err => {
        if (err) {
          reject()
          console.error(`Inline CSS error on write file:\n\n${err}`)
        }
        resolve()
      })

      // Write Text

      fs.writeFile(file.split(".")[0] + ".txt", text, err => {
        if (err) {
          reject()
          console.error(`Inline CSS error on write file:\n\n${err}`)
        }
        resolve()
      })
    })
  })
  await Promise.all(inlined)

  // return fetch("https://mail.stupidsystems.com/api/campaigns/create.php", {
  //   method: "POST",
  //   mode: "no-cors",
  //   credentials: "same-origin",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: new URLSearchParams({

  //     list: "w11veSoyUbYWx8PANkEe6w",
  //     boolean: true,
  //     subform: true,
  //   }),
  // })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    externals: { fs: "commonjs fs" },
    module: {
      rules: [
        {
          test: path.resolve(__dirname, "node_modules/uglify-js/tools/node.js"),
          loader: "null-loader",
        },
      ],
    },
  })
}
