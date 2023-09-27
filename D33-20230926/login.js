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
  document.getElementById("login").addEventListener("submit",loginForm)
  function loginForm(e){
      e.preventDefault();
      var Email=document.getElementById("email").value;
      var Pass=document.getElementById("password").value;
    //   
    let list=firebase.database().ref("Users")
        list.once('value').then(function(snapshot) {
                let data = snapshot.val();
                for(i=0;i<data.length;i++){
                    if((data[i].email== Email)&&(data[i].password==Pass)){
                        alert("login successfully");
                        localStorage.setItem("loggedin",true);
                        localStorage.setItem("loggname",data[i].name);
                        window.location="wel.html"
                    }
                    else{
                        alert("sorry!register details are incorrect")
                    }
                }
               
            })
     }