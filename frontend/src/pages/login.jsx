import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./login.css";
const Login = () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    function fun() {
        const data = {
            name: name,
            password: pass
        }
        console.log(data);
        console.log(JSON.stringify(data));
        fun2();
        async function fun2() {
            try {

                const res = await fetch('http://localhost:4000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(data)
                })
                console.log(res);
            }
            catch (err) { }
        }
    }

    return (
        <div className="form-container">
            <form onClick={() => { fun() }}>
                <div className='form-items'>
                    <div>
                        <h4 className="login-title">LOGIN</h4>
                    </div>
                    <div>
                        <input  name='name' onChange={(e) => { setName(e.target.value) }}  type="text" placeholder='UserName'/>
                    </div>
                    <div>
                        <input  name='password' onChange={(e) => { setPass(e.target.value) }}  type="password" placeholder='Password' />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </form>  
        </div>
            
    )
}
export default Login;
