const initialState = {
    mainContent: 'UserProfile',
    vehicleRecords: 'ReadVehicle'
  };
  
  const mainContentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MAIN_CONTENT':
        return {
          ...state,
          mainContent: action.payload
        };
      case 'SET_VEHICLE_RECORDS':
        return {
          ...state,
          vehicleRecords: action.payload
        };
      default:
        return state;
        
    }
    
  };
  
  export default mainContentReducer;
  