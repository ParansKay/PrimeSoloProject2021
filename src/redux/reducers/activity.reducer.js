const activityReducer = (state = [{activity_name:'test'}], action) => {
    switch (action.type) {
      case 'SET_ACTIVITY':
        return action.payload;
      default:
        return state;
    }
  };
  export default activityReducer;