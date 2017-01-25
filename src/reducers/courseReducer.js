import * as types from '../actions/actionTypes';


// set initial parameter , we could use default paramter of ES6
export default function courseReducer(state = [] , action){
    switch(action.type) {
        case types.CREATE_COURSE: 
            return [...state, 
                Object.assign({}, action.course)
                ];
        default:
            return state;
    }
}