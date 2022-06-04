import React, { FC, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

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

import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser, login } from '../../store/actions/userActions'

import ProtectedRouteMain from '../HOC/ProtectedRouteMain'
import ProtectedRouteAuth from '../HOC/ProtectedRouteAuth'

const App: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <Switch>
            {/* <Redirect exact from="/" to="home" /> */}
            <ProtectedRouteAuth path="/login" wrappedComponent={LoginPage} />
            <ProtectedRouteAuth path="/signup" wrappedComponent={SignupPage} />
            <ProtectedRouteMain path="/home" wrappedComponent={HomePage} />
            <ProtectedRouteMain path="/game" wrappedComponent={GamePage} />
            <ProtectedRouteMain
                path="/profile"
                wrappedComponent={ProfilePage}
            />
            <ProtectedRouteMain
                path="/forum/:id"
                wrappedComponent={ForumThemePage}
            />
            <ProtectedRouteMain path="/forum" wrappedComponent={ForumPage} />
            <ProtectedRouteMain
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
}

export default App
