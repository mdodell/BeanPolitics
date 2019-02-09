import googleCivic from '../apis/googleCivic';
import reddit from '../apis/reddit';

export const getRandomRedditPost = (subredditOne, subredditTwo) => async dispatch => {
    const subreddit = Math.random() > 0.5 ? 'theonion' : 'nottheonion';
    const response = await reddit.get(`r/${subreddit}/random.json`);

    dispatch({type: 'FETCH_RANDOM_POST', payload: response.data});
};

export const getVoterInfo = (address) => async dispatch => {
    const response = await googleCivic.get('', {
        params: {
            address: address,
            includeOffices: true,
            key: "YOUR_API_KEY"
        }
    });

    dispatch({type: 'FETCH_VOTER_INFO', payload: response.data});
};