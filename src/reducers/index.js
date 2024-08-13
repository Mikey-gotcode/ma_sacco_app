const initialState = {
    mainContent: 'UserProfile'
  };
  
  const mainContentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MAIN_CONTENT':
        return {
          ...state,
          mainContent: action.payload
        };
     
      default:
        return state;
        
    }
    
  };
  
  export default mainContentReducer;
  