

// import React from 'react'

// const ChildComp = (props) => {
//   return (
//     <div>
//       {props.name}
//     </div>
//   )
// }

// export default ChildComp



// without destructuring //

import React from 'react'

function ChildComp({name}) {
  return (
    <div>
      {name}
    </div>
  )
}

export default ChildComp



