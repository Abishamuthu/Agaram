resumedetails={};
temp_list={};

function change(e,p_key){
    if(p_key){
        if(resumedetails[p_key]){
            resumedetails[p_key]={...resumedetails[p_key]}
        }
        else{
            resumedetails[p_key]={};
        }
        resumedetails[p_key][e.name]=e.value;
    }
    else{
        resumedetails[e.name]=e.value;
    }
    display()
}

function add(p_key,e_id){
    if(!resumedetails[p_key]){
        resumedetails[p_key]=[];
    }
        if(e_id){
            let value=document.getElementById(e_id).value;
            if(value==""){
                alert("enter valid value")
            }
            else{
                resumedetails.push(document.getElementById(e_id).value)
                let list=resumedetails[p_key]
                showlist(list,p_key)
                document.getElementById(e_id).value="";
                display()
            }
        }
    else{
        resumedetails[p_key].push(temp_list)
        let list=Object.keys(temp_list)
        for(i=0;i<list.length;i++){
            keys=list[i];
            document.getElementById(keys).value=""
        }
        temp_list={};

    }
}

function showlist(set,data){
    setlist=""
    for(i=0;i<set.length;i++){
        setlist=setlist+`<span class="btn btn-primary">
        ${set[i]}
        <span type="button" onclick="delt('${set[i]}','${data}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`
    }
    document.getElementById(data).innerHTML=setlist
}

function delt(key,p_key){
    let skill_s=resumedetails[p_key]
    wanted=[]
    for(i=0;i<skill_s.length;i++){
        if(skill_s[i]!=key){
            wanted.push(skill_s[i])
        }
    }
    resumedetails[p_key]=wanted;
    display()
    showlist(resumedetails[p_key],p_key)
}

function display(){
    document.getElementById("data").innerHTML=JSON.stringify(resumedetails, undefined, 2)
}

function arreydata(ele){
    temp_list[ele.name]=ele.value;
}