import React,{useState} from 'react';
import './product.css';
import axios from 'axios';
const Product=()=>{
const [input,setInput]=useState({
        gout1:"",
        gout2:"",
        gout3:"",
        gout4:"",
        quantite:""
      })
const [counter, setCounter]=useState(0);
    const  handleCount=()=>{

      setCounter(2);

    }
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
        const newCommand={
          gout1:input.gout1,
          gout2:input.gout2,
          gout3:input.gout3,
          gout4:input.gout4,
          quantite:input.quantite
        }
        console.log(newCommand);
        axios.post(`http://localhost:3001/clickretire`,newCommand)
        .then(response => {
         console.log("fetch with axios succed")
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        
        }


return(<div className="product">
<div className="command-bloc">
<form>
  <label>GOUT GLACE (1) 
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout1} type="text" name="gout1" >
              <option defaultValue>  GOUT GLACE (1)</option>
              <option value="Framboise–passio" >Framboise–passion</option>
              <option value="Citron jaune–basilic" >Citron jaune–basilic</option>
              <option value="Caramel–noix de coco">Caramel–noix de coco</option>
              <option value="Noix de coco–banane" >Noix de coco–banane</option>
  </select>
  </label>
  <label>
  GOUT GLACE (2)
   <select data-id="domain-switcher" onChange={handelChange} value={input.gout2} type="text" name="gout2" >
              <option value="">GOUT GLACE (2)</option>
              <option value="Framboise–passio">Framboise–passion</option>
              <option value="Citron jaune–basilic">Citron jaune–basilic</option>
              <option value="Caramel–noix de coco">Caramel–noix de coco</option>
              <option value="Noix de coco–banane">Noix de coco–banane</option>
  </select>
  </label>
  <label>
    GOUT GLACE (3)
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout3}type="text" name="gout3" >
             <option value="">GOUT GLACE(3)</option>
              <option value="Framboise–passio">Framboise–passion</option>
              <option value="Citron jaune–basilic">Citron jaune–basilic</option>
              <option value="Caramel–noix de coco">Caramel–noix de coco</option>
              <option value="Noix de coco–banane">Noix de coco–banane</option>
  </select>
  </label>
  <label>
  GOUT GLACE (4)
  <select data-id="domain-switcher" onChange={handelChange} value={input.gout4}type="text" name="gout4">
              <option value="">GOUT GLACE (4)</option>
              <option value="Framboise–passio">Framboise–passion</option>
              <option value="Citron jaune–basilic">Citron jaune–basilic</option>
              <option value="Caramel–noix de coco">Caramel–noix de coco</option>
              <option value="Noix de coco–banane">Noix de coco–banane</option>
  </select>
  </label>
 <label>
     Quantité
     <input type="Number"placeholder="quantié" onChange={handelChange} value={input.quantite} name="quantite"/>
 </label>
  <input  onClick={handelClick} type="submit" value="Submit" className="submit-bnt" />
</form>




</div>
<div className="image-product" style={{backgroundImage:"url(/images/2.jpg)"}}>


</div>




</div>)
}
const Button = (props) => {
    return (
      <button onClick={() =>
        props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)} >
        {props.sign}
      </button>
  
    );
  }
export default Product;