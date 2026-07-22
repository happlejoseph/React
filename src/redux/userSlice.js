

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(

    'users/fetchUsers',

    async()=> {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        return responce.data
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {users: [], loading: false, error: null},
    reducers: {},
    extraReducers: (b)=> {
        b
            .addCase(fetchUsers.pending, (state)=> {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action)=> {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action)=> {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default userSlice.reducer