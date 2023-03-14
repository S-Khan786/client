import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userslist() {

    const[userslist, setuserslist] = useState([])

    useEffect(()=> {

        axios.post('/api/user/getusers').then(
            
            res=> {
                console.log(res);
                setuserslist(res.data)

            }
        ).catch(err=> {
            console.log(err);
        })

    },[])

    const usersdata = userslist.map((obj)=> {

        return <tr>
            <td>{obj.name}</td>
            <td>{obj.username}</td>
            <td>{obj.password}</td>
        </tr>
    })

    return (

        <div>
            <h1>Userslist</h1>

            <table className='table table-dark table-hover'>

                <thead>

                    <tr>
                        
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        
                    </tr>
                </thead> 

                <thead>

                    {usersdata}

                </thead>
            </table>
        </div>
    )

}
export default Userslist