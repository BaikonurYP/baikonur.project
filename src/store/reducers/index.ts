import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { leadersReducer } from './leaderReducer'
import { userReducer } from './userReducer'
import { skinReducer } from './SkinReducer'
import { authReducer } from './authReducer'
import { topicsReducer } from './topicsReducer'
import { commentsReducer } from './commentsReducer'

import { State } from '../types/redux'

export const rootReducer = (history: History) =>
    combineReducers<State>({
        leaders: leadersReducer,
        user: userReducer,
        playerSkin: skinReducer,
        auth: authReducer,
        topics: topicsReducer,
        comments: commentsReducer,
        // @ts-ignore
        router: connectRouter(history),
    })

export type RootState = ReturnType<typeof rootReducer>
