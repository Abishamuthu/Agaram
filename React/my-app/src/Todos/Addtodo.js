import { useState } from "react"
function Addtodo(props){
    let [inputValue,setInput]=useState("")
    return(
        <>
            <input type="text" onKeyUp={(e)=>setInput(e.target.value)}></input>
            <button type="button" onClick={()=>props.setitems([...props.items,inputValue])}>Add</button>
        </>
    )
}

export default Addtodo;