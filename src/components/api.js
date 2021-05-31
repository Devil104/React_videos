import axios from 'axios';

const KEY= 'AIzaSyBHubQOJlrwrszddHxvlFIMYvXB7O0-N9U';  

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key:KEY,
    }
});

