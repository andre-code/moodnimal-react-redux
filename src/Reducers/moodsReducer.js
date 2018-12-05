import initialState from './initialState';
export default function moodsReducer( state= initialState.moods, action) {
    switch (action.type) {
        case 'GET_MOODS': {
            return state.moods;
        }
        default: return state;
    }
} 