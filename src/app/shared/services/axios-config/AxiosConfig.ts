import axios from 'axios';

export const Api = axios.create({
    baseURL : 'https://quiconsulta-backend-nodejs-v48ot.ondigitalocean.app'
})