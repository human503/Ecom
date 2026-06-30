import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDivyBEUDLgY-sFdcEfzsqk4yaSGBJy5Nc",
    authDomain: "ecom-login-8a103.firebaseapp.com",
    projectId: "ecom-login-8a103",
    storageBucket: "ecom-login-8a103.firebasestorage.app",
    messagingSenderId: "796510017245",
    appId: "1:796510017245:web:dbf15d0b12f77f8a08ad34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait until HTML is loaded
document.addEventListener("DOMContentLoaded", () => {

    const submitButton = document.getElementById("loginBtn");
    console.log(submitButton);
    submitButton.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Button Clicked");

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please enter email and password.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                console.log(userCredential.user);

                alert("User registered successfully!");

            })

            .catch((error) => {

                console.log(error);

                alert(error.message);

            });

    });

});