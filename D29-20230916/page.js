
function select(){
    e.preventDefault();
    window.location="login.html";}
 function login(){ 
    let user_email=document.getElementById("email").value
    let user_pass=document.getElementById("password").value
    let list=localStorage.getItem("user_name");
    let user_list=JSON.parse(list);
    for(var i=0;i<user_list.length;i++){
        let user=user_list[i].username;
     if((user_list[i].email==user_email) && (user_list[i].password==user_pass)){
        localStorage.setItem("login",true);
        localStorage.setItem("u_name",user);
        window.location="home.html";
   
    }
    }
   }

function logout(){
    localStorage.removeItem("login");
    window.location="login.html";
}

function register(){
    window.location="reg.html";
    let log_email=document.getElementById("mail").value;
    let log_pass=document.getElementById("pass").value;
    let log_name=document.getElementById("n").value;
    let local_data=[]
     if(localStorage.getItem("user_name")){
          local_data=JSON.parse(localStorage.getItem("user_name"))
     }
     local_data.push({
         email:log_email,
         password:log_pass,
         username:log_name
     })
     let parse_data=JSON.stringify(local_data);
     localStorage.setItem("user_name",parse_data);
     }

function users(){

    let data_list=JSON.parse(localStorage.getItem("user_name"));
       
   
    let htmldata="";
    for(let i=0;i<data_list.length;i++){
    htmldata=htmldata+`<tr>
    <td>${data_list[i].username}</td>
    <td>${data_list[i].email}</td>
    <td><button type="button" onclick="update('${data_list[i].email}')">&#9998</button>
    <td><button type="button" onclick="det('${data_list[i].email}')">&#128465</button></td>
    </tr>`
}
document.getElementById("list_table").innerHTML=htmldata;
} 

function det(mail){
    let data=JSON.parse(localStorage.getItem("user_name"));
    let datalist=[];
    for(let i=0;i<data.length;i++){
        if(data[i].email!=mail){
            datalist.push(data[i])
        }
    }
    localStorage.setItem("user_name",JSON.stringify(datalist));
    users()
}

function update(e_mail){

    let row=JSON.parse(localStorage.getItem("user_name"));
    for(let i=0;i<row.length;i++){
        if(row[i].email==e_mail){
            let namecell=row[i].username;
            let emailcell=row[i].email;
            let passcell=row[i].password;
            let new_name =prompt("Enter the updated name:",namecell.innerHTML);
            let up_email =prompt("Enter the updated email:",emailcell.innerHTML);
            let up_pass=prompt("Enter the updated password:",passcell.innerHTML);

            namecell.innerHTML=new_name;
            emailcell.innerHTML=up_email;
            passcell.innerHTML=up_pass;
        
        let up_data=[];
        if(localStorage.getItem("user_name")){
            up_data=JSON.parse(localStorage.getItem("user_name"));
        }

        up_data.push({
            username:new_name,
            email:up_email,
            password:up_pass
        })
        let newdata=JSON.stringify(up_data);
        localStorage.setItem("user_name",newdata);
        det(e_mail)
    }}
}

function checklogin(){
    console.log("hi")
    if(localStorage.getItem("login")){
        document.getElementById("para").innerHTML=localStorage.getItem("u_name")

    }
}

function loginonly(){
   
    if(!localStorage.getItem("login")){
        
        window.location="login.html"  
    }
}
