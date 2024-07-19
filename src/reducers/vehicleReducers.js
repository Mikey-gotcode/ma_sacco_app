import {RECEIVE_VEHICLE_LOCATION} from '../actions/vehicleActions'

const initialState={
    vehicles:[]
}

const vehicleReducer=(state=initialState,action)=>{
    switch(action.type){
        case RECEIVE_VEHICLE_LOCATION:
            const vehicleIndex=state.vehicles.findIndex(vehicle => vehicle.vehicleID === action.payload.vehicleID)
            if(vehicleIndex!==-1){
                const updatedVehicles=[...state.vehicles]
                updatedVehicles[vehicleIndex]={...state.vehicles[vehicleIndex],...action.payload}
                
                return {...state,vehicles:updatedVehicles}
            }else{
                return{...state,vehicles:[...state.vehicles,action.payload]}
            }
        default:
            return state
    }
}

export default vehicleReducer