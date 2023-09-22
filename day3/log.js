// /*let details=[{
//     email:"abishamuthukrishnan@gmail.com",
//     password:"abisha123",
//     username:"Abisha"
// },
// {
//     email:"dhivya@gmail.com",
//     password:"dhivya123",
//     username:"Dhivya"
// }]


// localStorage.setItem("user_name",JSON.stringify(details));*/

function select(){
    document.getElementById("home").style.display="block";
    document.getElementById("out").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("front").style.display="none";
 }
function register(){
     document.getElementById("home").style.display="none";
     document.getElementById("out").style.display="none";
     document.getElementById("form").style.display="block";
     document.getElementById("front").style.display="none"
 }

 function login(){
     let user_email=document.getElementById("email").value
     let user_pass=document.getElementById("password").value
     let list=localStorage.getItem("user_name");
     //console.log(list)
     let user_list=JSON.parse(list);
     //console.log(user_list)
  
     for(var i=0;i<user_list.length;i++){
         let user=user_list[i].username;
      if(user_list[i].email==user_email && user_list[i].password==user_pass){
         document.getElementById("para").innerHTML=`Welcome ${user}`;
         document.getElementById("home").style.display="none";
         document.getElementById("out").style.display="block";
         document.getElementById("list").style.display="block";
         localStorage.setItem("logedin",true);
         localStorage.setItem("u_name",user);
         delt()
         } } 
 }
function logout(){
     document.getElementById("home").style.display="block";
     document.getElementById("out").style.display="none";
      
 }

 function checklogin(){
     if(localStorage.getItem("logedin")){
         document.getElementById("home").style.display="none";
         document.getElementById("out").style.display="block"
         user=localStorage.getItem("u_name")
         document.getElementById("para").innerHTML=`Welcome ${user}`;
     }
 }

function reg(){
     let log_email=document.getElementById("mail").value;
     let log_pass=document.getElementById("pass").value;
     let log_name=document.getElementById("n").value;
     /*let data=localStorage.getItem("user_name");
     let local_data=JSON.parse(data);*/
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
function delt(){
         document.getElementById("home").style.display="none";
         document.getElementById("out").style.display="block";
         document.getElementById("list").style.display="block";
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

function update(e_mail){
    // let row=button.parentNode.parentNode;
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
function det(mail){
    //alert(index);
   // alert(mail)
    let data=JSON.parse(localStorage.getItem("user_name"));
    let datalist=[];
    for(let i=0;i<data.length;i++){
        if(data[i].email!=mail){
            datalist.push(data[i])
        }
    }
    localStorage.setItem("user_name",JSON.stringify(datalist));
    delt()
}

