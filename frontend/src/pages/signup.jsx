import React from 'react'

const Signup = () => {
    return (
        <div >
            <div >
                <form action="http://localhost:4000/register/"><br />
                    <input type="text" placeholder='Enter name' name='name' />
                    <input type="text" placeholder='Enter Email' name='mail' />
                    <div className='mb-2 flex justify-between '>
                        <input type="text" placeholder="Enter password" name='password' />
                        <input type="text" placeholder="Confirm password" name='confpass' />
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