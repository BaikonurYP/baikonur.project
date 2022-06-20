import React, { FC } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import LoginPage from '../../pages/LoginPage/LoginPage'
import SignupPage from '../../pages/SignupPage/SignupPage'
import HomePage from '../../pages/HomePage/HomePage'
import GamePage from '../../pages/GamePage/GamePage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import ForumPage from '../../pages/ForumPage/ForumPage'
import ForumThemePage from '../../pages/ForumPage/ForumThemePage'
import LeaderboardPage from '../../pages/LeaderboardPage/LeaderboardPage'
import Page404 from '../../pages/404Page/404Page'
import Page500 from '../../pages/500Page/500Page'

import ProtectedRoute from '../HOC/ProtectedRoute'
import ProtectedRouteAuth from '../HOC/ProtectedRouteAuth'

const App: FC = () => (
    <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <ProtectedRouteAuth path="/login" wrappedComponent={LoginPage} />
        <ProtectedRouteAuth path="/signup" wrappedComponent={SignupPage} />
        <ProtectedRoute path="/home" wrappedComponent={HomePage} />
        <ProtectedRoute path="/game" wrappedComponent={GamePage} />

        <ProtectedRoute path="/profile" wrappedComponent={ProfilePage} />
        <ProtectedRoute path="/forum/:id" wrappedComponent={ForumThemePage} />
        <ProtectedRoute path="/forum" wrappedComponent={ForumPage} />
        <ProtectedRoute
            path="/leaderboard"
            wrappedComponent={LeaderboardPage}
        />
        <Route path="/500">
            <Page500 />
        </Route>
        <Route path="*">
            <Page404 />
        </Route>
    </Switch>
)

const Component = hot(App)

export { Component as App }
