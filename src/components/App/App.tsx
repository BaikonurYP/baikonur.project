import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { hot } from 'react-hot-loader/root'

import ProtectedRoute from '../HOC/ProtectedRoute'
import ProtectedRouteAuth from '../HOC/ProtectedRouteAuth'

import routes from '../../routes'

const App: FC = () => {
    console.log(routes)
    return (
        <Switch>
            {routes.map(
                ({ fetchData, isProtected, isProtectedAuth, ...routeProps }) =>
                    isProtected ? (
                        <ProtectedRoute key={routeProps.path} {...routeProps} />
                    ) : isProtectedAuth ? (
                        <ProtectedRouteAuth
                            key={routeProps.path}
                            {...routeProps}
                        />
                    ) : (
                        !isProtectedAuth &&
                        !isProtected && (
                            <Route
                                key={routeProps.path}
                                {...routeProps}
                                exact
                            />
                        )
                    )
            )}
        </Switch>
    )
}

const Component = hot(App)

export { Component as App }
