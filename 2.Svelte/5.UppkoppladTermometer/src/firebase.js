import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/performance'

var firebaseConfig = {
    apiKey: "AIzaSyC9n6yj-U6AyYY2GkI1_-blnzfzGs0j9N0",
    authDomain: "firstprojcomments.firebaseapp.com",
    databaseURL: "https://firstprojcomments.firebaseio.com",
    projectId: "firstprojcomments",
    storageBucket: "firstprojcomments.appspot.com",
    messagingSenderId: "626231795350",
    appId: "1:626231795350:web:d6a1eb66cc08c83c7cacb7",
    measurementId: "G-00LPZJ7FXK"
};

firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

export  {firebase};
export const db = firebase.database(); // database= rtdb, firestore= firestore