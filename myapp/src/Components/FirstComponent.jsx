import React from "react";

class FirstComponent extends React.Component{
// constructor(props){
//     super(props)
//     this.state={
//         name:"priya"
//     }
// }

    render(){
        return(
            <div>
            <div>
            <h1 style={{color:"blue"}}>Hi am a first Component</h1>
            
            <ThirdComponent/>
            
            </div>
            <div>hello</div>
            </div>
        )
    }
}



export class ThirdComponent extends React.Component{
    render()
    {
        return(
            <div>
            <h3>Hi am a third Component</h3>
            </div>
        )
    }
}
export default FirstComponent;