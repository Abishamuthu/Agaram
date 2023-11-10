// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todos/Todo';
import Users from './Todos/Users';

import Login from './login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState,useEffect } from 'react';


function App() {
  let [loginStatus,changeStatus]=useState({
    logged:false,
    email:""
  })

  // useEffect(()=>{
  //   alert(1)
  // })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login loginStatus={loginStatus} changeStatus={changeStatus}/>
    },
    {
      path: "/todo",
      element: < Todo loginStatus={loginStatus} changeStatus={changeStatus}/>
    },
    {
      path: "/users",
      element: <Users/>
    },
    
  ]);
  // const test= (a)=>{
  //   alert(a);
  // }
  // let [value , change]=useState("React") 
  return (
    <div className="App">
      <header className="App-header">
        
        <RouterProvider router={router} />
    
        {/* <Todo/>
        <Users/> */}
        {/* <Header name={value} place="Nagercoil"/>
        <Button type='button' onClick={()=>change("React")}>change</Button>
        
      <Button variant="primary">
        Button as link
      </Button>
      <button type='button' onClick={()=>test("success")}>change</button> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
