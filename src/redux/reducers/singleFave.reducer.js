const singleFaveReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_FAVORITE':
        return action.payload;
      default:
        return state;
    }
  };
  export default singleFaveReducer;
