import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    read:false
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionsTypes.READ_POST: return {...state, read:true};
        default: return state;
    }
};

export default reducer;