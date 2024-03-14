import React, { useState } from 'react'
import axios from 'axios';
import "./login.css";
import { login } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    function updateUser(event) {
        setUser((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:4000/login", user).then((res) => {
            console.log(res.data);
            if (res.data == 'Login Successful') {
                dispatch(login());
                navigate("/")
            }
            else if (res.data == 'Password Incorrect') {
                setUser((prev) => {
                    return {
                        ...prev,
                        password: ""
                    }
                });
            }
            else {
                setUser({
                    name: "",
                    password: ""
                });
            }
        })
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className='form-items'>
                    <div>
                        <h4 className="login-title">LOGIN</h4>
                    </div>
                    <div>
                        <input name='name' onChange={updateUser} type="text" placeholder='UserName' value={user.name} />
                    </div>
                    <div>
                        <input name='password' onChange={updateUser} type="password" placeholder='Password' value={user.password} />
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
