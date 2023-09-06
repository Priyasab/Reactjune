import { useState } from "react"
function Home(){

    const[home,setHome]=useState("Welcome user")
    return(
        <div>
        <h1>{home}</h1>
        </div>
    )
}
export default Home