import React, { useState } from 'react'
const Login = () => {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    function fun() {
        const data = {
            name: name,
            password: pass
        }
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
                },
                )
                    .then(response => {
                        console.log(response)
                        if (response.ok) {
                            console.log("Heloo from the other side")
                            // Redirect if response status is 200
                            window.location.href = '/';
                        } else {
                            // Handle other status codes or errors
                            console.log('Error:', response.statusText);
                        }
                    })
                // console.log(res);

            }
            catch (err) { }
        }
    }


    return (
        <div >

            <div >
                <div>

                    <input name='name' onChange={(e) => { setName(e.target.value) }} type="text" placeholder='UserName' />

                </div>
                <div>
                    <input name='password' onChange={(e) => { setPass(e.target.value) }} type="password" placeholder='Password' />
                </div>
                <button onClick={() => { fun() }} > Submit </button>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Login
