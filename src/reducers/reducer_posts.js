import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);    

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;   

            // same as above 4 lines. using key interpolation
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');    
            console.log(action.payload.data); // [post1, post2]
            // { 4: post} transforms our array into object- use lodash. better to use objects as our storage for data inside state
        default:
            return state;        
    }
}
