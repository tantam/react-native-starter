/**
 * Created by kei on 13/2/17.
 */
import { combineReducers } from 'redux';


import * as app from './app.reducer';

export default combineReducers({...app});
