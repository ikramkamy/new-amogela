import React,{useEffect, useState} from 'react';
import './prodbyID.css';
import axios from "axios";
import Mynavbar from '../Mynavbar';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import ShopinCart from "../Shopingcart";
import { ManagedUpload } from 'aws-sdk/clients/s3';
import { useParams } from 'react-router-dom';
import {FaShoppingBag,FaWindowClose} from "react-icons/fa";

const ProdbyID=(props)=>{
  const [products,setProducts]=useState([]);
  const [here,setHere]=useState([]);
  const token=localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
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
 




  const{id,getbyID}=props;
  
  const [cart,setCart]=useState([]);
  const [count, setCount]=useState(cart.length);
 
 const [input, setInput] = useState({
        gout1: "",
        gout2: "",
        gout3: "",
        gout4: "",
        quantite: "",
        name:here.name,
        prix:here.prix,
        img:here.img,
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
        setCount(cart.length)
        console.log("we are in add to cart")
        setCart([...cart,product])
        console.log(cart);
        /************************** */
        //************            product to mu user cart  ******************************/
        //event.preventDefault();
        
        console.log("we are posting ")
        const cartItems={
          "cart" :{
            id:here._id,
            name:here.name,
            prix:here.prix,
            img:here.img,
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
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
        
        }     

      var counter = 0;
      const trans = 300;
      var num = trans * counter;

   
    return(<div className="prodbyID">
      <div className="nav-shop" style={{zIndex:"10"}}>
    <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
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
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout1} type="text" name="gout1" >
              <option defaultValue>  GOUT GLACE (1)</option>
              <option value="vanille madagascar" >vanille madagascar</option>
              <option value="Créme caramel" >Créme caramel</option>
              <option value="Nougatine">Nougatine</option>
              <option value="Stracciatella" >Stracciatella</option>
              <option value="Yaourt" >Yaourt</option>
              <option value="Chocolat noir 70%" >Chocolat noir 70%</option>
              <option value="Pistache" >Pistache</option>
              <option value="Noisette" >Noisette</option>
              <option value="Praliné" >Praliné</option>
              <option value="Tiramisu" >Tiramisu</option>
              <option value="Chocolat lait 40%" >Chocolat lait 40%</option>
              <option value="Amaréma" >Amaréma</option>
              <option value="Sorbet citron" >Sorbet citron </option>
              <option value="sorbet fraise" >sorbet fraise</option>
              <option value="Sorbet mangue" >Sorbet mangue</option>
              <option value="Sorbet framboise" >Sorbet framboise</option>
              <option value="Sorbet poire" >Sorbet poire</option>
              <option value="Sorbet coco/Ananas" >Sorbet coco/Ananas</option>
              
              
  </select>
  </label>
  <label>
  GOUT GLACE (2)
   <select data-id="domain-switcher" onChange={handelChange} value={input.gout2} type="text" name="gout2" >
              <option value="">GOUT GLACE (2)</option>
              <option value="vanille madagascar" >vanille madagascar</option>
              <option value="Créme caramel" >Créme caramel</option>
              <option value="Nougatine">Nougatine</option>
              <option value="Stracciatella" >Stracciatella</option>
              <option value="Yaourt" >Yaourt</option>
              <option value="Chocolat noir 70%" >Chocolat noir 70%</option>
              <option value="Pistache" >Pistache</option>
              <option value="Noisette" >Noisette</option>
              <option value="Praliné" >Praliné</option>
              <option value="Tiramisu" >Tiramisu</option>
              <option value="Chocolat lait 40%" >Chocolat lait 40%</option>
              <option value="Amaréma" >Amaréma</option>
              <option value="Sorbet citron" >Sorbet citron </option>
              <option value="sorbet fraise" >sorbet fraise</option>
              <option value="Sorbet mangue" >Sorbet mangue</option>
              <option value="Sorbet framboise" >Sorbet framboise</option>
              <option value="Sorbet poire" >Sorbet poire</option>
              <option value="Sorbet coco/Ananas" >Sorbet coco/Ananas</option>
  </select>
  </label>
  <label>
    GOUT GLACE (3)
    <select data-id="domain-switcher" onChange={handelChange} value={input.gout3}type="text" name="gout3" >
             <option value="">GOUT GLACE(3)</option>
             <option value="vanille madagascar" >vanille madagascar</option>
              <option value="Créme caramel" >Créme caramel</option>
              <option value="Nougatine">Nougatine</option>
              <option value="Stracciatella" >Stracciatella</option>
              <option value="Yaourt" >Yaourt</option>
              <option value="Chocolat noir 70%" >Chocolat noir 70%</option>
              <option value="Pistache" >Pistache</option>
              <option value="Noisette" >Noisette</option>
              <option value="Praliné" >Praliné</option>
              <option value="Tiramisu" >Tiramisu</option>
              <option value="Chocolat lait 40%" >Chocolat lait 40%</option>
              <option value="Amaréma" >Amaréma</option>
              <option value="Sorbet citron" >Sorbet citron </option>
              <option value="sorbet fraise" >sorbet fraise</option>
              <option value="Sorbet mangue" >Sorbet mangue</option>
              <option value="Sorbet framboise" >Sorbet framboise</option>
              <option value="Sorbet poire" >Sorbet poire</option>
              <option value="Sorbet coco/Ananas" >Sorbet coco/Ananas</option>
  </select>
  </label>
  <label>
  GOUT GLACE (4)
  <select data-id="domain-switcher" onChange={handelChange} value={input.gout4}type="text" name="gout4">
              <option value="">GOUT GLACE (4)</option>
              <option value="vanille madagascar" >vanille madagascar</option>
              <option value="Créme caramel" >Créme caramel</option>
              <option value="Nougatine">Nougatine</option>
              <option value="Stracciatella" >Stracciatella</option>
              <option value="Yaourt" >Yaourt</option>
              <option value="Chocolat noir 70%" >Chocolat noir 70%</option>
              <option value="Pistache" >Pistache</option>
              <option value="Noisette" >Noisette</option>
              <option value="Praliné" >Praliné</option>
              <option value="Tiramisu" >Tiramisu</option>
              <option value="Chocolat lait 40%" >Chocolat lait 40%</option>
              <option value="Amaréma" >Amaréma</option>
              <option value="Sorbet citron" >Sorbet citron </option>
              <option value="sorbet fraise" >sorbet fraise</option>
              <option value="Sorbet mangue" >Sorbet mangue</option>
              <option value="Sorbet framboise" >Sorbet framboise</option>
              <option value="Sorbet poire" >Sorbet poire</option>
              <option value="Sorbet coco/Ananas" >Sorbet coco/Ananas</option>
  </select>
  </label>
 <label>
     Quantité
     <input type="Number"placeholder="quantié" onChange={handelChange} value={input.quantite} name="quantite"/>
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





    </div>)
}
export default ProdbyID;
