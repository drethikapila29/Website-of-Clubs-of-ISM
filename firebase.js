import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyAnn-BwyxM5XIIgnvfeOz-mEdQp9Z3HwDk",
    authDomain: "authentication-3a785.firebaseapp.com",
    databaseURL: "https://authentication-3a785-default-rtdb.firebaseio.com",
    projectId: "authentication-3a785",
    storageBucket: "authentication-3a785.appspot.com",
    messagingSenderId: "1034199033942",
    appId: "1:1034199033942:web:a48d82b18ab34305e3f3f7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app)