

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'

const CounterRTK = ()=> {

    const count = useSelector((state)=> state.counter.value)

    const dispatch = useDispatch()


  return (
    <div>
      count: {count}
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default CounterRTK
