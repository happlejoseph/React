

import { useEffect, useRef, useState } from "react";


// const UseRef = ()=> {

//     let [number, setNumber] = useState(0);

//     useEffect(()=> {
//         console.log('component rendered');
        
//     })

//     const handleClick = ()=> {
//         setNumber(n=> n + 1)
//     }

//     return(
//         <button onClick={handleClick}>Click me!</button>
//     )
// }


// useRef //


const UseRef = ()=> {

    const ref = useRef(0) //useRef(0) creates a ref object.

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