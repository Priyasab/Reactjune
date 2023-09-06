import React from "react";
import "../../../src/Bootstrap.css"
class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userList:[{
                id:1,
                name:"priya",
                designation:"Sr.Developer"
            },
            {id:2,
            name:"priyan",
            designation:"Jr.Developer"
        },
        {id:3,
        name:"praveen",
        designation:"Developer"
    },
    {id:4,
    name:"poorani",
    designation:"Developer"
}
        
        ]
        }
    }

    deleteUser=(index)=>{
        let temUsers=[...this.state.userList]
        temUsers.splice(index,1)
        this.setState({
            userList:temUsers
        })
    }
    render(){
        return(
            
            <div >
            <table className="table table-success"  >
            <thead>
            <tr>
            <th>ID </th>
            <th>Name</th>
            <th>Designation</th></tr>
            </thead>
            <tbody>
            {this.state.userList.map((user,index)=>
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <button onClick={()=>this.deleteUser(index)}>Del</button>
                </tr>
                
                )}
                
           </tbody>
           
           </table>
            
            
            
            </div>
            
        )
    }
}
export default Table;