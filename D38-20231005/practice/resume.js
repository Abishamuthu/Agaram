 let resumedetails={};
 let temp_data={}
function change(e,p_key){
    if(p_key){
        if(resumedetails[p_key]){
            resumedetails[p_key]={
            ...resumedetails[p_key]}
        }
        else{
            resumedetails[p_key]={}
            
        }
        resumedetails[p_key][e.name]=e.value;
       }
       else{
        resumedetails[e.name]=e.value;
       }
    display();
}

function add(p_key,e_id,skil){
    console.log(e_id)
    if(!resumedetails[p_key]){
        resumedetails[p_key]=[];
    }
            if(e_id){
            
                resumedetails[p_key].push(document.getElementById(e_id).value);
                document.getElementById(e_id).value=""
                mul_list(p_key,skil)
                }
    else{
         resumedetails[p_key].push(temp_data);
         let key_list=Object.keys(temp_data)
            console.log(key_list)
        for(i=0;i<key_list.length;i++){
            let each_key=key_list[i];
            console.log(each_key)
            document.getElementById(each_key).value=""
            table()
    }
         temp_data={}
         
         
         
        // if(temp_data){
        //     temp_data={...temp_data}
        // }
    }
     display()
    
}

function table(){
    let key_list=Object.keys(temp_data)
            console.log(key_list)
        // for(i=0;i<key_list.length;i++){
        //     let each_key=key_list[i];
        //     console.log(each_key)
            let table_data=""
            for(i=0;i<key_list.length;i++){
                console.log(key_list[i])
            }
            
    }

function mul_list(p_key,skil){
    data=[...resumedetails[p_key]]
    let mul_data=""
    for(i=0;i<data.length;i++){
        console.log(data[i])
        mul_data=mul_data+`${data[i]}`+`<button type="button" class="btn btn-primary close p-2" aria-label="Close" onclick="delt('${p_key}','${data[i]}','${skil}')">
        <span aria-hidden="true">&times;</span>
      </button>`
    
        console.log(mul_data)
    }
    document.getElementById(skil).innerHTML=mul_data;
    display()
}

function delt(p_key,key,skil){
    console.log(p_key)
    console.log(key)
    
     let data=[...resumedetails[p_key]]
    console.log(data)
        let data_list=[];
         for(i=0;i<data.length;i++){
            console.log(data[i])
              if(data[i]!=key){
                  data_list.push(data[i]);
                  console.log(data_list)
          }
    }
    resumedetails[p_key]=data_list
    display()
    mul_list(p_key,skil)
}

function display(){
    document.getElementById("data").innerHTML=JSON.stringify(resumedetails, undefined, 2);

}

function arreydata(e){
    temp_data[e.name]=e.value
    // console.log(temp_data)
    
}

function refresh(value){
    list_value=[]

}