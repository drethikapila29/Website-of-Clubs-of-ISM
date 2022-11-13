


  //const database =getDatabase(app);
  const auth = firebase.auth();


function signUp(){

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;


const promise=auth.createUserWithEmailAndPassword(email.value,password.value).then(function()  {
    var id=firebase.auth().currentUser.uid;
 // Signed in 
  const user = userCredential.user;

  set(ref(database, 'users/' + user.uid),{
     
      email: email
  });
  alert('user created!');
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  alert(errorMessage);
// ..
});

};