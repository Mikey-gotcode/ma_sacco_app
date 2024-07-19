import { SUBSCRIBE_SOCKET_EVENT,UNSUBSCRIBE_SOCKET_EVENT } from "../actions/socketActions"

const initialState={
    subcsribedEvents:[],

}
const socketReducer=(state=initialState,action)=>{
    switch(action.type){
        case SUBSCRIBE_SOCKET_EVENT:
            return{
                ...state,
                subcsribedEvents:[...state.subcsribedEvents,{event:action.payload},{callback:action.payload.callback}]
            }
        case UNSUBSCRIBE_SOCKET_EVENT:
            return{
                ...state,
                subcsribedEvents:[...state.subcsribedEvents.filter((event)=>event.event)]
            }
        default:
            return state
    }
}

export default socketReducer