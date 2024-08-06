import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import io from 'socket.io-client'
import { subscribeSocketEvent,unsubscribeSocketEvent } from '../actions/socketActions'
import { receiveVehicleLocation } from '../actions/vehicleActions'


const socket =io('https://backend-server-86l5.onrender.com0')

const VehicleSubscription=()=>{
    const dispatch=useDispatch()
    const subscribedEvents=useSelector(state=>state.socket.subscribedEvents)

    useEffect(()=>{
        const handleReceiveLocation=(data)=>{
            dispatch(receiveVehicleLocation(data))
        }
        dispatch(subscribeSocketEvent('receiveLocation',handleReceiveLocation))

        return()=>{
            dispatch(unsubscribeSocketEvent('receiveLocation'))
        }
    },[dispatch])

    useEffect(()=>{
        subscribeSocketEvent.forEach(event => {
            socket.on(event.event,event.callback)
            
        });
        return ()=>{
            subscribedEvents.forEach(event=>{
                socket.off(event.event,event.callback)
            })
        }
    },[subscribedEvents])

    return null

}

export default VehicleSubscription