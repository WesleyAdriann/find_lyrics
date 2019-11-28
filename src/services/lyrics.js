import axios from 'axios';
import { config } from '../config/config';

export const requesSongtLyric = (artist, title) => (
    new Promise((resolve, reject) => {
        axios.get(`${config.ENDPOINT_LYRICS}/${artist}/${title}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            })
    })
);
