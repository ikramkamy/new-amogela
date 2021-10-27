import React,{useState,useEffect} from 'react';
import './signin.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Icon from './Icon';
import {loginUser} from '../../actions/productActions.js';
/* test pull2*/ 
import Signup  from '../Signup';

const Signin=(props)=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const AUTH = 'AUTH';
const history = useHistory();
const [issignin,setIssignin]=useState(false);
const googleSuccess = async (res) => {
const result = res?.profileObj
const token = res?.tokenId;
setLoginout("logout")
try {
      //dispatch({ type: AUTH, data: { result, token } });
//console.log(res)
      history.push('/signin');
      
    } catch (error) {
      //console.log(error);
    }
  };

const googleError = (error) =>{
console.log(error)
    alert('Google Sign In was unsuccessful. Try again later');
  } 
const {showinscription}=props;
const [sign,setSign]=useState("Connectez-vous")
const [show,setShow]=useState(false)
const handelshow=()=>{
  setShow(!show);
  setSign("Inscrivez-vous")
}
const handelshowBack=()=>{
  setShow(!show);
  setSign("Connectez-vous")

}
const [input,setInput]=useState({
    email:"",
    password:""
})
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handelChange=(event)=>{
   setEmail(event.target.value);
    }
    const handelChange2=(event)=>{
    setPassword(event.target.value);
       }
       
    const token=localStorage.getItem('token');
const handelClick=()=>{
input.email=email;
input.password=password;
loginUser(input);
setInput(
  { email:"",
   password:""}
 )
if(token!==null){
  history.push("/")
  setInput(
   { email:"",
    password:""}
  )
}else if (token===null){
  alert("votre email ou mot de passe est invalide, Vérifiez votre inscription !")
  history.push("/signin")
  setInput(
    { email:"",
     password:""}
   )
}
 

 }

const [loginout,setLoginout]=useState("login");

const handelSubmit=(e)=>{
e.preventDefault();
console.log("submit succed")
}

return(

<div className="signin">
<div className="header-sign" >{sign}</div>
<img src="/images/logo.png" className="logo-sign"/>
{ !show && (
<div className="signin-box-wrap">

<div className="signin-box">

<form className="form-signin" onSubmit={handelSubmit}>
<label className="label-sigin">Email</label>
<input  className="label-sigin" type="text"  placeholder="email@gmail.com" onChange={handelChange} value={email} name="email"/>
<label className="label-sigin">Mot de Passe</label>
<input className="label-sigin" type="password"  required placeholder="password" onChange={handelChange2} value={password} name="password" />
<div className="btn-signin-wrapper">
 
<button  onClick={handelClick}>Connexion</button>

</div>
</form>
Vous n'avez pas un compte?<span onClick={handelshow} className="inscrire">S'inscrire</span>
</div>
</div>)}


{show && (<div className="wrap-signup">
 
<Signup handelshowBack={handelshowBack}/>


</div>)}


</div>)
}

export default Signin;