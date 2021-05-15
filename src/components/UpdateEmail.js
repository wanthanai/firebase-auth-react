import React from 'react'
import styled from 'styled-components'


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
    }

    .text-header:nth-child(2) {
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

`


function updateEmail() {
    return (
        <Card>
            {/* card body */}
            <div className="card-body">

                {/* text header */}
                <h1 className="text-header">Update Profile</h1>

                {/* alert */}
                {error && <AlertErr message={error} />}

                {/* text header */}
                <h3 className="text-header">Update Email</h3>
                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input id="inputEmail" className="form-control" type="email" onChange={handleInputEmail} value={email} />
                    </div>

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

                    {/* text more */}
                    <p className="text-more">Cannot update at the same time</p>

                    <button disabled={loading} className="form-submit">Update Profile</button>
                </form>
            </div>
        </Card>
    )
}

export default updateEmail
