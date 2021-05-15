import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
// Components
import AlertErr from './AlertErr'
// Router
import { Link, useHistory } from 'react-router-dom'
 

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

    .text-forgot {
        text-align: center;
        margin-top: .5rem;
    }

    .text-more {
        text-align: center;
    }
`

//! React functional component
function Signup() {
    //! State
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //! Context
    const { login } = useAuth();

    //! History
    const history = useHistory();

    //! Function 
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try{
            setError('');
            setLoading(true);
            await login(email, password);
            // clear input
            setEmail('');
            setPassword('');
            history.push('/');
        } catch(err){
            console.log(err);
            if(err.code === 'auth/user-not-found') {
                setError('This user dose not exist.');
            }
            if(err.code === 'auth/wrong-password') {
                setError('The password is invalid')
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
    

    //! Return component
    return (
        <Card>
            {/* card body */}
            <div className="card-body">
                {/* text header */}
                <h2 className='text-header'>Sign In</h2>
                
                {/* Alert */}
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
                    {/* button submit */}
                    <button disabled={loading} type="submit" className="form-submit">Sign In</button>
                </form>

                {/* forgot password */}
                <Link to="/forgot-password"><p className="text-forgot">Forgot Password?</p></Link>
            </div>
            {/* text more */}
            <div className="text-more">
                Need account? <Link to="/signup">Sign Up</Link>
            </div>
        </Card>
    )
}


export default Signup
