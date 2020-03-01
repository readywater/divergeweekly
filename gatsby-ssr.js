const { renderToString } = require("react-dom/server")
// const inlineCss = require("inline-css")
const { Helmet } = require("react-helmet")
const { render } = require("mjml-react")

export const onRenderBody = (
  { pathname, setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  if (pathname.includes("/mail")) {
    const helmet = Helmet.renderStatic()
    setHtmlAttributes(helmet.htmlAttributes.toComponent())
    setBodyAttributes(helmet.bodyAttributes.toComponent())
    setHeadComponents([
      helmet.title.toComponent(),
      helmet.link.toComponent(),
      helmet.meta.toComponent(),
      helmet.noscript.toComponent(),
      helmet.script.toComponent(),
      helmet.style.toComponent(),
    ])
  }
}

// export const wrapPageElement = ({ element, props }) => {
//   //   console.log(props.)
//   if (props.location && props.location.pathname.includes("/mail")) {
//     console.log("Rendering", element.props.markdownRemark)

//     // return render(element.props.markdownRemark, {
//     //   keepComments: false,
//     //   beautify: false,
//     //   minify: false,
//     //   validationLevel: "soft",
//     // })
//   }
// }

// export const onPreRenderHTML = ({
//   pathname,
//   getHeadComponents,
//   getPostBodyComponents,
// }) => {
//   const headComponents = getHeadComponents()
//   const postbody = getPostBodyComponents()
//   if (pathname.includes("/mail")) {
//     console.log("PostBody", postbody)
//     console.log("Head", headComponents)
//   }
// }

// export const replaceRenderer = ({
//   pathname,
//   bodyComponent,
//   replaceBodyHTMLString,
// }) => {
//   if (pathname.includes("/mail")) {
//     const bodyHTML = renderToString(bodyComponent)
//     console.log("bodyHTML", bodyHTML)
//   }
// }
