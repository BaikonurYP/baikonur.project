import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { leadersReducer } from './leaderReducer'
import { userReducer } from './userReducer'
import { skinReducer } from './SkinReducer'
import { authReducer } from './authReducer'

const persistSkinConfig = {
    key: 'skin',
    storage
}

const persistAuthConfig = {
    key: 'auth',
    storage
}

const persistedSkinReducer = persistReducer(persistSkinConfig, skinReducer)
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer)

export const rootReducer = combineReducers({
    leaders: leadersReducer,
    user: userReducer,
    playerSkin: persistedSkinReducer,
    auth: persistedAuthReducer
})

export type RootState = ReturnType<typeof rootReducer>
