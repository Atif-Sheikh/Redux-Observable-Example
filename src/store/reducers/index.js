import { combineReducers } from 'redux'
import pingReducer from './authReducer'

const rootReducer = combineReducers({
    root: pingReducer
})

export default rootReducer