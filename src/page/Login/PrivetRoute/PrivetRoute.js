import userEvent from '@testing-library/user-event';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useAuth()

    const location = useLocation()
    if (isLoading) {
        return <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    if (user.email) {

        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivetRoute;