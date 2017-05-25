/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'
import getAssets from 'constellate-utils-web-project/getAssets'

const webClientAssets = getAssets('myapp-web-client')

function HTML({ app }) {
  return (
    <html>
      <head>
        {webClientAssets.css && <link rel="stylesheet" href={webClientAssets.css} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />

        {webClientAssets.js && <script type="text/javascript" src={webClientAssets.js} />}
      </body>
    </html>
  )
}

HTML.propTypes = {
  app: PropTypes.string.isRequired,
}

export default HTML
