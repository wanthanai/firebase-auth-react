import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    // firebase methods
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logout = () => {
        return auth.signOut();
    }
    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    }
    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }
    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscriber;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout, 
        updateEmail,
        updatePassword, 
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
