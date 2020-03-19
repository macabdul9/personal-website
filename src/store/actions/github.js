import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchGithub = ( data ) => {
    return {
        type: actionTypes.FETCH_GITHUB,
        githubData: data
    };
};

export const fetchGitData = () => {
    return dispatch => {
        axios.get('https://api.github.com/repos/macabdul9/personal-website')
            .then( response => {
               dispatch(fetchGithub(response.data));
            //    console.log('github.js actions', response.data);
            } )
            .catch( error => {
                console.log(error);;
            } );
    };
};