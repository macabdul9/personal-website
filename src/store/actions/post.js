import * as actionTypes from './actionTypes';

export const readPost = ( status ) => {
    return {
        type: actionTypes.READ_POST,
        readPost: status
    };
};

