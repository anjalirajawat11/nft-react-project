import React,{ useState, useEffect} from 'react';
//import "./File.css";

const getUsersData = JSON.parse(localStorage.getItem('user') || []);
const getImageData = JSON.parse(localStorage.getItem('file') || '');
const File = () => {
   
    validateForm = () => {

        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let phoneError = '';
        let genderError = '';
        let dobError = '';
        let cityError = '';
        let aboutError = '';

        if (!this.state.name) {
            nameError = 'Enter your name';
        }

        if (!this.state.email) {
            emailError = 'Enter your email';
        }
        if (nameError || emailError ) {
            this.setState({
                nameError, emailError
            });
            return false;
        }
        return true;
    }
    const onSubmit = data => {
      console.log(data)
      const isValid = this.validateForm();
        if(isValid) {

        
    };
    const[user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePic:  null,
        phoneNumber: '',
    })
    const [file, setFile] = useState(null);
    const [error, setError] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
    });

    const inputOnchange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
        setUser({
            ...user, [name]: value
        })
    }
    
    const handleChange = function loadFile(e) {
        if (e.target.files.length > 0)
        {
          const file = URL.createObjectURL(e.target.files[0]);
          setFile(file);
        }
    };

   
    
    //Form submit  
    const FormSubmit = (evt) =>     
    {
        evt.preventDefault();
        const json = JSON.stringify(user);
        localStorage.setItem("user", json);

        const json1 = JSON.stringify(file);
        localStorage.setItem("file", json1);
        setUser('');
        setFile('');
    }

    return(
        <div className='box'>
            <form className='Form'>
            <label>Name:</label>
            <input type="text" name="name" value={user.name} onChange={inputOnchange} />
            <br />
            <span>{error.name}</span><br />
            <label>Email:</label>
            <input type="text" name="email" value={user.email} onChange={inputOnchange} autoComplete='new-email' /><br />
            <span>{error.email}</span><br />
            <label>password:</label>
            <input type="password" name="password" value={user.password} onChange={inputOnchange} autoComplete="new-password" /><br />
            <span>{error.password}</span>
            <label>confirm password:</label>
            <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={inputOnchange}/><br />
            <span>{error.confirmPassword}</span>
            <label>Phone Number</label>
             <input type="phone-Number" name="phoneNumber" value={user.phoneNumber} onChange={inputOnchange} /><br />
             <span>{error.phoneNumber}</span>
            <label>profile pic:</label>
            <input type="file" accept="image/*" id="upload" name="profilePic" value={user.profilePic} onChange={handleChange} /><br />
            <img alt="upload-image" src={file} width="50px" height="150px"/><br/>
           
            <button onClick={FormSubmit}>submit</button>

            <img src={user.profilePic} />
            </form>
            <div className='saveData'>
                {
                    getUsersData ? 
                    <>
                        <li>Name: {getUsersData.name}</li>
                        <li>Email: {getUsersData.email}</li>
                        <li>password: {getUsersData.password}</li>
                        <li>confirmPassword: {getUsersData.confirmPassword}</li>
                        <li>Phone Number: {getUsersData.phoneNumber}</li>
                        <li>Image: <img src={getImageData} width="50px" height="150px"/></li>
                    </>
                    :

                    'no data'
                }
            </div>
        </div>
        
    )
}
}
export default File;
