import axios from 'axios';

export default axios.create({
    baseURL: "https://www.googleapis.com/civicinfo/v2/representatives?"
});