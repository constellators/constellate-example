import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import MyReactApp from '@ctrlplusb/constellate-example-react-app'
import HTML from './HTML'

export default function reactApplicationMiddleware(req, resp) {
  const app = renderToString(<MyReactApp />)
  const fullPage = renderToStaticMarkup(<HTML app={app} />)

  resp.send(`<!DOCTYPE html>${fullPage}`)
}
