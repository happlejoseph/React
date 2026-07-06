

import React, { useState } from 'react'

const UseStateHook = () => {

    const [state, setState] = useState(0)

        const Add = ()=> {
            setState(state + 1)
        }

  return (
    <div>
     <h1>Functional Component</h1> 
     <p>Count:{state}</p>
     <button onClick={Add}>Increase</button>
    </div>
  )
}

export default UseStateHook
