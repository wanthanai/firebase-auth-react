import React, { useState } from 'react'
// styled
import styled from 'styled-components'
// Context
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
// component
import AlertErr from './AlertErr'
import AlertSucc from './AlertSucc'


//! Styled
const Card = styled.div`
    color: ${({theme}) => theme.colors.font};
    width: 400px;
    position: relative;

    .card-body {
        width: 100%;
        border: 1px solid #2e2e2e;
        border-radius: 5px;
        padding: 1rem;
        margin-bottom: 0.5rem;
    }

    .text-header {
        text-align: center;
    }

    .text-header:nth-child(2), 
    .text-header:nth-of-type(1) {
        margin-top: 2rem;
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
        margin-top: .5rem;
    }
    .form-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .text-more {
        text-align: center;
        color: #2980b9;
    }

    .logout-wrapper{
        width: 100%;
        text-align: center;
    }
    .logout-button {
        padding: 2px 5px;
        background: rgb(2, 80, 196, .4);
        color: #fff;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
    }
`

//! React functional component
function UpdateProfile() {
    //! Context
    const { currentUser, updateEmail, updatePassword } = useAuth();

    //! History
    const history = useHistory();

    //! State
    // input
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState('');
    const [cf_password, setCf_password] = useState('');
    // error
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    // success 
    const [successEmail, setSuccessEmail] = useState('');
    const [successPassword, setSuccessPassword] = useState('');
    // loading
    const [loading, setLoading] = useState(false);


    //! Function
    // input handling
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleInputCf_password = (e) => {
        setCf_password(e.target.value)
    }

    // Update Email & Password handler
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true)
        if(email === currentUser.email) {
            setSuccessEmail('');
            setErrorEmail('You are currently using this email.')
            setLoading(false)
            return;
        } else {
            updateEmail(email);
            setSuccessEmail('Update email was successful.');
            setErrorEmail('');
            setLoading(false);
        }
    }
    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        setLoading(true)
    }


    //! Return Component
    return (
        <Card>
            {/* card body */}
            <div className="card-body">

                {/* text header */}
                <h1 className="text-header">Update Profile</h1>

                {/* text header */}
                <h3 className="text-header">Update Email</h3>

                {/* alert */}
                {errorEmail && <AlertErr message={errorEmail}/>}
                {successEmail && <AlertSucc message={successEmail}/>}

                {/* form update email */}
                <form onSubmit={handleEmailSubmit}>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input id="inputEmail" className="form-control" type="email" onChange={handleInputEmail} value={email} />
                        <button disabled={loading} className="form-submit">Update Email</button>
                    </div>
                </form>

                {/* form update password */}
                <form onSubmit={handlePasswordSubmit}>
                    {/* text header */}
                    <h3 className="text-header">Update Password</h3>

                    {/* password */}
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input id="inputPassword" className="form-control" type="password" onChange={handleInputPassword} value={password} />
                    </div>
                    {/* cf_password */}
                    <div className="form-group">
                        <label htmlFor="inputCf_password" className="form-label">Confirm Password</label>
                        <input id="inputCf_password" className="form-control" type="password" onChange={handleInputCf_password} value={cf_password} />
                    </div>

                    {/* submit */}
                    <button disabled={loading} className="form-submit">Update Password</button>
                </form>
            </div>

            <div className='logout-wrapper'>
                <button onClick={() => history.push('/')} className="logout-button">Home</button>
            </div>
        </Card>
    )
}

export default UpdateProfile
