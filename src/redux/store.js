

// import React from 'react'
// import { createStore } from 'redux'
// import conuterReducer from './reducer'

import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from './counterSlice'


// const store = createStore(conuterReducer)


// export default store


 const store = configureStore({
    reducer: {
        counter: conuterReducer
    }
})

export default store