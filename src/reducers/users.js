/**
 * Created by reube on 12/07/2017.
 */
import { FETCH_USERS } from '../actions/types';

export default function (state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
            console.log(action);
            return [ ...state, ...action.payload ];
    }
    return state;
}