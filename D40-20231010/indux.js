function show(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success:function(res){
            console.log("response",res)
             let datalist="";
            for(i=0;i<res.length;i++){
                datalist=datalist+`<tr>
                <td>'${res[i].id}'</td>
                <td>'${res[i].userId}'</td>
                <td><button type="button" onclick="details('${res[i].id}')">'${res[i].title}'</button></td>
                <td>'${res[i].body}'</td>
                </tr>`
            }
            $("#table_data").html(datalist);
        },
        error:function(err){
            console.log("error",err)
        }
    });
    show_post()
}


function details(id){
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data:{},
        success:function(result){
            console.log(result)
        },
        error:function(err){
            console.log("error",err)
        }
    });
}

function show_post(){
    $.ajax({
        type:"post",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{
            userId:20,
            title:"Agaram",
            body:"welcome to Agaram software Academy"
        },
        success:function(response){
            console.log(response)
        },
        error:function(err){
            console.log(err)
        }
    });
}