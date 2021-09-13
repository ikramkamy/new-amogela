import React,{useState} from 'react';
import './signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer';
import Mynavbar from '../Mynavbar';
import Lognav from '../Lognav';
import Icon from './Icon';



const Signin=(props)=>{
const AUTH = 'AUTH';
const history = useHistory();
console.log("we are in signin");
const [issignin,setIssignin]=useState(false);
const googleSuccess = async (res) => {
const result = res?.profileObj
const token = res?.tokenId;
setLoginout("logout")
try {
      //dispatch({ type: AUTH, data: { result, token } });
console.log(res)
      history.push('/signin');
      
    } catch (error) {
      console.log(error);
    }
  };

const googleError = (error) =>{
console.log(error)
    alert('Google Sign In was unsuccessful. Try again later');
  } 
const {showinscription}=props;
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
    if(input.password===""||input.email===""){alert(`SVP remplissez tous les champs`)}
        event.preventDefault();
        console.log("we are posting ")
        const newuser={
         email:input.email,
         password:input.password
        }
        console.log(newuser);
        axios.post("http://localhost:3001/signin",newuser)
        .then(response => {
         console.log("LOGIN axios succed",response )
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('user_id', response.data.user._id);
        console.log("token",response.data.token)
         
         const id=response.data.user._id;
         console.log("id from response",id)
         history.push(`/shop`);
         setLoginout("logout")
 
        }).catch(error => {
          console.log("the raison of failure", error) 
          /*history.push('/signin');
          alert("check you if you are signed up ")
          */
        });
        
        }

const [loginout,setLoginout]=useState("login");

const handelSubmit=(e)=>{
e.preventDefault();
console.log("submit succed")
}

return(
<div className="signin">

<Lognav log={loginout} issignin/>
<div className="signin-box">
<div className="signin-title">Signin</div>
<form className="form-signin" onSubmit={handelSubmit}>
<label>Email</label>
<input  type="text"  placeholder="email@gmail.com" onChange={handelChange} value={input.email} name="email"/>
<label>Password</label>
<input  type="password"  required placeholder="password" onChange={handelChange} value={input.password} name="password" />
<div className="btn-signin-wrapper">
 
<button  onClick={handelClick}>Signin</button>
<GoogleLogin
 clientId="72069573706-926pu7ebkqucafvq4n0jlud8u5des64d.apps.googleusercontent.com"
 render={(renderProps)=>(
 <button  color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">
  
  login  with google
  </button>)}
  startIcon={<Icon />}
  onSuccess={googleSuccess}
  onFailure={googleError}
  cookiePolicy="single_host_origin"
  />
</div>
</form>
</div>
Si vous n'étes pas inscrits appuyez sur:
<div onClick={showinscription} style={{color:"#12705e",fontSize:"1.3em",fontWeight:"500",cursor:"pointer"}}>S'inscrire</div>

</div>)
}

export default Signin;