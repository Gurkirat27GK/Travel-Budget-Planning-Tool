import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getDatabase } from 'firebase/database';
// Add to firebase.js
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
export const auth = getAuth();
export const provider = new GoogleAuthProvider();


const firebaseConfig = {
    apiKey: "AIzaSyBNBwG1GdHJOG_Fegu_VQ623A6VCda4tCc",
    authDomain: "travel-budget-planning-tool.firebaseapp.com",
    databaseURL: "https://travel-budget-planning-tool-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "travel-budget-planning-tool",
    storageBucket: "travel-budget-planning-tool.firebasestorage.app",
    messagingSenderId: "664684698073",
    appId: "1:664684698073:web:266ab8108cfa1cfcf521c8"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
