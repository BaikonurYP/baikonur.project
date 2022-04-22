import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from '../../pages/LoginPage/LoginPage'
import SignupPage from '../../pages/SignupPage/SignupPage'
import HamePage from '../../pages/HomePage/HomePage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import ForumPage from '../../pages/ForumPage/ForumPage'
import LeaderboardPage from '../../pages/LeaderboardPage/LeaderboardPage'
import Page404 from '../../pages/404Page/404Page'
import Page500 from '../../pages/500Page/500Page'

const App: FC = () => {
    return (
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/signup">
                <SignupPage />
            </Route>
            <Route path="/home">
                <HamePage />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path="/forum">
                <ForumPage />
            </Route>
            <Route path="/leaderboard">
                <LeaderboardPage />
            </Route>
            <Route path="*">
                <Page404></Page404>
            </Route>
            <Route path="/500">
                <Page500></Page500>
            </Route>
        </Switch>
    )
}

export default App
