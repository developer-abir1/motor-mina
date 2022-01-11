
import firebaseConfig from './firebase.config';
import { initializeApp } from "firebase/app";

const IntialFirebase = () => {
    return initializeApp(firebaseConfig);
};

export default IntialFirebase;