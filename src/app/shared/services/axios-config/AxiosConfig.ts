import { Environment } from './../../../environment/Environment';
import axios from 'axios';

export const Api = axios.create({
    baseURL : Environment.URL_API,
})