import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const UserContext = createContext()

const AuthProvider = ({ children }) => {
    const allContext = useFirebase()

    return (
        <UserContext.Provider value={allContext}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;