import React,{useEffect, useState} from 'react';
import './prodbyID.css';
import axios from "axios";
import Mynavbar from '../Mynavbar';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import ShopinCart from "../Shopingcart";
import { ManagedUpload } from 'aws-sdk/clients/s3';
import { useParams,useHistory } from 'react-router-dom';
import {FaShoppingBag,FaWindowClose,FaMinus ,FaPlus} from "react-icons/fa";
import Signin from '../Signin';
const ProdbyID=(props)=>{
  const [products,setProducts]=useState([]);
  const [here,setHere]=useState([]);
  const token=localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const[g5,setG5]=useState(false);
  const[g6,setG6]=useState(false);
  const [option,setOption]=useState([{label:"seléctioner",value:"seléctioner"},
    
    {label:"vanille madagascar",value:"vanille madagascar"},{label:"Créme caramel",value:"Créme caramel"}]);


  const Handelopne = () => {
    setIsOpen(!isOpen);
    };
  //const [counter, setCounter] = useState(0);
  //const {addproduct}=props;
  let {productId}=useParams();

  let idsplited=productId.split(":")[1];
  console.log("idsplited",idsplited)
  //const objectID=("611fc0d3ba3b3720b4666a49");
  console.log("ID from Params",productId)
  // setId(props.prodID)
  //const productId = props.match.params.productId;
  /*
  useEffect(()=>{

    
   const response= await axios.get('/getproduit').then(res => {
     setProducts(response.data);
     setHere(response.data);
      console.log("fetchin by IS from params",products);
      console.log("data from fetch axios",res.data);
      console.log("heeere",here)
    })
    .catch(function (error) {
        console.log(error);6112eae87406252de8f9e039
    })
},[])
   */
useEffect(() => {
  const expensesListResp = async () => {
    await axios.get(`/getbarquettebyID/${idsplited}`)
    .then(response =>setHere(response.data.data))
  }
  expensesListResp();
}, []);
console.log("heeere",here)
/********************************get user************************ */
const user_id=localStorage.getItem('user_id');
const history = useHistory();
const[usercart,setUsercart]=useState([]);
useEffect(() => {
  const expensesListResp = async () => {
    await axios.get(`/getMycartUserprofile/${user_id}`)
    .then(response =>setUsercart(response.data))

     }
  expensesListResp();
}, []);
console.log("USER",usercart)   
/***************************************************************** */
useEffect(() => {
  if(here.name=="Barquettes 1000g"){
    setG5(true);
    setG6(true);
  }else if(here.name=="Barquettes 750g"){
   setG5(true);
   setG6(false);
  }else{
   setG5(false);
   setG6(false);
  }
})

const{id,getbyID}=props;
  
  const [cart,setCart]=useState([]);
  const [count, setCount]=useState(cart.length);
 
 const [input, setInput] = useState({
        gout1: "",
        gout2: "",
        gout3: "",
        gout4: "",
        gout5:"",
        gout6:"",
        quantite: "",
        name:here.name,
        prix:here.prix,
        img:here.img,
        id:here._id,
      });
    const handelChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      };
      const addproduct=(product)=>{

        if(token===null){
          const modal = document.querySelector(".modal")
            const closeBtn3 = document.querySelector(".close3")
            modal.style.display = "block";
            closeBtn3.addEventListener("click", () => {
              modal.style.display = "none";
            })
        console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
        
        
        }else{
       
        /************************** */
        //************            product to mu user cart  ******************************/
        //event.preventDefault();
        if(input.gout1 || input.gout2 || input.gout3 || input.gout4 || input.gout5 || input.gout6 =="")
{alert('SELECTIONER UN GOUT SVP')}else{
        console.log("we are posting ")
        const cartItems={
          "cart" :{
            id:here._id,
            name:here.name,
            prix:here.prix,
            img:here.img,
            quantite:here.quantite,
            gout1: input.gout1,
            gout2: input.gout2,
            gout3: input.gout3,
            gout4: input.gout4,
        
          }
           
        }
        console.log(cartItems);
        axios.post("/addToCartUser2",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
         console.log("post with axios succed")
         setIsOpen(!isOpen);
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        
        }     
      }
    }
      var counter = 0;
      const trans = 300;
      var num = trans * counter;

   const n=0;
   const Minesone=(e)=>{
    if(token===null){
      const modal = document.querySelector(".modal")
        const closeBtn3 = document.querySelector(".close3")
        modal.style.display = "block";
        closeBtn3.addEventListener("click", () => {
          modal.style.display = "none";
        })
    console.log("MINUS PRODUCT BEFOR SIGN IN")
    }else{
    
   /************************** */
    //************            product to mu user cart  ******************************/
    //event.preventDefault();
    
    console.log("we are MINUSING")
    const cartItems={
      "cart" :{
        id:e.id,
        img:e.img,
        name:e.name,
        prix:e.prix,
        quantite:e.quantite,
        gout1:e.gout1,
        gout2:e.gout2,
        gout3:e.gout3,
        gout4:e.gout4,
    }
    }
    console.log(cartItems);
    axios.post("/MinuOneItemCartUser",cartItems, { headers: {"Authorization" : `Bearer ${token}`} })
    .then(response => {
     console.log("MINUS")
    
    }).catch(error => {
      console.log("the raison of failure MINUS", error) 
    });
    }
   }
  
    return(<div className="prodbyID">
      <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </Link>
        </div>
        <div className="shoping-cart-icon">
     
   
     <FaShoppingBag className="icon-shoping" onClick={Handelopne} />
     
      <div className="items"></div>
    </div>
      <Mynavbar/>
<div className="prod-name">{here.name}</div>
<div className="product-bloc">
<div className="command-bloc">
<div className="image-product" style={{backgroundImage:"url(/images/prod2.png)"}}></div>


<form className="form">
  <label>GOUT GLACE (1) 
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout1} type="text" name="gout1"  >
    {option.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}       
              
              
  </select>
  </label>
  <label>
  GOUT GLACE (2)
   <select data-id="domain-switcher" onChange={handelChange} value={input.gout2} type="text" name="gout2" >
             
              {option.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
  </select>
  </label>
  <label>
    GOUT GLACE (3)
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout3}type="text" name="gout3" >
    {option.map((option) => (
              <option  value={option.value}>{option.label}</option>
            ))}
  </select>
  </label>
  <label>
  GOUT GLACE (4)
  <select data-id="domain-switcher" onChange={handelChange} value={input.gout4}type="text" name="gout4">
  {option.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
  </select>
  </label>
{g5&&(
  <label>
  GOUT GLACE (5)
  <select  value={input.gout5} onChange={handelChange} name="gout5">
  {option.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
  </select>
  </label>

)}

{g6&&(<label>
  GOUT GLACE (6)
  <select  value={input.gout6} onChange={handelChange} name="gout6">
  {option.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
  </select>
  </label>)}
  
 <label className="quantite.wrap">
 
     {/*<input type="Number"placeholder="quantié" onChange={handelChange} value={input.quantite} name="quantite"/>*/}
<div className="quantite">
  Quantité:
  <FaMinus onClick={Minesone} style={{color:"#12705e"}}/>
  {here.quantite}
  <FaPlus onClick={addproduct} style={{color:"#12705e",cursor:"pointer"}}/>
  </div>
 </label>
   
</form>
</div>
</div>
<button className="btn-produit" onClick={addproduct}>Ajouter</button> 
<div className="buttonsControl">
                <button className="minusButton" onClick={() => {
                               counter = counter - 1;
                               const item = document.getElementById('r')
                               const products = document.querySelector('.owlSlideItem products')
           
                               item.style.transform = 'translateX(' + (-trans * counter) + 'px)'
                               console.log(trans * counter);
                               if (trans * counter == 0) {
                                   counter =  5;
                                }

                }} > - </button>
                <button id="plus" className="plusButton" onClick={() => {

                    counter = counter + 1;
                    const enable = document.querySelector('.minusButton');
                    enable.style.pointerEvents = "visible";
                    enable.style.opacity = "1";
                    const item = document.getElementById('r');
                    const products = document.querySelector('.owlSlideItem products');

                    item.style.transform = 'translateX(' + (-trans * counter) + 'px)';
                    console.log(trans * counter);
                    if (trans * counter == 2100) {
                        counter = -1;
                    }

                }}> + </button>
            </div>


            <div className="contentOwl">
                <div className="containerOwlSlide">

                    <div id="r" className="owlSlideItem">

                        <div className="products">
                            <div className="imgProduct"> <div className="imgContainer"> <img src="/images/prod2.png" /> </div>  <div className="productName"> <div> Barquette de glaces 1000g</div> </div></div>
                            <div className="priceButton">
                                <div> <div> 2500 DZD</div> </div>
                            </div>
                        </div>
                        
                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src="/images/prod2.png" /> </div>  <div className="productName"> <div> Barquette de glaces 750g</div> </div> </div>
                            <div id="firstcaroussel" className="priceButton">
                                <div> <div> 1900 DZD</div> </div>
                            </div>
                        </div>


                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src="/images/prod2.png" /> </div>  <div className="productName"> <div> Barquette de glaces 500g</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 1300 DZD</div> </div>
                            </div>
                        </div>
                        <div className="products">
                            <div className="imgProduct"> <div className="imgContainer"> <img src="/images/prod2.png" /> </div>  <div className="productName"> <div> Barquette de glaces 1000g</div> </div></div>
                            <div className="priceButton">
                                <div> <div> 2500 DZD</div> </div>
                            </div>
                        </div>
                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src="/images/prod2.png" /> </div>  <div className="productName"> <div> Barquette de glaces 750g</div> </div> </div>
                            <div id="firstcaroussel" className="priceButton">
                                <div> <div> 1900 DZD</div> </div>
                            </div>
                        </div>

                        </div>
                        </div>
                        </div>
<Footer/>

{isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-Close-cart" onClick={Handelopne}/>
</div> 
  <ShopinCart/>
  </div>
  </div>)
}

<div className="js-btn"></div>
<div class="modal">
<span class="close3">&times;</span>
   <div class="modal_content-signin">
   
     
    <Signin/>
     
   </div>
</div>



    </div>)
}
export default ProdbyID;
