import axios from 'axios';

export const Api = axios.create({
    baseURL : 'https://quiconsulta-backend-nodejs-v48ot.ondigitalocean.app/'//process.env.REACT_API_URL || 'https://localhost:3333'
})