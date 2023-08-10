import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider}  from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';


const firebaseConfig = {
  apiKey: "AIzaSyBhxPL3MBL-SLYVGQl63M6k_UEVfuwROOs",
  authDomain: "chat-app-e882d.firebaseapp.com",
  projectId: "chat-app-e882d",
  storageBucket: "chat-app-e882d.appspot.com",
  messagingSenderId: "621453985230",
  appId: "1:621453985230:web:cf6feba1e1ca77e665179f",
  measurementId: "G-DDP8M5JZSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();


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
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


})