import { useEffect, useState } from "react"


const UseEffectCounter = ()=> {

    const [state, setState] = useState(0)

    const Add = ()=> {

        setState(state + 1)
    }

    useEffect(()=> {
        console.log("cont is:", state);
        
    },[state])

    return(
        <div>
            Count: {state}
            <button onClick={Add}>Click</button>
        </div>
    )
}

export default UseEffectCounter