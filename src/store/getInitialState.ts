import { RouterState } from 'connected-react-router'
import { State } from './types/redux'
import { initialState as leaders } from '../store/reducers/leaderReducer'
import { initialState as auth } from '../store/reducers/authReducer'
import { initialState as user } from '../store/reducers/userReducer'
import { initialState as playerSkin } from '../store/reducers/SkinReducer'
import { initialState as topics } from '../store/reducers/topicsReducer'
import { initialState as comments } from '../store/reducers/commentsReducer'
import { UserState } from './types/userTypes'

export const getInitialState = (
    pathname: string = '/',
    userState: UserState = user
): State => ({
    auth,
    user: userState,
    playerSkin,
    leaders,
    topics,
    comments,
    router: {
        location: { pathname, search: '', hash: '', key: '' },
        action: 'POP',
    } as RouterState,
})
