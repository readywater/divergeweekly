import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MailHtml = styled.html`
  body {
    margin: 0;
    padding: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  table {
    border-spacing: 0;
  }

  table td {
    border-collapse: collapse;
  }

  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  }

  .ReadMsgBody {
    width: 100%;
    background-color: #ebebeb;
  }

  table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }

  img {
    -ms-interpolation-mode: bicubic;
  }

  .yshortcuts a {
    border-bottom: none !important;
  }

  @media screen and (max-width: 599px) {
    .force-row,
    .container {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
  @media screen and (max-width: 400px) {
    .container-padding {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
  }
  .ios-footer a {
    color: #aaaaaa !important;
    text-decoration: underline;
  }

  @media screen and (max-width: 599px) {
    .col {
      width: 100% !important;
      border-top: 1px solid #eee;
      padding-bottom: 0 !important;
    }

    .cols-wrapper {
      padding-top: 18px;
    }

    .img-wrapper {
      float: right;
      max-width: 40% !important;
      height: auto !important;
      margin-left: 12px;
    }

    .subtitle {
      margin-top: 0 !important;
    }
  }
  @media screen and (max-width: 400px) {
    .cols-wrapper {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .content-wrapper {
      padding-left: 12px !important;
      padding-right: 12px !important;
    }
  }

  .header,
  .title,
  .subtitle,
  .footer-text {
    font-family: Helvetica, Arial, sans-serif;
  }

  .header {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 12px;
    color: #df4726;
  }

  .footer-text {
    font-size: 12px;
    line-height: 16px;
    color: #aaaaaa;
  }
  .footer-text a {
    color: #aaaaaa;
  }

  .container {
    width: 600px;
    max-width: 600px;
  }

  .container-padding {
    padding-left: 24px;
    padding-right: 24px;
  }

  .content {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #ffffff;
  }

  code {
    background-color: #eee;
    padding: 0 4px;
    font-family: Menlo, Courier, monospace;
    font-size: 12px;
  }

  hr {
    border: 0;
    border-bottom: 1px solid #cccccc;
  }

  .hr {
    height: 1px;
    border-bottom: 1px solid #cccccc;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    color: #374550;
  }

  .subtitle {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: #2469a0;
  }
  .subtitle span {
    font-weight: 400;
    color: #999999;
  }

  .body-text {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    color: #333333;
  }

  .content-wrapper {
    padding-left: 24px;
    padding-right: 24px;
  }

  .col,
  .cols-wrapper {
    padding-left: 12px;
    padding-right: 12px;
  }

  .col {
    padding-top: 18px;
    padding-bottom: 12px;
  }

  .col-copy {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 20px;
    text-align: left;
    color: #333333;
  }

  .img-wrapper td {
    padding-bottom: 18px;
  }

  .subtitle {
    padding-bottom: 6px;
  }

  a[href^="x-apple-data-detectors:"],
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
`

export default function HTML(props) {
  if (true) {
    return (
      <MailHtml
        {...props.htmlAttributes}
        xmlns={"http://www.w3.org/1999/xhtml"}
        // xmlns:v={"urn:schemas-microsoft-com:vml"}
        // xmlns:o={"urn:schemas-microsoft-com:office:office"}
      >
        <head>
          <meta charSet="utf-8" />
          <meta test="True" />
          <xml
            dangerouslySetInnerHTML={{
              __html:
                "<!--[if gte mso 9]><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings><![endif]-->",
            }}
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="date=no" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {props.headComponents}
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\nbody {\n  margin: 0;\n  padding: 0;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\ntable {\n  border-spacing: 0;\n}\n\ntable td {\n  border-collapse: collapse;\n}\n\n.ExternalClass {\n  width: 100%;\n}\n\n.ExternalClass,\n.ExternalClass p,\n.ExternalClass span,\n.ExternalClass font,\n.ExternalClass td,\n.ExternalClass div {\n  line-height: 100%;\n}\n\n.ReadMsgBody {\n  width: 100%;\n  background-color: #ebebeb;\n}\n\ntable {\n  mso-table-lspace: 0pt;\n  mso-table-rspace: 0pt;\n}\n\nimg {\n  -ms-interpolation-mode: bicubic;\n}\n\n.yshortcuts a {\n  border-bottom: none !important;\n}\n\n@media screen and (max-width: 599px) {\n  .force-row,\n  .container {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n@media screen and (max-width: 400px) {\n  .container-padding {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n}\n.ios-footer a {\n  color: #aaaaaa !important;\n  text-decoration: underline;\n}\na[href^="x-apple-data-detectors:"],\na[x-apple-data-detectors] {\n  color: inherit !important;\n  text-decoration: none !important;\n  font-size: inherit !important;\n  font-family: inherit !important;\n  font-weight: inherit !important;\n  line-height: inherit !important;\n}\n',
            }}
          />
        </head>
        <body
          style={{ margin: 0, padding: 0 }}
          bgcolor="#F0F0F0"
          leftmargin="0"
          topmargin="0"
          marginwidth="0"
          marginheight="0"
        >
          {props.preBodyComponents}
          {props.location && <h1>Props!</h1>}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    )
  } else {
    return (
      <html {...props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta test="True" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          {props.location && <h1>Props!</h1>}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
