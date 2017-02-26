
import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';

export const counter = createReducer({
    number:0
}, {
    [types.COUNTER_INCREASE](state, action) {
        return {...state,number:action.number};
    },
    [types.COUNTER_DECREASE](state, action) {
        return {...state,number:action.number};
    }
});
