import { fork, all } from 'redux-saga/effects'

import leader from './leaderSaga'
import user from './userSaga'

export default function* rootSaga() {
    yield all([fork(leader), fork(user)])
}
