

// import React from 'react'
// import { createStore } from 'redux'
// import conuterReducer from './reducer'

import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from './counterSlice'
import messageReducer from './messageSlice'
import useReducer from "./userSlice";


// const store = createStore(conuterReducer)


// export default store


 const store = configureStore({
    reducer: {
        counter: conuterReducer,
        message: messageReducer,
        users: useReducer,
        
    }
})

export default store