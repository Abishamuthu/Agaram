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
var auth=firebase.auth();


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
    var Name=document.getElementById("name").value;
  //   
  firebase.auth().signInWithEmailAndPassword(Email, Pass)
  .then((result) => {
    // Signed in
    alert("you are login sucessful")
    const user=firebase.auth().currentUser;
    console.log(user);
    var uid=user.uid;
    console.log(uid)
    let details={
      user_name:Name,
      user_email:Email,
      loggedin:true
    }
    console.log(details)
    firebase.database().ref("Users/"+uid).set(details);
     window.location="wel.html"
    
    // ...
  })
  .catch((error) => {
    alert("register first")
    console.log(error.code);
    console.log(error.message)
  });
}
function checklogin(){
  firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      var uid=user.uid;
      firebase.database().ref(`Users/${uid}`).once('value').then(function(snapshot)
      {
        var data=snapshot.val();
        if (data.loggedin==true){
          document.getElementById("para").innerHTML=`<h2>Welcome ${data.user_name}</h2>`;
          display();
        }
      })
    }
  }
    )
}

function display(){
            // e.preventDefault();
           firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              var uid=user.uid; 
  let list=firebase.database().ref(`Users/${uid}`)
    list.once('value').then(function(snapshot) {
      let data = snapshot.val();
      let htmldata="";
        htmldata=htmldata+`<tr>
          <td>${data.user_name}</td>
          <td>${data.user_email}</td>
          <td><button type="button" onclick="update('${data.user_email}')">&#9998</button>
          <td><button type="button" onclick="det('${data.user_email}')">&#128465</button></td>
          </tr>`

      document.getElementById("list_table").innerHTML=htmldata;
        }
  )}
})}

function logout(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var uid=user.uid;
      firebase.database().ref(`Users/${uid}`).once('value')
      .then(function(snapshot){
        var data=snapshot.val();
        if(data.loggedin==true){
          let log={
            loggedin:false
          }
          firebase.database().ref("Users/"+uid).set(log);
          window.location="logedin.html"
        }
    })
  }})
}

function secure(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var uid=user.uid;
      firebase.database().ref(`Users/${uid}`).once('value')
      .then(function(snapshot){
        var data=snapshot.val();
        console.log(data)
        if(data.loggedin==false){
          window.location="logedin.html"
        }
      })

    }
  })
}

  function select(){
    window.location="logedin.html"
  }

function register(){
    window.location="register.html"
}

