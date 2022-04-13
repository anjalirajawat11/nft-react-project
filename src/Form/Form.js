import React, {useState} from 'react';
//import  "./Form.css";


const Form = () => {
    
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [gender , setGender] = useState("");
    const [dob , setDob] = useState("");
    const [allEntry , setAllEntry] = useState([]);
    const [err,setErr] = useState(false)


    

    
    const submitForm = (e) => {
        e.preventDefault()
       if(name === "" ||email  === "" || gender === "" ||dob === ""){
        setErr(true)
       }else{
        const newEntry = { name: name , email: email , gender:  gender , dob: dob };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setName("");
        setEmail("");
        setGender("");
        setDob("");

       }  
    } 
    
    



    return (
    <>
        <form  onClick={(e)=>submitForm(e)}>
            <div className="total">
        <div className="form">
            <div className="top"><label htmlfor="email">Name</label></div>
            <div><input type ="text" name="email" id="email" autoComplete="Off" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            /></div>
        </div>
        <div className="form">
           <div> <label htmlfor="password">Email</label></div>
            <div><input type ="text" name="email" id="email" autoComplete="Off" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /></div>
        </div>
        <div className="form">
           <div> <label htmlfor="password">Gender</label></div>
            <div><input type ="text" name="gender" id="gender" autoComplete="Off" 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            /></div>
        </div>
        <div className="form">
           <div> <label htmlfor="password">DOB</label></div>
            <div><input type ="text" name="dob" id="dob" autoComplete="Off" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            /></div>
        </div>
       <button type="submit" className= "block" >Login</button>
        </div>

        </form>
      <div className="error">  { err == true ? <h6>Please fill the missing fields</h6>:""}</div>

        <div>
            {
              allEntry && allEntry.length>0 &&  allEntry.map((curElem) => {
                    return (
                        <div className="showDetails">
                            <p>{curElem.name}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.gender}</p>
                            <p>{curElem.dob}</p>
                          
                        </div>
                    )
                })
            }
        </div>
        </>
    );
};
    

export default Form;