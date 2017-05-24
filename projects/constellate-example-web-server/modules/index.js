/* eslint-disable no-console, global-require */

import express from 'express'
import packageJson from '../package.json'
import reactApplicationMiddleware from './reactApplicationMiddleware'

const port = process.env.PORT || 1337

const listener = express().use('*', reactApplicationMiddleware).listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`${packageJson.name} listening on ${port}`)
})

// process.once('SIGTERM', () => {
//   console.log(`Shutting down ${packageJson.name}`)
//   listener.close(() => process.kill(process.pid, 'SIGTERM'))
// })
