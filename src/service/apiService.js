import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
const token = AsyncStorage.getItem('token');
const CONFIG = {
    API_URL: Config.API_URL || 'http://54.254.134.97:3000/api',
    HEADER_NO_AUTH: {
        'Content-Type': 'application/json',
    },
    HEADER_AUTH: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
    },
};
export const fetchLogin = async (params) => {
    const { email, password } = params;
    const query = { email: String(email), password: String(password) };

    try {
        const response = await axios
            .post(`${CONFIG.API_URL}/sign-in`, query, CONFIG.HEADER_NO_AUTH)
            .then((res) => res.data);
        return response;
    } catch (error) {
        return {
            data: null,
            message: error.response.message,
        };
    }
};

export const fetchCategory = async () => {
    try {
        const response = await axios.get(`${CONFIG.API_URL}/categories`, CONFIG.HEADER_AUTH).then((res) => res.data);
        return response;
    } catch (error) {
        return {
            data: null,
            message: error.response.message,
        };
    }
};

export const fetchListBooks = async () => {
    try {
        const response = await axios.get(`${CONFIG.API_URL}/books`, CONFIG.HEADER_AUTH).then((res) => res.data);
        return response;
    } catch (error) {
        return {
            data: null,
            message: error.response.message,
        };
    }
};

export const fetchQuery = async (value) => {
    try {
        const response = await axios
            .get(`${CONFIG.API_URL}/search?query=${value}`, CONFIG.HEADER_AUTH)
            .then((res) => res.data);
        return response;
    } catch (error) {
        return {
            data: null,
            message: error.response,
        };
    }
};
