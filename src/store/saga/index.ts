import { fork, all } from 'redux-saga/effects'

import leader from './leaderSaga'
import user from './userSaga'
import topics from './topicsSaga'
import comments from './commentsSaga'
import theme from './themeSaga'

export default function* rootSaga() {
    yield all([
        fork(leader),
        fork(user),
        fork(topics),
        fork(comments),
        fork(theme)
    ])
}
