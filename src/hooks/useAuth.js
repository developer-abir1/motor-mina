import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contextApi/AuthProvider';

const useAuth = () => {
    return useContext(UserContext)
};

export default useAuth;