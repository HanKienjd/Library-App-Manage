import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

const ApiService = {
    get: async (endpoint) => {
        const token = await AsyncStorage.getItem('token');
        const CONFIG = {
            API_URL: Config.API_URL || 'http://54.254.134.97:3000/api',
            HEADER_NO_AUTH: {
                'Content-Type': 'application/json',
            },
            HEADER_AUTH: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
            },
        };
        try {
            const response = await axios
                .get(`${CONFIG.API_URL}/${endpoint}`, CONFIG.HEADER_AUTH)
                .then((res) => res.data);
            return response;
        } catch (error) {
            return {
                data: null,
                error: error.response,
            };
        }
    },
};

export default ApiService;
