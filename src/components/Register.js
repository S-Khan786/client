import React, { useState } from 'react'
import axios from 'axios'

function Register() {

    const[name, setname] = useState('')
    const[username, setusername] = useState('')
    const[password, setpassword] = useState('')

    function register(event) {
        event.preventDefault()

        var user = {

            name: name, 
            username: username,
            password: password
        }

        axios.post('/api/user/registeruser', user).then(res=> {
            console.log(res);
            alert(res.data);
        }).catch(err=> {
            console.log(err);
        })
    }

    return(
        <div>

            <form onSubmit={register}>
                <h1>Register</h1>
                <input type="text" placeholder='name' className='form-control' value={name} onChange={(e)=> {setname(e.target.value)}}/>
                <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=> {setusername(e.target.value)}}/>
                <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=> {setpassword(e.target.value)}}/>

                <button class="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register
