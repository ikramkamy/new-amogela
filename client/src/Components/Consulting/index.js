import React,{useState,useEffect} from 'react';
import './consulting.css';
import Mynavbar from '../Mynavbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';

const Consulting=()=>{
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [input,setInput]=useState({
    name:"",
    fname:"",
    email:"",
    text:"",
    phone:"",
    entreprise:""

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
        name:input.name,
        fname:input.fname,
        email:input.email,
        text:input.text,
        phone:input.phone,
        entreprise:input.entreprise
    }
    console.log(newuser);
    axios.post(`/consult`,newuser)
    .then(response => {
     //console.log("post with axios succed")
     alert("votre message a étè transmis, attendez un appel de la part de l'admin")
     setInput({
      name:"",
      fname:"",
      email:"",
      text:"",
      phone:"",
      entreprise:""
     })
    }).catch(error => {
      console.log("the raison of failure", error) 
    });
    }

    const [photos,setPhotos]=useState([]);
    useEffect(() => {
      const expensesListResp = async () => {
        await axios.get(`/photos-pages`)
        .then(response =>setPhotos(response.data))
     }
      expensesListResp();
    },[]);
    

return(<div className="consulting">
     <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logos.jpg" className="product-logo" />
        </Link>
        </div>
<Mynavbar/>
<div className="Consulting" >Consulting</div>
<div className="back-consulting" style={{backgroundImage:`url("http://localhost:3001/uploads/${photos[14]?.name}")`}}>{/*<img src="/images/12.jpg" className="img-consulting-size"/>*/}</div>

<div className="consult-form" >

<Form className="Form-ui-styling">
  <div className="wrap-first">
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Nom </Form.Label>
    <Form.Control type="text" placeholder="Nom" name="name" onChange={handelChange} value={input.name}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Prénom" name="fname" onChange={handelChange} value={input.fname}/>
   
  </Form.Group>
  
  </div>
  <div className="wrap-first">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" name="email" onChange={handelChange} value={input.email} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}}>Numéro de télèphone:</Form.Label>
    <Form.Control  min="0" className="phone" type="Number" placeholder="Numéro de télèphone" name="phone" onChange={handelChange} value={input.phone}/>
    
  </Form.Group>
  </div>
  <div className="wrap-first">
  <Form.Group className="mb-3">
    <Form.Label style={{color:"white"}}>Entreprise</Form.Label>
    <Form.Control  placeholder="Entreprise"  name="entreprise" onChange={handelChange} value={input.entreprise}/>
    <Form.Text className="">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label style={{color:"white"}}></Form.Label>
   
    <Form.Text className="">
    </Form.Text>
  </Form.Group>
  
  </div>
  <Form.Group className="mb-3">
    <Form.Label style={{color:"white"}}>message</Form.Label>
    <textarea className="message"  placeholder="Ecrivez votre message.."  name="text" onChange={handelChange} value={input.text}/>
    <Form.Text className="">
    </Form.Text>
  </Form.Group>
  
 <div className="wrap-consult-btn"><div className="consult-btn" onClick={handelClick}>
    Submit
  </div>
  </div> 
</Form>

<div className="image-consult" style={{backgroundImage:"/images/15.jpg"}}></div>
</div>


<Footer/>

</div>
)
}
export default Consulting;