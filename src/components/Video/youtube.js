import axios from 'axios';
const KEY = 'AIzaSyCRZiBrVa-a71cPPWOCJlZ8x-ogCTTNPLQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})