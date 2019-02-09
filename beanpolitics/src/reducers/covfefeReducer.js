export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_RANDOM_POST':
            return action.payload;
        default:
            return state;
    }
}