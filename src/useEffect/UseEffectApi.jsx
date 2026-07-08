
import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [state, setState] = useState([])
    console.log('datas',state);
    

    useEffect(()=> {

        const fetchUsers = async()=> {

            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                console.log(response);

                const data = await response.json()
                console.log(data);

                setState(data)
                
                

            }
            catch(err) {
                console.log(err);
                
            }
        }
        fetchUsers()
    },[])
    
  return (
    <div>
      {state.map(user=> (

        <ul>
            <li>{user.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default UseEffectApi
