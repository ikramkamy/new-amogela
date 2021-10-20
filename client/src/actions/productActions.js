
import axios from 'axios';
import {LOGIN_USER,ADD_PRODUCT} from './types';
import {useHistory} from 'react-router-dom';
const token=localStorage.getItem('token');
export function loginUser (newuser){
    
if(newuser.password===""||newuser.email===""){alert(`SVP remplissez tous les champs`)}
//event.preventDefault();
console.log("we are posting ")
/**/
console.log(newuser);
const request =axios.post("http://localhost:3001/signin",newuser)
.then(response => {

 localStorage.setItem('token', response.data.token);
 localStorage.setItem('user_id', response.data.user._id);
console.log("token",response.data.token)
 
 const id=response.data.user._id;
 console.log("id from response",id)
 const history = useHistory();
 //history.push(`/shop`);
 //setLoginout("logout")


}).catch(error => {

  /*history.push('/signin');
  alert("check you if you are signed up ")
  */
});

return {
    type: LOGIN_USER,
    payload: request
}
}

/****************************function 2******************* */

export const addproduct=(product,token)=>{
if(token===null){
    const modal = document.querySelector(".modal")
      const closeBtn3 = document.querySelector(".close3")
      modal.style.display = "block";
      closeBtn3.addEventListener("click", () => {
        modal.style.display = "none";
      })
  console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
  
  
  }else{
  

  
  console.log("we are posting ")
  const cartItems={
    "cart" :{
      id:product._id,
      img:product.img,
      name:product.name,
      prix:product.prix,
      gout1:product.gout1,
      gout2:product.gout2,
      gout3:product.gout3,
      gout4:product.gout4,
  
    }
     
  }
  console.log(cartItems);
  const request =axios.post("/addToCartUser",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
  .then(response => {
   console.log("post with axios succed")
  }).catch(error => {
    console.log("the raison of failure", error) 
  });
  return {
    type: ADD_PRODUCT,
    payload: request
}
  }
 
  }

  /***************************************************************** */
  export const addCommande=(e,token)=>{
    if(token===null){
        const modal = document.querySelector(".modal")
          const closeBtn3 = document.querySelector(".close3")
          modal.style.display = "block";
          closeBtn3.addEventListener("click", () => {
            modal.style.display = "none";
          })
      console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
      
      
      }else{
    console.log("we are posting ")
      const cartItems={
        "commandeType" :{
          "commande":{
            command:e.command,
            date:e.date
          }
      }
    }
      console.log("ELEMENT A POSTE EST LA ",cartItems);
      const request =axios.post("/addCommandetoCart",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(response => {
       console.log("LA comannde est ajoutée avec succées")
      }).catch(error => {
        console.log("the raison of failure", error) 
      });
      return {
        type: ADD_PRODUCT,
        payload: request
    }
      }
     
      }