resumedetails={};
temp_list={};

function change(e,p_key){
    if(p_key){
        if(resumedetails[p_key]){
            resumedetails[p_key]={...resumedetails[p_key]}
        }
        else{
            resumedetails[p_key]={}
        }
        resumedetails[p_key][e.name]=e.value
    }
    else{
        resumedetails[e.name]=e.value;
    }
    display();
}

function add(p_key,e_id){
    console.log(e_id)
    if(!resumedetails[p_key]){
        resumedetails[p_key]=[];
    }
        if(e_id){
            let value=document.getElementById(e_id).value;
            if(value==""){
                alert("enter valid value")
            }
            else{
                resumedetails[p_key].push(document.getElementById(e_id).value)
                let list=resumedetails[p_key]
                showlist(list,p_key)
                document.getElementById(e_id).value=""
                display()
            }
            
        }
        else{
            resumedetails[p_key].push(temp_list)
            let obj_list=resumedetails[p_key]
            refresh(obj_list,p_key)
            let keys=Object.keys(temp_list)
            for(i=0;i<keys.length;i++){
                let val=keys[i];
                document.getElementById(val).value=""
            }
            temp_list={};
        }
    }


function showlist(set,data){
    setlist=""
    for(i=0;i<set.length;i++){
        setlist= setlist +`<span class="btn btn-primary">
            ${set[i]}
            <span type="button" onclick="delt('${set[i]}','${data}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg>
            </span>
            </span>`
    }
    document.getElementById(data).innerHTML=setlist;
}

function delt(key,p_key){
    let skill_s=resumedetails[p_key];
    let wanted=[]
    for(i=0;i<skill_s.length;i++)
        {
        if(skill_s[i]!=key)
        {
            console.log(skill_s[i])
            wanted.push(skill_s[i])
        }
        }
resumedetails[p_key]=wanted
console.log(resumedetails[p_key])
display()
showlist(resumedetails[p_key],p_key)

}

function refresh( data,fdata){
    // let edu_details=resumedetails[fdata]
    let displaydata=""
      for(i=0;i<data.length;i++){
        

        console.log(data)
        console.log(data[i])

        // console.log(data[i][key])
        let dis_list=""
        for(let key in data[i]){
         console.log(data[i][key])
        //     console.log(edu_details[i][key])
        // // console.log([edu_details[i][key]])
         dis_list=dis_list+`
         <td>${data[i][key]}</td>`
        //          `
    }
    displaydata=displaydata+`<tr>`+dis_list+`<td><button type="button" onclick="remove('${i}','${fdata}')">&#128465</button></td>`+`</tr>`
      
                 
    }
    document.getElementById(fdata).innerHTML=displaydata;
    display()
    }


function remove(key,p_key){
    console.log(key)
    console.log(p_key)
    let obj=resumedetails[p_key];
    bal_data=[];
    for(i=0;i<obj.length;i++){
        if(i!=key){
            bal_data.push(obj[i])
        }
    }
    resumedetails[p_key]=bal_data;
    display();
    refresh(resumedetails[p_key],p_key)
}


function arreydata(ele){
    temp_list[ele.name]=ele.value
}

function display(){
    document.getElementById("data").innerHTML=JSON.stringify(resumedetails, undefined, 2);
}

// function log(){
//     window.location="list.html"
//     getuser()
// }

function create(){

    let username=$("#name").val()

    // console.log(resumedetails)

    $.ajax({
        type:"post",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "create_resume",
            user : "Abisha",
            resume:resumedetails
            
        },
        success:function(res){
            console.log("response",res)
            window.location="list.html"
            
        },
        error:function(err){
            console.log("error",err)
        }
});
getuser()
}

function getuser(){
    let username=$("#name").val()

    $.ajax({
        type:"get",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "get_user_resume",
            user : "Abisha",
        },
        success:function(res){
            let result=JSON.parse(res)

            let datalist="";
            for(i=0;i<result.data.length;i++){
            
                datalist=datalist+`<tr>
                <td>'${result.data[i].id}'</td>
                <td>'${result.data[i].user}'</td>
                <td><button type="button" class="btn btn-success" onclick="del('${result.data[i].id}')">delet</button></td>
                <td><a href="user.html?id=${result.data[i].id}">link1</a></td>
                <td><a href="template.html?id=${result.data[i].id}">link2</a></td>
                <td><a href="temp1.html?id=${result.data[i].id}">link3</a></td>
                <td><a href="temp2.html?id=${result.data[i].id}">link4</a></td>
                </tr>`
            }
            $("#table_data").html(datalist);
        },
        error:function(err){
            console.log("error",err)
        }
});

}

function del(id){
    
    $.ajax({
        type:"get",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "delete_user_resume",
            user : "Abisha",
            id:id
        },
        success:function(res){
            console.log("response",res)
            getuser()
        },
        error:function(err){
            console.log("error",err)
        }
});

}

function userdata(id){
    $.ajax({
        type:"get",
        url:" http://agaram.academy/api/action.php",
        data:{
            request : "get_resume_by_id",
            user : "Abisha",
            id:id
        },
        success:function(res){
            console.log("response",res)
            l_data=JSON.parse(res);
            console.log(l_data)
            let details=l_data.data;
             let udetail=JSON.parse(details.data)
             console.log(udetail);
             $("#u_name").html(udetail.name);
             $("#mail").html(udetail.email);
             $("#no").html(udetail.phone);
             $("#add").html(udetail.address);
             $("#object").html(udetail.obj);
             $("#dec").html(udetail.declaration);
             $("#us_name").html(udetail.personal_info.name);
             $("#f_name").html(udetail.personal_info.fathername);
             $("#date").html(udetail.personal_info.dob);
             $("#nation").html(udetail.personal_info.nationality);
             $("#status").html(udetail.personal_info.marital_status);
             $("#u_age").html(udetail.personal_info.age);
             $("#sex").html(udetail.personal_info.gender);
             $("#reli").html(udetail.personal_info.religion);
             let skills=udetail.skill;
             console.log(skills)
             skil=""
             for(var i=0;i<skills.length;i++){
                skil=skil+`<li>${skills[i]}</li>`
                
             }
             $("#skills").html(skil);

             let project=udetail.project;
             pro="";
             for(var i=0;i<project.length;i++){
                pro=pro+`<li>${project[i]}</li>`
             }
             $("#projects").html(pro);


             let lang_known=udetail.language;
             console.log(lang_known)
             lang=""
                for(var i=0;i<lang_known.length;i++){
                    lang=lang+`<p>${lang_known[i]}</p>`
                }
                $("#lan").html(lang)
             

             let educat=udetail.Education;
             console.log(educat)
             edu_list=""
             for(var i=0;i<educat.length;i++){
                console.log(educat[i].edu_name)
                // edu_list=edu_list+`<tr>
                // <td>'${educat[i].edu_name}'<td>
                // <td>'${educat[i].edu_level}'<td>
                // <td>'${educat[i].edu_year}'<td>
                // <td>'${educat[i].edu_percentage}'<td>
                // </tr>`

                edu_list=edu_list+`<tr>
                <th>${educat[i].edu_year}</th>
                <td>${educat[i].edu_name}<br>${educat[i].edu_level},<a style=" color:crimson">(Percentage:${educat[i].edu_percentage})</a></td>
                </tr>`
             }
             $("#edu").html(edu_list)

             let expre=udetail.Experience;
             expre_list=""
             for(var i=0;i<expre.length;i++){
                expre_list=expre_list+`<tr>
                <td>${expre[i].comp_name}</td>
                <td>${expre[i].experience}<br/>
                ${expre[i].role}</td>
                </tr>`
             }
             $("#exp").html(expre_list)


            // name=details.data.name;
            // console.log(name)
        },
        error:function(err){
            console.log("error",err)
        }
});
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function download() {
    alert('ok')
const page = document.getElementById('ful');
var opt = {
margin:
1,
filename: 'Demopdf.pdf',
image:
{ type: 'jpeg', quality: 0.98 },
html2canvas:
{ scale: 2 },
jsPDF:
{ unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}