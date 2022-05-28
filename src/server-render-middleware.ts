import { renderToString } from 'react-dom/server'
import {ServerStyleSheet} from "styled-components";

import { Request, Response } from 'express'
import { App } from './components/App/App'

export default (req: Request, res: Response) => {
    const sheet = new ServerStyleSheet()
    const reactHtml = renderToString(sheet.collectStyles(App))
    const styleTags = sheet.getStyleTags()
    res.send(getHtml(reactHtml, styleTags))
}

function getHtml( reactHtml: string, styleTags: string) {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Байконур</title>
        <script defer="defer" src="/bundle.js"></script>
        ${styleTags}
    </head>
    <body>
        <div id="root">${reactHtml}</div>
    </body>
    </html>
    `
}
