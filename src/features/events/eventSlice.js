import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import eventsService from "./eventService"

const initialState ={
    evs : [],
    isError : false,
    isSuccess: false,
    isLoading: false,
    message : ''
}



//Get all events
export const getEvents = createAsyncThunk('events/getAll',
async(_, thunkAPI) => {
    try {
        
        return await eventsService.getEvents()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)


export const eventSlice = createSlice({
    name:'upcomingevents',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getEvents.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.evs = action.payload
        })
        .addCase(getEvents.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        
    }
})

export const { reset } = eventSlice.actions
export default eventSlice.reducer