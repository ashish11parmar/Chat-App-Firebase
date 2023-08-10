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







