import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = {
    currentUser: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, currentUser: action.payload || false }
        default:
            return state;
    }
}
