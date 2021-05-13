import React from 'react'
import styled from 'styled-components'


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

    .text-more {
        text-align: center;
    }
`

function Signup() {
    return (
        <Card>
            <div className="card-body">
                <h2 className='text-header'>Sign Up</h2>
                <form>
                    {/* email */}
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="text" name="email" className="form-control"/>
                    </div>
                    {/* password */}
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control"/>
                    </div>
                    {/* confirm password */}
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" name="cf_password" className="form-control"/>
                    </div>
                    {/* button submit */}
                    <button type="submit" className="form-submit">Sign Up</button>
                </form>
            </div>
            <div className="text-more">
                Already have an account? Log In
            </div>
        </Card>
    )
}

export default Signup
