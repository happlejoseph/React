import axios from "axios";
import { useEffect, useState } from "react"


const GetData = ()=> {

    const [users, setUsers] = useState([]);
    console.log(users);
    

    useEffect(()=> {

        const fetchUsers = async()=> {
            try {

                const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log(responce);

                setUsers(responce.data)
                
            }
            catch(error) {
                console.log('error:', error);
                
            }
        };

        fetchUsers()

    }, []);

    return(
        <div>
            <h2>User List</h2>

            <ul>
                {users.map((user)=> (
                    <li key={user.id}>{user.name} {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default GetData