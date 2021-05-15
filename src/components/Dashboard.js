import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
    const { currentUser } = useAuth();
    
    return (
        <div>
            Dashboard Page   
            {currentUser.email}
        </div>
    )
}

export default Dashboard
