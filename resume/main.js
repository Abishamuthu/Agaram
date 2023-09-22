var a=5;
var b="Abisha";
var my_resume={name:"Abisha",
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
  /*my_resume.hardskills.push("html");
  my_resume.educationa_qualification[0].city="nagercoil";
  my_resume.personal_details.Age="20"
  console.log(my_resume)*/
function qualification(a){
    edu=my_resume.educational_qualification;
    console.log(edu)
    for(i=0;i<edu.length;i++){
        console.log(i+1,edu[i].level)
    }
}
qualification(my_resume)



let c=["sunday","Monday","Tuesday","Wednesday"];


//function
function getname() {
    console.log("Welcome");
}

getname()

function myname(a){
    console.log(a)
}

myname("Abisha")

person="Divya";
function name(b){
    console.log(b)
}

name(person)

//for
for(i=0;i<5;i++) {
    console.log(i)
}

for(var i=0;i>-10;i--){
    console.log(i)
}

let d=["sunday","Monday","Tuesday","Wednesday"];
            for(var i=0;i<d.length;i++)
            console.log(d[i])

details=[{"name":"Dhivya",
            "place":"Kottar",
            "Hobbies":["Reading","watering plants","scrolling internet"]},
           {"name":"Arun",
            "place":"Chathanvillai",
            "Hobbies":["Running","Kabadi","Gym"]},
           {"name":"Ashmitha",
            "place":"parakai",
            "Hobbies":["Drawing","Watering plants","Scrolling internet"]},
           {"name":"Evanjalin",
            "place":"Krishnankovil",
            "Hobbies":["Drawing","craft work","watering plants"]}]

            for(var i=0;i<details.length;i++){
                console.log(details[i].name)
                console.log(details[i].Hobbies[2])
            }

