import { combineEpics } from 'redux-observable';

import AuthEpic from './authEpic'

const rootEpic = combineEpics(
    AuthEpic.pingEpic
);

export default rootEpic;