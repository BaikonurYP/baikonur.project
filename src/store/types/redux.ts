import { Dispatch } from 'react'
import { match } from 'react-router'
import { Action, Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'
import { RouterState } from 'connected-react-router'

<<<<<<< HEAD
import { LeadersState } from '../types/leaderTypes'
import { UserState } from '../types/userTypes'
import { SkinState } from '../types/SkinTypes'
import { AuthState } from '../types/authTypes'
=======
import { LeadersState } from './leaderTypes'
import { UserState } from './userTypes'
import { SkinState } from './SkinTypes'
import { AuthState } from './authTypes'
import { TopicState } from './topicTypes'
import { CommentState } from './commentsTypes'
>>>>>>> main

export interface ReduxAction<T = any, P = any> extends Action {
    type: T
    payload?: P
}

export type AppStore = Store & {
    runSaga: SagaMiddleware['run']
    close: () => void
}

export interface State {
    readonly auth: AuthState
    readonly user: UserState
    readonly playerSkin: SkinState
    readonly leaders: LeadersState
<<<<<<< HEAD
=======
    readonly topics: TopicState
    readonly comments: CommentState
>>>>>>> main
    readonly router: RouterState
}

export type RouterFetchDataArgs = {
    dispatch: Dispatch<ReduxAction>
    match: match<{ slug: string }>
}
