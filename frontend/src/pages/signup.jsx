import React, { useState } from 'react'
const Signup = () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [mail, setMail] = useState('');

    function fun() {
        if (pass === pass2) {
            const data = {
                name: name,
                password: pass,
                mail: mail
            }

            fun2()
            async function fun2() {
                const res = await fetch('http://localhost:4000/register',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        mode: 'cors',
                        body: JSON.stringify(data)
                    })
                    .then(res => console.log(res));
            }
        }
    }

    return (
        <div >
            <div >
                <br />
                <input type="text" placeholder='Enter name' name='name' onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='Enter Email' name='mail' onChange={(e) => { setMail(e.target.value) }} />
                <div >
                    <input type="text" placeholder="Enter password" name='password' onChange={(e) => { setPass(e.target.value) }} />
                    <input type="text" placeholder="Confirm password" name='confpass' onChange={(e) => { setPass2(e.target.value) }} />
                </div>
                <br />
                <button onClick={() => { fun() }}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Signup

// http://localhost:3000/home