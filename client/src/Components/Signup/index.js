import React,{useState} from 'react';
import './signup.css';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
const Signup=()=>{
const [input,setInput]=useState({
    nom:"",
    email:"",
    password:""
})
const handelChange=(event)=>{
    
    const {name,value}=event.target;
    setInput(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
    }
    })
    }
  
    const handelClick=(event)=>{
        event.preventDefault();
        console.log("we are posting ")
        const newuser={
            firstName:input.firstName,
            lastName:input.lastName,
            email:input.email,
            phone:input.phone,
            username:input.username,
            password:input.password
        }
        console.log(newuser);
        axios.post(`http://localhost:3001/signup`,newuser)
        .then(response => {
         console.log("post with axios succed")
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        }

    
return(<div className="signup">
<div className="logo-wrapper"><img src="/images/logoamo.png" className="logo-size"/></div>
<div className="signup-box">
<div className="signin-title">Inscription</div>
<div></div>
<form className="form-signup">
<label>Nom</label>
<input type="text"  placeholder="Nom" onChange={handelChange} value={input.lastName} name="lastName" />
<label>Prénom</label>
<input  type="text"  placeholder="Prénom" onChange={handelChange} value={input.firstNamed} name="firstName" />
<label>Username</label>
<input  type="text"  placeholder="username" onChange={handelChange} value={input.username} name="username" />
<label>Email</label>
<input  type="email"  placeholder="email@gmail.com" onChange={handelChange} value={input.email} name="email"/>
<label>Télèphone</label>
<input  type="Number"  placeholder="Numéro de télèphone" onChange={handelChange} value={input.phone} name="phone"/>
<label>Password</label>
<input  type="password"  placeholder="password" onChange={handelChange} value={input.password} name="password" />

<div className="btn-signin-wrapper">
<button onClick={handelClick}>S'inscrire</button>
</div>
</form>
</div>

</div>)
}

export default Signup;