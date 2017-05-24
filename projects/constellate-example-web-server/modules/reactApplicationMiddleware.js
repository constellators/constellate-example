/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import getAssets from 'constellate-utils-web-project/getAssets'
import ConstellateExampleReactApp from 'constellate-example-react-app'

function HTML({ webClientAssets, app }) {
  return (
    <html>
      <head>
        {/* CSS */}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />

        {webClientAssets.js && <script type="text/javascript" src={webClientAssets.js} />}
      </body>
    </html>
  )
}

export default function reactApplicationMiddleware(req, resp) {
  const webClientAssets = getAssets('constellate-example-web-client')
  const app = renderToString(<ConstellateExampleReactApp />)
  const fullPage = renderToStaticMarkup(<HTML webClientAssets={webClientAssets} app={app} />)
  resp.send(`<!DOCTYPE html>${fullPage}`)
}
