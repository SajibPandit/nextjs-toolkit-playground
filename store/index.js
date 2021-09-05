import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import demoReducer from './reducers/demoSlice'

export default configureStore({
    reducer:{
        users : userReducer,
        demos: demoReducer
    },
})