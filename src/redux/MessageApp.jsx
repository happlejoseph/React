

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetMessage, updateMessage } from './messageSlice'

const MessageApp = ()=> {

    const message = useSelector((state)=> state.message.text)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

  return (
    <div>
      <h2>Message App</h2>
      <p>Current Message: {message}</p>
      <input type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder='Enter new message'
      />

      <button onClick={()=> dispatch(updateMessage(input))}>Update</button>
      <button onClick={()=> dispatch(resetMessage())}>Reset</button>

    </div>
  )
}

export default MessageApp
