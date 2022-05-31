import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { leadersReducer } from './leaderReducer'
import { skinReducer } from './SkinReducer'

const persistConfig = {
    key: 'root',
    storage
}

const persistedSkinReducer = persistReducer(persistConfig, skinReducer)

export const rootReducer = combineReducers({
    leaders: leadersReducer,
    playerSkin: persistedSkinReducer
})

export type RootState = ReturnType<typeof rootReducer>
