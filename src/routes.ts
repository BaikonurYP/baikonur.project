import {
    fetchUser,
    oAuthAccess,
    oAuthRequest,
} from './store/actions/userActions'
import { fetchLeaders } from './store/actions/leadersAction'

import { RouterFetchDataArgs } from './store/types/redux'

import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import HomePage from './pages/HomePage/HomePage'
import GamePage from './pages/GamePage/GamePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ForumPage from './pages/ForumPage/ForumPage'
import ForumThemePage from './pages/ForumPage/ForumThemePage'
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage'
import Page404 from './pages/404Page/404Page'
import Page500 from './pages/500Page/500Page'

export default [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/home',
        wrappedComponent: HomePage,
        isProtected: true,
    },
    {
        path: '/login',
        wrappedComponent: LoginPage,
        isProtectedAuth: true,
    },
    {
        path: '/signup',
        wrappedComponent: SignupPage,
        isProtectedAuth: true,
    },
    {
        path: '/game',
        wrappedComponent: GamePage,
        isProtected: true,
    },
    {
        path: '/profile',
        wrappedComponent: ProfilePage,
        isProtected: true,
    },
    {
        path: '/forum/:id',
        wrappedComponent: ForumThemePage,
        isProtected: true,
    },
    {
        path: '/forum',
        wrappedComponent: ForumPage,
        isProtected: true,
    },
    {
        path: '/leaderboard',
        wrappedComponent: LeaderboardPage,
        isProtected: true,
        fetchData({ dispatch }: RouterFetchDataArgs) {
            dispatch(fetchLeaders())
        },
    },
    {
        path: '/500',
        wrappedComponent: Page500,
    },
    {
        path: '*',
        wrappedComponent: Page404,
    },
]
