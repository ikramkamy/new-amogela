import React, { useState, useContext,useEffect } from 'react';
import './product.css';
import axios from "axios";
import { FaShoppingBag, FaBars, FaFacebook, FaInstagram ,FaWindowClose} from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
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
    const [products,setProducts]= useState([]);
    const [cathegorie, setCathegorie]=useState("Barquette");
    const [menuOpenState, setMenuOpenState] = useState(false);
    const [items, setItems] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
   const [counter, setCounter] = useState(0);
  
  useEffect(() => {     
    const getData = async () => {  
      await axios.get(`/cathegorie/${cathegorie}`)  
      .then(res => {  
        console.log(res) 
        const data=res.data.data;
        setBarquette(data);
        console.log("data barquettees is here",data)
      })  
      .catch(err => {  
        console.log(err)  
      });  
    }  
 getData()  
  }, [])
  const Handelopne = () => {
    setIsOpen(!isOpen);
    };
    return(
    <div className="product" >
    
      <div className="nav-shop">
      <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>

        
      </div>
      <div className="shoping-cart-icon">
       
      
         <FaShoppingBag className="icon-shoping"  onClick={Handelopne} />
         
        </div>
     <Mynavbar/>
      
<Filter />
     
     <div className="deco-th-style">
      <div className="shop-items">
      
{barquette.map((e)=><Produit purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id}  />)}

</div>
      </div>
      {isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-shoping" onClick={Handelopne}/>
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
  const [barquette,setBarquette]=useState([]);
  const [products,setProducts]= useState([]);
  const [cathegorie, setCathegorie]=useState("Barquette");
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [items, setItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
 const [counter, setCounter] = useState(0);
 const Handelopne = () => {
  setIsOpen(!isOpen);
  };
useEffect(() => {     
  const getData = async () => {  
    await axios.get(`/findbycategorie/escimau-biscuit`)  
    .then(res => {  
      console.log(res) 
      const data=res.data.data;
      setProducts(data);
    })  
    .catch(err => {  
      console.log(err)  
    });  
  }  
getData()  
}, [])
const handelClick=(e)=>{
  addproduct(e)
}
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
        <img src="/images/logo.png" className="product-logo" />
      </Link>
</div>
    <div className="shoping-cart-icon">
     <FaShoppingBag className="icon-shoping"  onClick={Handelopne}/>
        <div className="items">{counter}</div>
      </div>
    <Mynavbar/>
    
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products.map((e)=><Produitstock purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => handelClick(e)} />)}
{isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-shoping" onClick={Handelopne}/>
</div> 
  
  <ShopinCart/>
  </div>
  </div>)
}
</div>
    </div>
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


export const Product4=()=>{
  const [barquette,setBarquette]=useState([]);
  const [products4,setProducts4]= useState([]);
  const [cathegorie, setCathegorie]=useState("Barquette");
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [items, setItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
 const [counter, setCounter] = useState(0);
 const [count, setCount] = useState(0);
 const [cart,setCart]=useState([{}]);
 const Handelopne = () => {
  setIsOpen(!isOpen);
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
/*
const addproduct=(product)=>{
  setCount(cart.length)
  console.log("we are in add to cart")
  setCart([...cart,product])
  console.log(cart)
  }
  */
  const handelClick=(e)=>{
    addproduct(e)
  }
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
        <img src="/images/logo.png" className="product-logo" />
      </Link>

      
    </div>
    <div className="shoping-cart-icon">
     
    
     <FaShoppingBag className="icon-shoping" onClick={Handelopne}  />
      <div className="items">{counter}</div>
    </div>
    <Mynavbar/> 
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products4.map((e)=><Produitstock  purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id} addproduct={() => handelClick(e)}/>)}

</div>
    </div>
    {isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-shoping" onClick={Handelopne}/>
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

export const Product5=()=>{
  const [barquette,setBarquette]=useState([]);
  const [products5,setProducts5]= useState([]);
  const [cathegorie, setCathegorie]=useState("Barquette");
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [items, setItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
 const [counter, setCounter] = useState(0);
 const [count, setCount] = useState(0);
 const [cart,setCart]=useState([{}]);
 const addproduct=(product)=>{
  setCount(cart.length)
  console.log("we are in add to cart")
  setCart([...cart,product])
  console.log(cart)
  }
  const Handelopne = () => {
    setIsOpen(!isOpen);
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
  addproduct(e)
}
  return(
  <div className="product" >
  
    <div className="nav-shop">
    <Link to="/" className="image-wrapper">
          <img src="/images/logo.png" className="product-logo" />
        </Link>

      
    </div>
    <div className="shoping-cart-icon">
     
   
     <FaShoppingBag className="icon-shoping" onClick={Handelopne} />
     
      <div className="items">{count}</div>
    </div>
    <Mynavbar/>
<Filter />
   
   <div className="deco-th-style">
    <div className="shop-items">
    
{products5.map((e)=><Produitstock addproduct={() => handelClick(e)} purl={e.img} pname={e.name} pprice={e.prix} prodID={e.__id}  />)}

</div>
    </div>
    {isOpen &&

(<div class="modal-side-shop">
<div className="side-shop" >
<div className="shoping-cart-icon">
<FaWindowClose className="icon-shoping" onClick={Handelopne}/>
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



