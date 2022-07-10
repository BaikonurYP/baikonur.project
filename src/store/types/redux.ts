import { Dispatch } from 'react'
import { match } from 'react-router'
import { Action, Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'
import { RouterState } from 'connected-react-router'

import { LeadersState } from './leaderTypes'
import { UserState } from './userTypes'
import { SkinState } from './SkinTypes'
import { AuthState } from './authTypes'
import { TopicState } from './topicTypes'
import { CommentState } from './commentsTypes'
import { ThemeState } from './themeTypes'

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
    readonly topics: TopicState
    readonly comments: CommentState
    readonly theme: ThemeState
    readonly router: RouterState
}

export type RouterFetchDataArgs = {
    dispatch: Dispatch<ReduxAction>
    match: match<{ slug: string }>
}
