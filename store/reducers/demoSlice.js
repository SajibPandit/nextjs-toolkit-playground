import {createSlice} from '@reduxjs/toolkit'

const demoSlice = createSlice({
    name:'demo',
    initialState:[],
    setData: (state,action)=>{
        state.demo = [action.payload,...state]
    }
})

export const {setData} =demoSlice.actions 

export default demoSlice.reducer