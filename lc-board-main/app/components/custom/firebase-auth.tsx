import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// hide this before making public
const firebaseConfig = {
    apiKey: "AIzaSyBYd4shsXT3RuQJDBfys1XfNaL8u-0SJ1U",
    authDomain: "lc-board-80b39.firebaseapp.com",
    projectId: "lc-board-80b39",
    storageBucket: "lc-board-80b39.firebasestorage.app",
    messagingSenderId: "670371424034",
    appId: "1:670371424034:web:347238c02b3d13ab26a77b",
    measurementId: "G-DLD5YX0WZW"
};

// Initialize Firebease
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

