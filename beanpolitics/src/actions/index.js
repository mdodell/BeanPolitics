import reddit from '../apis/reddit';

export const getRandomRedditPost = (subredditOne, subredditTwo) => async dispatch => {
    const subreddit = Math.random() > 0.5 ? subredditOne : subredditTwo;
    const response = await reddit.get(`r/${subreddit}/random.json`);

    dispatch({type: 'FETCH_RANDOM_POST', payload: response.data});
};