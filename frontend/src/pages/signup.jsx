import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        mail:"",
        password:"",
        confpass:""
    });

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:4000/register", user).then((res) => {
            console.log(res.data);
            navigate("/../login");
        })
    }

    function input(event) {
        setUser((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            };
        })
    }

    return (
        <div >
            <div >
                <form onSubmit={handleSubmit}><br />
                    <input type="text" placeholder='Enter name' name='name' onChange={input} />
                    <input type="text" placeholder='Enter Email' name='mail' onChange={input}/>
                    <div className='mb-2 flex justify-between '>
                        <input type="text" placeholder="Enter password" name='password' onChange={input}/>
                        <input type="text" placeholder="Confirm password" name='confpass' onChange={input}/>
                    </div>
                    <br />
                    <button type='submit' >SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Signup

// http://localhost:3000/home