import React, {useState, useEffect } from 'react'
// import './NewApi.css'

function NewApi() {
    //using useState(hook)
    const [State, setState] = useState("");
    const [checkBox, setCheckBox] = useState(false);
    
    //fetch api data using useEffect
    useEffect(() =>{
        const url ="https://jsonplaceholder.typicode.com/todos";
        fetch(url)
        .then((res) => res.json())
        .then((json) => setState(json))
        .catch((err) => console.log(err));
        
    })
    

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
            <table>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
                {
                    //using length & map function 
                    State.length > 0 ?
                    State.map((value,index) =>{
                        // console.log("value.completed", value.completed);
                        return(
                            <tr key = {index}>
                                <td>{value.userId}</td>
                                <td>{value.id}</td>
                                <td>{value.title}</td>
                                <td>
                                {
                                   <input type="checkbox"  checked={value.completed ? 'checked': ''} />
                                }
                                </td>
                                 
                            </tr>
                        )
                    })
                    :
                    "no data"
                }
            </table>
                </div>
               
           </div>
        </div>
    )
}

export default NewApi