
import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const app = createReducer([], {
    [types.APP_INITIAL](state, action) {
        return [...state];
    },
    [types.APP_INITIAL_FINISHED](state, action) {
        return [...state];
    }
});
