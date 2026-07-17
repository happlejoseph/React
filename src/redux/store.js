

import React from 'react'
import { createStore } from 'redux'
import conuterReducer from './reducer'

const store = createStore(conuterReducer)


export default store
