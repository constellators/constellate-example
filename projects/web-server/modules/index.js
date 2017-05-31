/* eslint-disable no-console, global-require */

import express from 'express'
import getWebProjectManifest from 'constellate-utils/getWebProjectManifest'
import packageJson from '../package.json'
import reactApplicationMiddleware from './reactApplicationMiddleware'

const webClientManifest = getWebProjectManifest('@ctrlplusb/constellate-example-web-client')
const port = process.env.PORT || 1337

express()
  // We configure the serving of our web-client using the manifest information.
  .use(
    // the http root path from which our web-client will be served
    webClientManifest.httpPaths.root,
    // the file system path to resolve the web-client files from
    express.static(webClientManifest.serverPaths.root),
  )
  // Attach our react application middleware to handle all requests.
  .use('*', reactApplicationMiddleware)
  // Begin listening
  .listen(port, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`${packageJson.name} listening on http://0.0.0.0:${port}`)
  })
