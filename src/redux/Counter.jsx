import { useDispatch, useSelector } from "react-redux"


const CounterData = ()=> {

    const count = useSelector((state)=> state.count)
    const dispach = useDispatch()
}

return (
    <div>
        <p>Count: {count}</p>
        <button></button>
    </div>
)