import {createStore} from 'redux'
import mainContentReducer from '../reducers'


const store=createStore(mainContentReducer)


export default store