import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import { Request, Response } from 'express'
import { App } from './components/App/App'

export default (req: Request, res: Response) => {
    const location = req.url
    const context: StaticRouterContext = {}

    const tsx = (
        <StaticRouter context={context} location={location}>
            <App />
        </StaticRouter>
    )
    const sheet = new ServerStyleSheet()
    const reactHtml = renderToString(sheet.collectStyles(tsx))
    const styleTags = sheet.getStyleTags()
    res.send(getHtml(reactHtml, styleTags))
}

function getHtml(reactHtml: string, styleTags: string) {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Байконур</title>
        <script defer src="/main.js"></script>
        ${styleTags}
    </head>
    <body>
        <div id="root">${reactHtml}</div>
    </body>
    </html>
    `
}
