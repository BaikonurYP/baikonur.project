import React from 'react'
import url from 'url'
import { Provider as ReduxProvider } from 'react-redux'
import { StaticRouter, matchPath } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import Helmet, { HelmetData } from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

import { Request, Response } from 'express'

import { getInitialState } from './store/getInitialState'
import { App } from './components/App/App'

import { configureStore } from './store'

import rootSaga from './store/saga'
import routes from './routes'

export default (req: Request, res: Response) => {
    const location = req.url
    const context: StaticRouterContext = {}
    const { store } = configureStore(
        getInitialState(
            location,
            res.locals.auth,
            res.locals.user,
            res.locals.theme
        ),
        location
    )
    function renderApp() {
        const tsx = (
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={location}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        )

        if (context.url) {
            res.redirect(context.url)
            return
        }

        const sheet = new ServerStyleSheet()
        const reactHtml = renderToString(sheet.collectStyles(tsx))
        const styleTags = sheet.getStyleTags()
        const reduxState = store.getState()
        const helmet = Helmet.renderStatic()

        res.status(context.statusCode || 200).send(
            getHtml(reactHtml, styleTags, reduxState, helmet, req.csrfToken())
        )
    }

    store
        .runSaga(rootSaga)
        .toPromise()
        .then(() => renderApp())
        .catch((err) => {
            throw err
        })

    const dataRequirements: (Promise<void> | void)[] = []

    routes.some((route) => {
        const { fetchData: fetchMethod } = route
        const match = matchPath<{ slug: string }>(
            url.parse(location).pathname,
            route
        )

        if (match && fetchMethod) {
            dataRequirements.push(
                fetchMethod({
                    dispatch: store.dispatch,
                    match
                })
            )
        }

        return Boolean(match)
    })

    return Promise.all(dataRequirements)
        .then(() => store.close())
        .catch((err) => {
            throw err
        })
}

function getHtml(
    reactHtml: string,
    styleTags: string,
    reduxState: {},
    helmet: HelmetData,
    nonce: string
) {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Байконур</title>
        <script nonce=${nonce} defer src="/main.js"></script>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${styleTags}
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script nonce=${nonce}>
                window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
        </script>
    </body>
    </html>
    `
}
