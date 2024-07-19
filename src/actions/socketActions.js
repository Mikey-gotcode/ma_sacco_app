// actions/socketActions.js
export const SUBSCRIBE_SOCKET_EVENT='SUBSCRIBE_SOCKET_EVENT'
export const UNSUBSCRIBE_SOCKET_EVENT='UNSUBSCRIBE_SOCKET_EVENT'

export const subscribeSocketEvent = (event, callback) => ({
    type: SUBSCRIBE_SOCKET_EVENT,
    payload: { event, callback },
  });
  
  export const unsubscribeSocketEvent = (event) => ({
    type: UNSUBSCRIBE_SOCKET_EVENT,
    payload: { event },
  });
  