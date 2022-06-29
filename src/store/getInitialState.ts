import { RouterState } from 'connected-react-router'
import { State } from './types/redux'
import { initialState as leaders } from '../store/reducers/leaderReducer'
import { initialState as auth } from '../store/reducers/authReducer'
import { initialState as user } from '../store/reducers/userReducer'
import { initialState as playerSkin } from '../store/reducers/SkinReducer'

export const getInitialState = (pathname: string = '/'): State => ({
    auth,
    user,
    playerSkin,
    leaders,
    router: {
        location: { pathname, search: '', hash: '', key: '' },
        action: 'POP',
    } as RouterState,
})
