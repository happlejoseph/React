import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigateHook = () => {


const navigate = useNavigate()
const GoTOHome = ()=>{

navigate('/')

}

return (

<div>

<button onClick={GoTOHome}>Click me</button>

</div>

)

}


export default UseNavigateHook