import React, { useEffect, useState } from 'react'
import CardUser from '../Header/CardUser';
import '../Header/ListCardUser.css'
const ListCardUser = () => {
    /**
     * estado => users []
     * setUsers => me permite modificar el estado original 
     */
    const [users, setUsers] = useState([]);
    console.log('DATA' , users)
    useEffect(() => {
        fetch('http://api.github.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);
    
    return  <div className='Cards-List'>
        {users.map((user) => (
        <div key={user.id}>
            <CardUser data = {user} />
        </div>))}
    </div>
}
export default ListCardUser