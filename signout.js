import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const auth = getAuth();



function signout(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('signed out successfully')
      }).catch((error) => {
        // An error happened.
        console.log('error')
      });
}

document.getElementById("signoutbtn").addEventListener('click', signout);


onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email)
      const uid = user.uid;
      
      // ...
    } else {
      console.log("not signed in")
      window.location.href = "http://127.0.0.1:5500/login.html"
    }
  });
