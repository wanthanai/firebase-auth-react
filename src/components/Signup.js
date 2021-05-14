import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
// Components
import AlertSucc from './AlertSucc'
import AlertErr from './AlertErr'


//! Styled 
const Card = styled.div`
    color: ${({theme}) => theme.colors.font};
    width: 400px;

    .card-body {
        width: 100%;
        border: 1px solid #2e2e2e;
        border-radius: 5px;
        padding: 1rem;
        margin-bottom: 0.5rem;
    }

    .text-header {
        text-align: center;
        margin-bottom: 1rem;
    }

    .form-group {
        margin-bottom: .5rem;
    }

    .form-label {
        display: block;
    }

    .form-control {
        padding: 6px 12px;
        height: 38px;
        width: 100%;
        border-radius: 5px;
        background: ${({theme}) => theme.colors.background};
        border: 1px solid #3d3d3d;
        color: ${({theme}) => theme.colors.font};
        outline: none;
    }

    .form-submit {
        width: 100%;
        padding: 6px 12px;
        height: 36px;
        border-radius: 5px;
        border: none;
        outline: none;
        cursor: pointer;
        background: rgb(2, 80, 196);
        color: #fff;
    }
    .form-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }


    .text-more {
        text-align: center;
    }
`

//! React functional component
function Signup() {
    //! State
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cf_password, setCf_password] = useState('');

    const { signup } = useAuth();


    //! Function 
    const handleSubmit = async(e) => {
        e.preventDefault();

        if(password !== cf_password) {
            setError('Password do not match.');
            setSuccess('');
            return;
        }

        try{
            setError('');
            setLoading(true);
            await signup(email, password);
            setSuccess('Signed completed');
            // clear input
            setEmail('');
            setPassword('');
            setCf_password('');
        } catch(err){
            setSuccess('');
            if(err.code === 'auth/email-already-in-use') {
                setError('email already exists.');
            }
        }

        setLoading(false);        
    }

    // Handle Input
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleInputCf_password = (e) => {
        setCf_password(e.target.value)
    }
    

    //! Return component
    return (
        <Card>
            {/* card body */}
            <div className="card-body">
                {/* text header */}
                <h2 className='text-header'>Sign Up</h2>

                {/* Alert */}
                {success && <AlertSucc message={success} />}
                {error && <AlertErr message={error} />}

                {/* form */}
                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input onChange={handleInputEmail} value={email} type="email" name="email" className="form-control"/>
                    </div>
                    {/* password */}
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input onChange={handleInputPassword} value={password} type="password" name="password" className="form-control"/>
                    </div>
                    {/* confirm password */}
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input onChange={handleInputCf_password} value={cf_password} type="password" name="cf_password" className="form-control"/>
                    </div>
                    {/* button submit */}
                    <button disabled={loading} type="submit" className="form-submit">Sign Up</button>
                </form>
            </div>
            {/* text more */}
            <div className="text-more">
                Already have an account? Log In
            </div>
        </Card>
    )
}


export default Signup
