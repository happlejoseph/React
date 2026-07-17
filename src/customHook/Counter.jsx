

import React from 'react'
import useCounter from './useCounter'

function Counter() {

    const {count, add} = useCounter()

  return (
    <div>
      Count: {count}

      <button onClick={add}>Add</button>
    </div>
  )
}

export default Counter
