/*var my_resume={name:"Abisha",
               email:"abishamuthukrishnan2003@gmail.com",
               mobileno:"8220085277",
               objective:" To succeed in an environment of growth and excellence and earn a job which provide me job satisfaction",
               softskills:["communication","Time management"],
               hardskills:["Microsoft office",],
               educational_qualification:[{level:"SSLC",institute_name:"Nirmala Matric hr.sec school",passed_year:2018,
                                          mark_percentage:91,place:"Ariyalur"},
                                         {level:"HSC",institute_name:"Nirmala Matric hr.sec school",passed_year:2020,
                                          mark_percentage:69,place:"Ariyalur"},
                                         {level:"BA",institute_name:"Holy cross college",passed_year:2023,
                                          mark_percentage:79,Place:"Nagercoil"},
                                          {level:"MA",institute_name:"Holy cross college",passed_year:2023,
                                          mark_percentage:79,Place:"Nagercoil"}],
               project:[],
               experience:[],
               hobbies:["Reading","Watering plants",],
               personal_details:{Father_name:"Muthukrishnan",
                                 Father_occupation:"Mason",
                                 Language_known:["Tamil","English"],
                                 DOB:"17/03/2003",
                                 Gender:"Female",
                                 Marital_Status:"Unmarried",
                                 Address:{"door_no":"35/177","street":"Amman kovil street","city":"Nagercoil"},
               Declaration:"I hereby declare that all the information given above are true to my knowledge"}
                }

function qualification(a){
    for(let i=a.length-1;i>=0;i--){
        console.log(a[i].level)
    }
}
qualification(my_resume.educational_qualification)
localStorage.setItem("name",true);
var x=localStorage.getItem("name");
console.log(typeof(x))


var list=['a','b','c'];
var stringlist=JSON.stringify(list);
localStorage.setItem("name",stringlist)
var array=localStorage.getItem("name");
var clist=JSON.parse(array);
console.log(clist[1]);


function qualification(a){
    edu=my_resume.educational_qualification;
    //console.log(edu)
    for(i=0;i<edu.length;i++){
        console.log(i+1,edu[i].level)
    }
}
qualification(my_resume)


my_resume={          
    projects:[{MiniProject:                                                             
            {Title:"Online Banking System",                                           
            frontEnd:["HTML","CSS","JAVAScript"],                                                
            BackEnd:["JAVA","mySQL"],
            Tools:["netBeam","github"]                                                       
            }}, 
            {MainProject:
            {Title:"Multi-Objective load balancing technique for resource management in cloud environment",
            frontEnd:["HTML","CSS","JAVAScript"],                                           
            BackEnd:["JAVA","mySQL"],                                                         
            Tools:["Cloud sim","Deeplearning",["github"]]} 
            }
    ]}

    my_resume.projects[0].MiniProject.frontEnd[1].det*/


let button=document.getElementById("add");
let todolist=document.getElementById("todolist");
let input=document.getElementById("input");


let todos=[];

button.addEventListener("click",()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para=document.createElement("p");
    para.innerText=todo;
    todolist.appendChild(para);

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })

    para.addEventListener('dbclick',()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index=todos.indexOf(todo)
    if(index >-1){
        todos.splice(index,1);
    }
}


