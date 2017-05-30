/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'
import getWebProjectManifest from 'constellate-utils/getWebProjectManifest'

function HTML({ app }) {
  const webClientAssets = getWebProjectManifest('myapp-web-client')

  return (
    <html>
      <head>
        {webClientAssets.main.css && <link rel="stylesheet" href={webClientAssets.main.css} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />

        {webClientAssets.main.js && <script type="text/javascript" src={webClientAssets.main.js} />}
      </body>
    </html>
  )
}

HTML.propTypes = {
  app: PropTypes.string.isRequired,
}

export default HTML
