// details={};

// function change(e){
//     details[e.name]=e.value;
//     // console.log(details)
// }
function select(){
   window.location="login.html" 
}

function register(){
    window.location="register.html"
}

function Register(){
    let Name=$("#name").val();
    let Email=$("#email").val();
    let Password=$("#password").val();
    let Aadhar_no=$("#aadhar").val();
    let Address=$("#address").val();
    let Phone_no=$("#phone").val();
    let City=$("#city").val();
    let Area=$("#area").val();
    let Pincode=$("#pin").val();
    $.ajax({
        type:"post",
        url:  "http://agaram.academy/api/action.php",
        data:{
            request : "create_candidate",
            "name" : Name,
            "email" : Email,
            "password" : Password,
            "aadhar" : Aadhar_no,
            "address" : Address,
            "phone":Phone_no,
            "city":City,
            "area":Area,
            "pin":Pincode,
            
        },
        success:function(res){
            console.log("response",res)
            
        },
        error:function(err){
            console.log("error",err)
        }
});
}

function login(){
    let Email=$("#mail").val();
    let Password=$("#pass").val();
    $.ajax({
        type:"post",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "candidate_login",
            "email" : Email,
            "password":Password
            
        },
        success:function(res){
            console.log("response",res)
            window.location="list.html"
            
        },
        error:function(err){
            console.log("error",err)
        }
});

}

function userlist(){
    $.ajax({
        type:"get",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "getAllMembers",
            
        },
        success:function(res){
            console.log("response",res)
            let result=JSON.parse(res)
            // console.log(result)
            let data=result.data
            console.log(data)
            data_list=""
            for(var i=0;i<data.length;i++){
                data_list=data_list+`<tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].aadhar}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].address}</td>
                <td>${data[i].city}</td>
                <td>${data[i].area}</td>
                <td>${data[i].pin}</td>
                </tr>`
            }
            $("#list_table").html(data_list)
        },
        error:function(err){
            console.log("error",err)
        }
});

}


