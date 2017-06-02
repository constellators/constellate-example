/* eslint-disable no-console */

import express from 'express'
import getWebProjectManifest from 'constellate-utils/getWebProjectManifest'
import reactApplicationMiddleware from './reactApplicationMiddleware'
import packageJson from '../package.json'

const webClientManifest = getWebProjectManifest('@ctrlplusb/constellate-example-web-client')
const port = process.env.PORT || 1337

const app = express()

// Static serving of web-client
app.use(
  // the http path
  webClientManifest.httpPaths.root,
  // the file system path it maps to
  express.static(webClientManifest.serverPaths.root),
)

// The react application middleware
app.use('*', reactApplicationMiddleware)

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`${packageJson.name} listening on http://0.0.0.0:${port}`)
})
