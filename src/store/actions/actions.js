import * as actionTypes from './actionTypes';
import axios from 'axios';

export const readPost = ( status ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        readPost: status
    };
};

export const fetchGithub = ( data ) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        githubData: data
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://api.github.com/repos/macabdul9/personal-website')
            .then( response => {
               dispatch(fetchGithub(response.data));
            } )
            .catch( error => {
                console.log(error);;
            } );
    };
};