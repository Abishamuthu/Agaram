import { Button } from "react-bootstrap";

function Home(props){
    return(
        <>
        <h1>Welcome,{props}</h1>
        <Button variant="success">Logout</Button>
        </>
    )
}

export default Home;