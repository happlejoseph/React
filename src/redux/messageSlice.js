

import { createSlice } from '@reduxjs/toolkit'


const  messageSlice = createSlice({

    name: 'message',
    initialState: {text: 'helo!'},
    reducers: {

        updateMessage: (state, action)=> {
            state.text = action.payload
        },

        resetMessage: (state)=> {
            state.text = 'helo!'

        }
    }

})



export const {updateMessage, resetMessage} = messageSlice.actions
export default messageSlice.reducer
