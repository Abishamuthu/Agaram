// import Subheader from './Sub';
// import { useState } from "react";
// import Shownum from './But';
import { Link } from "react-router-dom"
import Todo from './Todos/Todo';
import Users from './Todos/Users';
import Login from "./login";

function Header(props){
    // let [count,newcount]=useState(0)
    return(
        <div>
            {/* <h1>Welcome to {props.name}</h1>
    
            <Subheader place={props.place}/>
            <Shownum numcount={count} change={()=>newcount(count+1)} /> */}
            <nav>
          <ul>
          <li>
              <Link to={`/`}>login</Link>
            </li>
            <li>
              <Link to={`/todo`}>Todo</Link>
            </li>
            <li>
              <Link to={`/users`}>Users</Link>
            </li>
          </ul>
        </nav>
        </div>
    

    )
}
export default Header