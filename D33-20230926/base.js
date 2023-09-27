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

  const auth = getAuth(app);

 firebase.database().ref("Users");
//  document.getElementById("form").addEventListener("submit",Register)
 function Register(){
    // e.preventDefault();
    var log_email=document.getElementById("mail").value;
    var log_pass=document.getElementById("pass").value;
    var log_name=document.getElementById("n").value;
    // console.log(log_name)
    let reg_data = {
                name :log_name,
                email : log_email,
                password :log_pass,
               
        }
        let list=firebase.database().ref("Users")
        list.once('value').then(function(snapshot) {
                let data = snapshot.val();
                console.log(data);
                if(data){
                    data.push(reg_data);
                    list.set(data);
                }
                else{
                    firebase.database().ref(`Users/${0}`).set(reg_data);
                }
            })

// console.log("hi")
}

function loginForm(){
    // e.preventDefault();
    var Email=document.getElementById("email").value;
    var Pass=document.getElementById("password").value;
  //   
  let list=firebase.database().ref("Users")
      list.once('value').then(function(snapshot) {
              let data = snapshot.val();
              let user=false;
              for(i=0;i<data.length;i++){
                  if((data[i].email== Email)&&(data[i].password==Pass)){
                      alert("login successfully");
                      user=true;
                      localStorage.setItem("loggedin",true);
                      localStorage.setItem("loggname",data[i].name);
                      window.location="wel.html"
                      
                  }
                  
              }
             if(user==false){
                alert("sorry! Register first");
                window.location="register.html"
             }
             
          })
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
   }

   function checklogin(){
    console.log("hi")
    if(localStorage.getItem("loggedin")){
        document.getElementById("para").innerHTML=localStorage.getItem("loggname");
        display()
    }
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
function update(e_mail){
    let list=firebase.database().ref("Users")
        list.once('value').then(function(snapshot) {
                let data = snapshot.val();
    
    for(let i=0;i<data.length;i++){
        if(data[i].email==e_mail){
            let namecell=data[i].name;
            let emailcell=data[i].email;
            let passcell=data[i].password;
            let new_name =prompt("Enter the updated name:",namecell.innerHTML);
            let up_email =prompt("Enter the updated email:",emailcell.innerHTML);
            let up_pass=prompt("Enter the updated password:",passcell.innerHTML);
            
            namecell.innerHTML=new_name;
            emailcell.innerHTML=up_email;
            passcell.innerHTML=up_pass;
            let up_data={
                name:new_name,
                email:up_email,
                password:up_pass
            }
            console.log(up_data)
            let list=firebase.database().ref("Users")
            list.once('value').then(function(snapshot) {
                let data = snapshot.val(); 
            
            if(data){
                data.push(up_data);
                firebase.database().ref("Users").set(data);
                }
            
                
            else{
                firebase.database().ref(`Users/${0}`).set(up_data)
            }
            det(e_mail)
            })}}
            
        })}

function det(mail){
    let list=firebase.database().ref("Users")
        list.once('value').then(function(snapshot) {
                let data = snapshot.val();
    let datalist=[];
    for(let i=0;i<data.length;i++){
        if(data[i].email!=mail){
            datalist.push(data[i])
        }
    }
    list.set(datalist)
    
    display()
})}

function logout(){
    localStorage.removeItem("loggedin");
    window.location="logedin.html";
}

function loginonly(){
   
    if(!localStorage.getItem("loggedin")){
        
        window.location="logedin.html"  
    }
}


  function select(){
    window.location="logedin.html"
  }

function register(){
    window.location="register.html"
}

//   function register(){
// document.getElementById("form").addEventListener("submit",Register)
// function Register(e){
//     e.preventDefault();

// console.log("hi")}
//     window.location="register.html"
//     var log_email=document.getElementById("mail").value;
//     var log_pass=document.getElementById("pass").value;
//     var log_name=document.getElementById("n").value;
//     console.log(log_name)

//     let reg_data = {
//         name :log_name,
//         email : log_email,
//         password :log_pass,
       
// }
// let list=firebase.database().ref("Users")
// list.once('value').then(function(snapshot) {
//         let data = snapshot.val();
//         console.log(data);
//         if(data){
//             data.push(reg_data);
//             list.set(data);
//         }
//         else{
//             firebase.database().ref(`Users/${0}`).set(reg_data);
//         }
//     })
//     let data_list={
//         username:log_name,
//         email:log_email,
//         password:log_pass
//     }
    
//     list.once('value')
//     .then(function(snapshot){
//         let data=snapshot.val();
//         if(data){
//             data.push(data_list);
//             list.set(data);
//         }
//         else{
//             db.ref(`Users/${0}`).set(data_list);
//         }
//     })
//     console.log(data_list)
//   }

//   function login(){
//     let user_email=document.getElementById("email").value
//     let user_pass=document.getElementById("password").value

//     list.once('value')
//     .then(function(snapshot){
//         let data=snapshot.val();
//         for(var i=0;i<data.length;i++)
//         if ((data[i].email==user_email) && (data[i].password==user_pass))
//         {
//             alert("login successfully")
//             localStorage.setItem("loggedin",true)
//             localStorage.setItem("logname",data[i].username)
//             window.location="home.html";
//             break;
//         }
//         else{
//             alert("Please Register First");                
//         }
//     })
// }