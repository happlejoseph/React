

import React from 'react'
import { Link } from 'react-router-dom'

function LinkComp() {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/user-context'}>About</Link>

    </div>
  )
}

export default LinkComp
