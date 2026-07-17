

import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

function UseRef() {

    const ref = useRef(0)

    useEffect(()=> {
        console.log('component rendered');
        
    })

    const handleClick = ()=> {
        ref.current++
        console.log(ref.current); //You access or change the value using .current.
        
    }

    return(
        <button onClick={handleClick}>Click me!</button>
    )
}

export default UseRef;
