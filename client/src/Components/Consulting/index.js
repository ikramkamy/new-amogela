import React,{useState} from 'react';
import './consulting.css';
import Mynavbar from '../Mynavbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';

const Consulting=()=>{

  const [input,setInput]=useState({
    lastName:"",
    firstName:"",
    email:"",
   // password:"",
    message:"",

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
        message:input.message
       /* phone:input.phone,
        username:input.username,
        password:input.password*/
    }
    console.log(newuser);
    axios.post(`http://localhost:3001/signup`,newuser)
    .then(response => {
     console.log("post with axios succed")
    }).catch(error => {
      console.log("the raison of failure", error) 
    });
    }



return(<div className="consulting">
     <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>
        </div>
<Mynavbar/>
<div className="Consulting" >Consulting</div>
<div className="back-consulting"><img src="/images/12.jpg"/></div>
<div className="consult-form">

<Form className="Form-ui-styling">
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Nom</Form.Label>
    <Form.Control type="text" placeholder="Nom" name="lastName" onChange={handelChange} value={input.lastName}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Prenom" name="firstName" onChange={handelChange} value={input.firstName}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handelChange} value={input.email} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label style={{color:"white"}}>message</Form.Label>
    <textarea className="message"  placeholder="Ecrivez votre message .."  name="message" onChange={handelChange} value={input.message}/>
    <Form.Text className="">
    </Form.Text>
  </Form.Group>
  
  
  <button variant="primary" type="submit">
    Submit
  </button>
</Form>

<div className="image-consult"><img src="/images/15.jpg" className="size-consult"/></div>
</div>


<Footer/>

</div>
)
}
export default Consulting;