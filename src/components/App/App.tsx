import React, { FC } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LoginPage from '../../pages/LoginPage/LoginPage'
import SignupPage from '../../pages/SignupPage/SignupPage'
import HomePage from '../../pages/HomePage/HomePage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import ForumPage from '../../pages/ForumPage/ForumPage'
import ForumThemePage from '../../pages/ForumPage/ForumThemePage'
import LeaderboardPage from '../../pages/LeaderboardPage/LeaderboardPage'
import Page404 from '../../pages/404Page/404Page'
import Page500 from '../../pages/500Page/500Page'

const App: FC = () => (
    <Switch>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/signup">
            <SignupPage />
        </Route>
        <Redirect exact from="/" to="home" />
        <Redirect exact from="/game" to="home" />
        <Route path="/home">
            <HomePage />
        </Route>
        <Route path="/profile">
            <ProfilePage />
        </Route>
        <Route path="/forum" exact>
            <ForumPage />
        </Route>
        <Route path="/forum/:id">
            <ForumThemePage />
        </Route>
        <Route path="/leaderboard">
            <LeaderboardPage />
        </Route>
        <Route path="*">
            <Page404 />
        </Route>
        <Route path="/500">
            <Page500 />
        </Route>
    </Switch>
)

export default App
