

import React, { useState } from "react";

const ReactForms = ()=> {
    const [name, setName] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(name);
        
    }

return(
    <div>ReactForm
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default ReactForms