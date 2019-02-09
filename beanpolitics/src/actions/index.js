import googleCivic from '../apis/googleCivic';
import reddit from '../apis/reddit';

export const getRandomRedditPost = (subredditOne, subredditTwo) => async dispatch => {
    const subreddit = Math.random() > 0.5 ? subredditOne : subredditTwo;
    const response = await reddit.get(`r/${subreddit}/random.json`);

    dispatch({type: 'FETCH_RANDOM_POST', payload: response.data});
};

export const getVoterInfo = (address) => async dispatch => {
    const response = await googleCivic.get('', {
        params: {
            address: address,
            includeOffices: true,
            key: "AIzaSyA48_NR00JkGwAzrsnMnzmsU6H5Bgrl4lM"
        }
    });

    dispatch({type: 'FETCH_VOTER_INFO', payload: response.data});
};