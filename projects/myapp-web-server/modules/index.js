/* eslint-disable no-console, global-require */

import express from 'express'
import packageJson from '../package.json'
import reactApplicationMiddleware from './reactApplicationMiddleware'

const port = process.env.PORT || 1337

express().use('*', reactApplicationMiddleware).listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`${packageJson.name} listening on http://0.0.0.0:${port}`)
})
