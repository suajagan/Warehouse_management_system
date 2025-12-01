import {useState} from "react";
import axios from "axios";

export default function App(){
    const [userName, setUserName] = useState<string>("")

    function login(){
        const host:string = window.location.host ==="localhost:5173" ? "http://localhost:8080" : window.location.origin

        window.open(host + "/oauth2/authorization/github", "_self")
    }

    function getMe(){
       axios.get("/api/users")
           .then(r => setUserName(r.data))
           .catch(e => console.log(e.message))
    }

    return(
        <>
        <h1>Login Page</h1>
            <h2>{userName}</h2>
            <button onClick={login}>Login</button>
            <button onClick={getMe}>getMe!</button>
        </>);
}


