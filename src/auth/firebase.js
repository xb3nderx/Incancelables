// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfeUkvo4H9JZvlwHEbgq49B_IOGTIFXeo",
  authDomain: "incan-auth.firebaseapp.com",
  projectId: "incan-auth",
  storageBucket: "incan-auth.firebasestorage.app",
  messagingSenderId: "623568480722",
  appId: "1:623568480722:web:c71820eacf3c4eaebd000b",
  measurementId: "G-FTDMKYXVQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export function crearUsuario(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        console.log("Credenciales", userCredential);
        console.log(user);
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        console.log(error.code, error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });    
}


