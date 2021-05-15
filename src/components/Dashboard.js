import React,{ useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
//component
import AlertErr from './AlertErr'

//! styled
const Card = styled.div`
    color: ${({theme}) => theme.colors.font};
    width: 400px;
    text-align: center;

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

    .profile-email {
        margin-bottom: 1rem;
    }

    .update-profile {
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

    .profile-logout {
        cursor: pointer;
        color: #3498db;
        text-decoration: underline;
    }
`

//! React functional component 
function Dashboard() {
    //! Context
    const { currentUser, logout } = useAuth();
    
    //! History
    const history = useHistory();

    //! State
    const [ error, setError ] = useState('');

    //! Function
    const handleLogout = async() => {

        try{
            setError('');
            await logout();
            history.push('/login');
        }catch {
            setError('Failed to log out.');
        }
    }

    //! Return Component
    return (
        <Card>
            {/* card body */}
            <div className="card-body">
                {/* text header */}
                <h2 className="text-header">Profile</h2>

                {/* error handling */}
                {error && <AlertErr message={error} />}

                {/* email */}
                <p className="profile-email">{currentUser.email}</p>

                {/* update profile */}
                <Link to="/update-profile"><button className="update-profile">Update Profile</button></Link>
            </div>

            {/* logout */}
            <p onClick={handleLogout} className="profile-logout">Log Out</p>
        </Card>
    )
}

export default Dashboard
