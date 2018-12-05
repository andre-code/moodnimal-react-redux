import { INIT_FETCH } from '../Actions';

const initialState = {
    photos:{
        photos: [],
        newPhoto: {
            id_mood: "",
            url_image: "",
            id: ""
        }
    }
}
export default function photosReducer( state= initialState.photos, action) {
    switch (action.type) {      
        case INIT_FETCH: {
            return {
                state
            }
        }
        default: return state;
    }
} 