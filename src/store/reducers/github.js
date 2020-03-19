import * as actionTypes from '../actions/actionTypes';

const initialState = {
    gitData:{id:'1'}
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const fetchGithub = (state, action) =>{
    return updateObject(state, {gitData:action.gitData})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_GITHUB: return fetchGithub(state, action);
        default: return state;
    }
};

export default reducer;