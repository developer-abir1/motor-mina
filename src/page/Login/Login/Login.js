import { Button } from 'bootstrap';
import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
const Login = () => {
    const { googleSingIn, isLoading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSingIn = () => {


        googleSingIn(navigate, location)
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: "center", height: "500px"
        }}>
            {isLoading ? <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> :
                < div class="card" style={{
                    width: "24rem"
                }}>
                    <img src="https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" class="card-img-top" alt="..." />
                    <div class="card-body" style={{ textAlign: 'center' }}>


                        <button onClick={handleGoogleSingIn} class="btn btn-primary">Sing In With Google</button>
                    </div>
                </div >



            }
        </div >
    );
};

export default Login;