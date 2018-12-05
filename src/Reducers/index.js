import {combineReducers} from 'redux';
import photosReducer from '../Reducers/photosReducer';

export const initialState = {}

const rootReducer = combineReducers({
    photos: photosReducer
});

export default rootReducer;