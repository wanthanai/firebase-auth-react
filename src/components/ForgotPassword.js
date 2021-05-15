import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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

    .form-group {

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
        margin-top: .7rem;
    }
    .form-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .link-more {
        color: #3498db;
        text-align: center;
        margin-top: .5rem;
    }

    .text-more {
        text-align: center;
    }
`

function ForgotPassword() {

    return (
        <Card>
            {/* card body */}
            <div className="card-body">
                {/* text header */}
                <h2 className="text-header">Reset Password</h2>

                <form>
                    {/* email */}
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="email" />
                        <button type="submit" className="form-submit">Reset Password</button>
                        {/* link more */}
                        <Link className="link-more" to="/login"><p className="link-more">Log In</p></Link>
                    </div>
                </form>
            </div>
            {/* text more */}
            <div className="text-more">
                <p>Need account? <Link className="link-more" to="/signup">Sign Up</Link></p>
            </div>
        </Card>
    )
}

export default ForgotPassword
