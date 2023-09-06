import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Form(){

    const [username,setUsername]=useState(" ")
    const[password,setPassword]=useState("")
const navigate=useNavigate()
let login=(event)=>{
    event.preventDefault()
if(username==="priya" && password=="12345"){
navigate(`/home/${username}`)
}
}
    
    return(
        <div>
        <form>
        <div><h2>Login</h2></div>
        <div>
        <label>Username</label>
        <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input></div>
        <div>
        <label>Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input></div>
        <div>
        <button type="submit" onClick={login}>Login </button></div>
        </form></div>

    )
}
export default Form