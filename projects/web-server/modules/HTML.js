/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */

import React from 'react'
import PropTypes from 'prop-types'
import getWebProjectManifest from 'constellate-utils/getWebProjectManifest'

const webClientManifest = getWebProjectManifest('@ctrlplusb/constellate-example-web-client')

function HTML({ app }) {
  return (
    <html>
      <head>
        {webClientManifest && <link rel="stylesheet" href={webClientManifest.httpPaths.css} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />

        {webClientManifest &&
          <script type="text/javascript" src={webClientManifest.httpPaths.js} />}
      </body>
    </html>
  )
}

HTML.propTypes = {
  app: PropTypes.string.isRequired,
}

export default HTML
