

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserList = ()=> {

    const dispath = useDispatch()
    const {users, loading, error} = useSelector((state)=> state.users)

    useEffect(()=> {
        dispath(fetchUsers())
    },[dispath])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}
export default UserList