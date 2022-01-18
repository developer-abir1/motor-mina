import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signOut, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import IntialFirebase from '../page/Login/FirebaseManeger/IntialFirebase';




IntialFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)





    const googleProdvider = new GoogleAuthProvider();

    const auth = getAuth();

    const googleSingIn = (navigate, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProdvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                const user = result.user;
                setUser(user)
                setError("")
                setSuccess(true)

                const from = location.state?.from?.pathname || "/";

                navigate(from)
                // ...
            }).catch((error) => {

                setError(error.message);
                setSuccess(false)


            }).finally(() => setIsLoading(false))

    }



    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])

    // sing out mathod
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    return {
        googleSingIn,
        logout,
        user,
        isLoading,
        error,
        success

    }
};

export default useFirebase;