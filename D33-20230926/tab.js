const firebaseConfig = {
  apiKey: "AIzaSyC4QJQxGSyZzUfCxl69uCSW3EgKRrkIj_o",
  authDomain: "form-eb2db.firebaseapp.com",
  databaseURL:"https://form-eb2db-default-rtdb.firebaseio.com/",
  projectId: "form-eb2db",
  storageBucket: "form-eb2db.appspot.com",
  messagingSenderId: "133571362179",
  appId: "1:133571362179:web:2f17dd97db6112f0a14ab6"
};
firebase.initializeApp(firebaseConfig);

firebase.database().ref("Users");
 function Register(){
  let name=document.getElementById("n").value;
  let email=document.getElementById("mail").value;
  let password=document.getElementById("pass").value;
  console.log(email)
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    alert("you are registered successfully")
    console.log(result)
    // Signed in 

    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    // ..
  })}

  function loginForm(){
    // e.preventDefault();
    var Email=document.getElementById("email").value;
    var Pass=document.getElementById("password").value;
  //   
  firebase.auth().signInWithEmailAndPassword(Email, Pass)
  .then((result) => {
    // Signed in
    alert("you are login sucessful")
    window.location="wel.html"
    
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
  });
}

function display(){
            // e.preventDefault();
           
  let list=firebase.database().ref("Users")
    list.once('value').then(function(snapshot) {
      let data = snapshot.val();
      let htmldata="";
      for(let i=0;i<data.length;i++){
        htmldata=htmldata+`<tr>
          <td>${data[i].name}</td>
          <td>${data[i].email}</td>
          <td><button type="button" onclick="update('${data[i].email}')">&#9998</button>
          <td><button type="button" onclick="det('${data[i].email}')">&#128465</button></td>
          </tr>`
      }
      document.getElementById("list_table").innerHTML=htmldata;
        }
  )}

  function select(){
    window.location="logedin.html"
  }

function register(){
    window.location="register.html"
}

