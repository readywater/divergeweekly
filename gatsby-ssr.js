const { renderToString } = require("react-dom/server")
const inlineCss = require("inline-css")

// Renders inline html
exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  pathname,
}) => {
  console.log("Rendering inline")
  console.log(pathname)
  if (pathname.includes("/mail")) {
    const bodyHTML = renderToString(bodyComponent)
    const inlinedHTML = inlineCss(bodyHTML)
    replaceBodyHTMLString(inlinedHTML)
  }
}
