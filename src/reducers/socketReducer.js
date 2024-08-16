import { SUBSCRIBE_SOCKET_EVENT, UNSUBSCRIBE_SOCKET_EVENT } from "../actions/socketActions";

const initialState = {
    subscribedEvents: [],
};

const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_SOCKET_EVENT:
            return {
                ...state,
                subscribedEvents: [
                    ...state.subscribedEvents, 
                    { event: action.payload.event, callback: action.payload.callback }
                ],
            };
        case UNSUBSCRIBE_SOCKET_EVENT:
            return {
                ...state,
                subscribedEvents: state.subscribedEvents.filter(
                    (subscribedEvent) => subscribedEvent.event !== action.payload.event
                ),
            };
        default:
            return state;
    }
};

export default socketReducer;
