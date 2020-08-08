import axios from 'axios';

const API_URL = 'https://api.github.com';
const token = '';

/**
 * Create a new instance of axios with a custom config
 */
const request = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `TOKEN ${token}`,
    },
});

export default request;
