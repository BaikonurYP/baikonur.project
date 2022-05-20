import { combineReducers } from 'redux'
import { leadersReducer } from './leaderReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    leaders: leadersReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
