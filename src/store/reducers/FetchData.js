import * as actionTypes from '../actions/actionTypes';

const initialState = {
    readPost: false,
    githubData: null,
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);    
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;