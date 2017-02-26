import * as types from './types';
import Config from '../config'

export function counterIncease(counter){

    console.log('counterIncease',counter);
    return {
        type: types.COUNTER_INCREASE,
        number:(counter+1)
    }
}
export function counterDecease(counter){
    return {
        type: types.COUNTER_INCREASE,
        number:(counter-1)
    }
}