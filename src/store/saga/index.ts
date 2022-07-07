import { fork, all } from 'redux-saga/effects'

import leader from './leaderSaga'
import user from './userSaga'
import topics from './topicsSaga'
import comments from './commentsSaga'

export default function* rootSaga() {
<<<<<<< HEAD
    yield all([fork(leader), fork(user)])
=======
    yield all([fork(leader), fork(user), fork(topics), fork(comments)])
>>>>>>> main
}
