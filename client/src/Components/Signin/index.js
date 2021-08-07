import React,{useState} from 'react';
import './signin.css';
import axios from 'axios';
const Signin=()=>{
const [input,setInput]=useState({
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
        if(input.password===""||input.email===""){alert(`Enter a ${input}`)}
        event.preventDefault();
        console.log("we are posting ")
        const newuser={
         email:input.email,
         password:input.password
        }
        console.log(newuser);
        axios.post("http://localhost:3001/signin",newuser)
        .then(response => {
         console.log("post with axios succed")
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        
        }


return(<div className="signin">
    <div className="logo-wrapper"><img src="/images/logoamo.png" className="logo-size"/></div>
<div className="signin-box">
<div className="signin-title">Signin</div>
<form className="form-signin">
<label>Email</label>
<input  type="text"  placeholder="email@gmail.com" onChange={handelChange} value={input.email} name="email"/>
<label>Password</label>
<input  type="password"  required placeholder="password" onChange={handelChange} value={input.password} name="password" />
<div className="btn-signin-wrapper">
<button onClick={handelClick}>Signin</button>
</div>
</form>
</div>

</div>)
}

export default Signin;