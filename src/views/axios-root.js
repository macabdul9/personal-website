import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://personal-website-abdul.firebaseio.com/'
});

export default instance;