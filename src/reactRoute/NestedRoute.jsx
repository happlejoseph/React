

import React from 'react'
import { Outlet } from 'react-router-dom'

function NestedRoute() {
  return (
    <div>
      Nested
      <Outlet/>
    </div>
  )
}

export default NestedRoute
