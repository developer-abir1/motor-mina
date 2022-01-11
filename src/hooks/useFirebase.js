import React from 'react';
import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import { useState } from 'react';



const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)





    const googleProdvider = new GoogleAuthProvider();

    const auth = getAuth();
    const googleSingIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProdvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                const user = result.user;
                setUser(user)
                setError("")
                setSuccess(true)
                setIsLoading(false)
                // ...
            }).catch((error) => {

                setError(error.message);
                setSuccess(false)


            });
    }


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
        logout
    }
};

export default useFirebase;