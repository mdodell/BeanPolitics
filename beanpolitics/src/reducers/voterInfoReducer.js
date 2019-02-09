export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_VOTER_INFO':
            return action.payload;
        default:
            return state;
    }
}