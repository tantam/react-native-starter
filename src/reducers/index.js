/**
 * Created by kei on 13/2/17.
 */
import {combineReducers} from 'redux';


import * as app from './app.reducer';
import * as counter from './counter.reducer';
// console.log('app',app)
// console.log('counter',counter)
export default combineReducers({
    ...app,
    ...counter,
});
