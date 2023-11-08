import { useState } from "react"
import Addtodo from "./Addtodo"
import Header from '../Header';
import { Button } from "react-bootstrap";


function Todo(props){

    let [todos,newtodos]=useState(["Charger","Medicine","Mobile Phone","Dress"])
    // let [inputValue,setInput]=useState("")


    const Delete=(value)=>{
        let updatedValue=todos.filter((t)=>t!=value)
        newtodos(updatedValue)
    }

    
    return(
        <div>
            <Header/>
            {props.loginStatus?<h1>Welcome{props.loginStatus.email}</h1> : "Unknown User"}
            <table border={1} className="table table-bordered" >
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Requirement</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((t,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{t}</td>
                            <td>{<Button type="button" variant="danger" onClick={()=>Delete(t)}>Delete</Button>}</td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
            <Addtodo items={todos} setitems={newtodos}/>
            {/* <input type="text" onKeyUp={(e)=>setInput(e.target.value)}></input>
            <button type="button" onClick={()=>
                {newtodos([...todos,inputValue])}}>Add</button> */}
        </div> 
        
    )
}

export default Todo