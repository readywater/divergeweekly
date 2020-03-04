const { renderToString } = require("react-dom/server")
// const inlineCss = require("inline-css")
const { Helmet } = require("react-helmet")

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
