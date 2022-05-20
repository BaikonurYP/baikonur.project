import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { leadersReducer } from './leaderReducer'
import { userReducer } from './userReducer'
import { skinReducer } from './SkinReducer'


const persistConfig = {
    key: 'root',
    storage
}

const persistedSkinReducer = persistReducer(persistConfig, skinReducer)

export const rootReducer = combineReducers({
    leaders: leadersReducer,
    user: userReducer,
    playerSkin: persistedSkinReducer
})


export type RootState = ReturnType<typeof rootReducer>
