import axios from 'axios';
import { CONST } from './constants';

axios.interceptors.request.use(config => {
    config.headers.Authorization = '';
    return config;
});

export class YouTubeMusic {



    private url = 'test';

    constructor() {
        console.log('test', CONST.API_KEYS);
    }
}



