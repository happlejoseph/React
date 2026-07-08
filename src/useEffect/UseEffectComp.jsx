import { useEffect } from "react"


const UseEffectComp = ()=> {
    useEffect(()=> {
        console.log('component connected');
        
    },[])

    return(
        <div>UseEffectComp</div>
    )
}

export default UseEffectComp