import { useState } from "react"

function Login(){
const[username,setUsername]=useState("Priya")
const[password,setPassword]=useState(0)


let login=(event)=>{
event.preventDefault()
console.log("login rendered")
}
    return(
        <div>
        <form><div>
        <label>Username</label>
        <input type="text" placeholder="Enter your name" value={username} ></input></div>
        
        <div>
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} ></input></div>
        <div>
        <button type="submit" onClick={login}>Login</button></div>
        </form>
        </div>
    )
}
export default Login()