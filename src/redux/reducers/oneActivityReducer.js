const oneActivityReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_ACTIVITY':
            return action.payload;
        default:
            return state;
    }
}

export default oneActivityReducer;