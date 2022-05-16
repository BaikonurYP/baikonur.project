import { combineReducers } from 'redux'
import { leadersReducer } from './leaderReducer'

export const rootReducer = combineReducers({
    leaders: leadersReducer,
})


export type RootState = ReturnType<typeof rootReducer>