const initialState={
    records:'ReadVehicle'
}

const vehicleContentReducer= (state=initialState,action)=>{
    switch(action.type){
        case 'SET_VEHICLE_RECORDS':
            return{
                ...state,
                records:{
                    vehicleRecords:action.payload
                }
            }
            default:
                return state
    }
}


export default vehicleContentReducer