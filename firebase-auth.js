import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDR2L93KHjwDmrmVzb6Wnm9T_e3eEEJRc8",
  authDomain: "portal-login-664ee.firebaseapp.com",
  projectId: "portal-login-664ee",
  storageBucket: "portal-login-664ee.firebasestorage.app",
  messagingSenderId: "327074408916",
  appId: "1:327074408916:web:e9dd3d01e1ab14d804ce41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            document.getElementById("logout-btn").style.display = "block";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Logged out!");
        document.getElementById("logout-btn").style.display = "none";
    });
});
