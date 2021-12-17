const tagReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TAG':
        return action.payload;
      default:
        return state;
    }
  };
  export default tagReducer;