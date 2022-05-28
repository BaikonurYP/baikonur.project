import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'

import { Request, Response } from 'express'
import { App } from './components/App/App'

export default (req: Request, res: Response) => {
    // const sheet = new ServerStyleSheet()
    const location = req.url
    const context: StaticRouterContext = {}
    const jsx = (
        <StaticRouter context={context} location={location}>
            <App />
        </StaticRouter>
    )
    const reactHtml = renderToString(jsx)
    // const styleTags = sheet.getStyleTags()
    res.send(getHtml(reactHtml))
}

function getHtml(reactHtml: string) {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Байконур</title>
        <script defer src="/main.js"></script>
    </head>
    <body>
        <div id="root">${reactHtml}</div>
    </body>
    </html>
    `
}
