// Firebase import library start

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"
import {getAuth, signInWithPopup, GoogleAuthProvider}  from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

// Firebase import library end


// Firebase config api and keys start

const firebaseConfig = {
  apiKey: "AIzaSyAl5Qn1CPrW50A3HBTLq1DbN25w7D9BM2Q",
  authDomain: "chatapp-10dc8.firebaseapp.com",
  projectId: "chatapp-10dc8",
  storageBucket: "chatapp-10dc8.appspot.com",
  messagingSenderId: "97253407161",
  appId: "1:97253407161:web:5281c0de61547a9ba81e68",
  measurementId: "G-5XVTRB2RBS"
};

// Firebase config api and keys end

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();
// Initialize Firebase


// Google Authentication start
const Google = document.getElementById("Google");
const provider = new GoogleAuthProvider();

Google.addEventListener('click', (e)=>{
    e.preventDefault();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    location.href = ("http://localhost:5500/chatView.html");
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    alert(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    alert(email)
    location.href = ("http://localhost:5500/index.html");
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});
// Google Authentication end