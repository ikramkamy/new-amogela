import React, { useState, useContext,useEffect } from 'react';
import './product.css';
import axios from "axios";
import { FaShoppingBag,FaWindowClose} from "react-icons/fa";
import Produit from "../Produit";
import Produitstock from "../Produit/Produitstock";
import "./product.css";
import Footer from '../Footer';
import Filter from "../Filter";
import { getProductsBycath } from "../../actions/productActions";
import Mynavbar from '../Mynavbar';
import ShopinCart from '../Shopingcart';
import { Link } from 'react-router-dom'
import {addproduct} from '../../actions/productActions';
import Signin from '../Signin';
export const Product2=()=>{
const [barquette,setBarquette]=useState([]);
 const [isOpen, setIsOpen] = useState(false);
 const [cartlength,setCartlength]=useState(0);
 const [increment,setIncrement]=useState(0);
  
  useEffect(() => {     
    const getData = async () => {  
      await axios.get("/cathegorie/Barquette")  
      .then(res => {  
        //console.log(res) 
        const data=res.data.data;
        setBarquette(data);
        //console.log("data barquettees is here",data)
      })  
      .catch(err => {  
        //console.log(err)  
      });  
    }  
 getData()  
  }, [])
  const Handelopne = () => {
    setIsOpen(!isOpen);
    setIncrement(increment+1);
    };
    const[usercart,setUsercart]=useState([]);
    const user_id=localStorage.getItem('user_id');
    useEffect(() => {
      const expensesListResp = async () => {
        await axios.get(`/getMycartUserprofile/${user_id}`)
        .then(response =>setUsercart(response.data))
    
         }
      expensesListResp();
    }, [increment]);
   
    const [mycart,setMycart]=useState([])
    useEffect(()=>{
      let n=0;
      setMycart(usercart.cart);
      mycart?.map((e)=>{n=n+e.quantity})
      setCartlength(n);
      
      }) 
    return(
    <div className="product" >
    
      <div className="nav-shop">
      <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </Link>

        
      </div>
      <div className="shoping-cart-icon">
       
      <div className="tite-panier" >{cartlength}</div>
         <FaShoppingBag className="icon-shoping"  onClick={Handelopne} />
         
        </div>
     <Mynavbar/>
      
<Filter />
     
      <div className="deco-th-style">
      <div className="shop-items">
      
{barquette?.map((e)=><Produit purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id}  />)}

</div>
      </div>
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
     
      <Footer/>
    </div>
  );
};

export const Product3=()=>{
const [products,setProducts]= useState([]);
const [isOpen, setIsOpen] = useState(false);
const [counter, setCounter] = useState(0);
const token=localStorage.getItem('token');
const [cartlength,setCartlength]=useState(0);
const [increment,setIncrement]=useState(0);

 const Handelopne = () => {
  setIsOpen(!isOpen);
  setIncrement(increment+1);
  };
useEffect(() => {     
  const getData = async () => {  
    await axios.get(`/findbycategorie/Escimau-biscuit`)  
    .then(res => {  
     // console.log(res) 
      const data=res.data.data;
      setProducts(data);
    })  
    .catch(err => {  
     // console.log(err)  
    });  
  }  
getData()  
}, [])
const handelClick=(product)=>{
  if(token===null){
    const modal = document.querySelector(".modal")
      const closeBtn3 = document.querySelector(".close3")
      modal.style.display = "block";
      closeBtn3.addEventListener("click", () => {
        modal.style.display = "none";
      })
  console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
  }else{
 addproduct(product,token)
  setIsOpen(true);
  setIncrement(increment+1);
  }
}
const[usercart,setUsercart]=useState([]);
const user_id=localStorage.getItem('user_id');
useEffect(() => {
  const expensesListResp = async () => {
    await axios.get(`/getMycartUserprofile/${user_id}`)
    .then(response =>setUsercart(response.data))

     }
  expensesListResp();
}, [increment]);

const [mycart,setMycart]=useState([])
useEffect(()=>{
  let n=0;
  setMycart(usercart.cart);
  mycart?.map((e)=>{n=n+e.quantity})
  setCartlength(n);
  
  }) 
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
        <img src="/images/logoamo.png" className="product-logo" />
      </Link>
</div>
    <div className="shoping-cart-icon">
    <div className="tite-panier" >{cartlength}</div>
     <FaShoppingBag className="icon-shoping"  onClick={Handelopne}/>
        
      </div>
    <Mynavbar/>
    
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products?.map((e)=><Produitstock purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => handelClick(e)} />)}
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
</div>
    </div>
    <div className="js-btn"></div>
<div class="modal">

   <div class="modal_content-signin">
   <span class="close3">&times;</span>
     
    <Signin/>
     
   </div>
</div>
   
    <Footer/>
  </div>
);
};


export const Product4=()=>{
 
  const [products4,setProducts4]= useState([]);
  const [isOpen, setIsOpen] = useState(false);
 const [counter, setCounter] = useState(0);
 const token=localStorage.getItem('token');
 const [cartlength,setCartlength]=useState(0);
 const [increment,setIncrement]=useState(0);
 const Handelopne = () => {
  setIsOpen(!isOpen);
  setIncrement(increment+1);
  };
useEffect(() => {     
  const getData = async () => {  
    await axios.get(`/findbycategorie/entremets-glace`)  
    .then(res => {  
      console.log(res) 
      const data=res.data.data;
      setProducts4(data);
    })  
    .catch(err => {  
      console.log(err)  
    });  
  }  
getData()  
}, [])

const handelClick=(product)=>{
  if(token===null){
    const modal = document.querySelector(".modal")
      const closeBtn3 = document.querySelector(".close3")
      modal.style.display = "block";
      closeBtn3.addEventListener("click", () => {
        modal.style.display = "none";
      })
  console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
  }else{
 addproduct(product,token)
  setIsOpen(true);
  setIncrement(increment+1);
  }
   
  }
  const[usercart,setUsercart]=useState([]);
  const user_id=localStorage.getItem('user_id');
  useEffect(() => {
    const expensesListResp = async () => {
      await axios.get(`/getMycartUserprofile/${user_id}`)
      .then(response =>setUsercart(response.data))
  
       }
    expensesListResp();
  }, [increment]);
 
  const [mycart,setMycart]=useState([])
  useEffect(()=>{
    let n=0;
    setMycart(usercart.cart);
    mycart?.map((e)=>{n=n+e.quantity})
    setCartlength(n);
    
    }) 
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
        <img src="/images/logoamo.png" className="product-logo" />
      </Link>

      
    </div>
    <div className="shoping-cart-icon">
     
    <div className="tite-panier" >{cartlength}</div>
     <FaShoppingBag className="icon-shoping" onClick={Handelopne}  />
     
    </div>
    <Mynavbar/> 
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products4?.map((e)=><Produitstock  purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => handelClick(e)}/>)}

</div>
    </div>
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

   <div class="modal_content-signin">
   <span class="close3">&times;</span>
     
    <Signin/>
     
   </div>
</div>
   
    <Footer/>
  </div>
);
};

export const Product5=()=>{
  
const [products5,setProducts5]= useState([]);
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);
const [cart,setCart]=useState([{}]);
const token=localStorage.getItem('token');
const [cartlength,setCartlength]=useState(0);
const [increment,setIncrement]=useState(0);

  const Handelopne = () => {
    setIsOpen(!isOpen);
    setIncrement(increment+1);
    };
useEffect(() => {     
  const getData = async () => {  
    await axios.get(`/findbycategorie/chocolat-confiserie`)  
    .then(res => {  
      console.log(res) 
      const data=res.data.data;
      setProducts5(data);
    })  
    .catch(err => {  
      console.log(err)  
    });  
  }  
getData()  
}, [])
const handelClick=(e)=>{
  if(token===null){
    const modal = document.querySelector(".modal")
      const closeBtn3 = document.querySelector(".close3")
      modal.style.display = "block";
      closeBtn3.addEventListener("click", () => {
        modal.style.display = "none";
      })
  console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
  }else{
 addproduct(e,token)
  setIsOpen(true);
  setIncrement(increment+1);
  }
}
const[usercart,setUsercart]=useState([]);
const user_id=localStorage.getItem('user_id');
useEffect(() => {
  const expensesListResp = async () => {
    await axios.get(`/getMycartUserprofile/${user_id}`)
    .then(response =>setUsercart(response.data))

     }
  expensesListResp();
}, [increment]);

const [mycart,setMycart]=useState([])
useEffect(()=>{
  let n=0;
  setMycart(usercart.cart);
  mycart?.map((e)=>{n=n+e.quantity})
  setCartlength(n);
  
  }) 
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
          <img src="/images/logoamo.png" className="product-logo" />
        </Link>

      
    </div>
    <div className="shoping-cart-icon">
     
    <div className="tite-panier" >{cartlength}</div>
     <FaShoppingBag className="icon-shoping" onClick={Handelopne} />
     
     
    </div>
    <Mynavbar/>
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products5?.map((e)=><Produitstock addproduct={() => handelClick(e)} purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id}  />)}

</div>
    </div>
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

   <div class="modal_content-signin">
   <span class="close3">&times;</span>
     
    <Signin/>
     
   </div>
</div>
   
    <Footer/>
  </div>
);
};



