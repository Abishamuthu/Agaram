import { Button } from "react-bootstrap"
// import Home from "./home"
import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
// import Todo from './Todos/Todo';
import axios from "axios";

function Login(props){
    const navigate = useNavigate();
     let [loginValue,setLogin]=useState({
        Name:"Abisha",
        Email:"abi@gmail.com",
        Password:"123456"
     })
     const checklogin=()=>{
        // if(loginValue.Email=="abi@gmail.com" && loginValue.Password==123456){
        //     // alert("success")
        //     props.changeStatus({
        //         logged:true,
        //         email:loginValue.Email
        //     })
        //     navigate("/todo");
        // }
        // else{
        //     // alert("Faild")
        //     props.changeStatus({
        //         logged:false,
        //         email:""
        //     })
        // }
        axios({
            method: 'post',
            url: ': http://agaram.academy/api/action.php',
            data: {
                request : "candidate_login",
                email:"abi@gmail.com",
                password:"123456"
                
          }}).then(function(response){
            console.log("Success",response)
            if(loginValue.Email=="abi@gmail.com" && loginValue.Password==123456){
            props.changeStatus({
                         logged:true,
                         email:loginValue.Email
                     })
                     navigate("/users");}
          }
          );
     }
     
    return(
        <>
        <b>{JSON.stringify(loginValue)}</b>
        <form>
        <label>Name</label>
        <input type="text" id="name" defaultValue={loginValue.Name} onKeyUp={(e)=>setLogin({
            ...loginValue,
            Name:e.target.value
        })}></input><br></br>
        <label>Email</label>
        <input type="email" id="mail" defaultValue={loginValue.Email} onKeyUp={(e)=>setLogin({
            ...loginValue,
            Email:e.target.value
        })}></input><br></br>
        <label>Password</label>
        <input type="password" id="pass" defaultValue={loginValue.Password} onKeyUp={(e)=>setLogin({
            ...loginValue,
            Password:e.target.value
        })}></input><br></br>
        <Button type="button" variant="success" onClick={()=>checklogin()}>Login</Button>
       
        </form>
        <li>
              <Link to={`/todo`}>Todo</Link>
            </li>
        </>
    )
}
export default Login