import axios from 'axios';
import { config } from '../config/config';

export const requesSongtLyric = ({ artist, song }) => (
    new Promise((resolve, reject) => {
        axios.get(`${config.ENDPOINT_LYRICS}/${artist}/${song}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            })
    })
);
