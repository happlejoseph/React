

import React, { useContext } from 'react'
import userContext from './userContext'

function UserContextComp() {

    const userName = useContext(userContext)
  return (
    <div>
      <h1>name: {userName.name}</h1>
      <h1>age: {userName.age}</h1>
      <h1>email: {userName.email}</h1>
    </div>
  )
}

export default UserContextComp
