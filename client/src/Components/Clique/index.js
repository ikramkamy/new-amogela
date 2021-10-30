import React,{useState,useEffect} from 'react';
import {FaHome,FaBicycle,  FaLocationArrow, FaArrowCircleLeft} from "react-icons/fa";
import './mod.css';
import  DatePicker from "react-datepicker";
import { now } from 'mongoose';
import moment from 'moment';
import {addCommande} from '../../actions/productActions';
import Signin from '../Signin';
import {setSeconds, setMinutes,setHours, startOfDay} from "date-fns";
import { useHistory } from 'react-router-dom';
const Clique=(props)=>{
const {emporte,dilevery,show}=props;
const token=localStorage.getItem('token');
const history = useHistory();
    var counter = 0;
    const trans = 300;
    var num = trans * counter;
    var date = new Date();
    var time=date.getTime();
date.setDate(date.getDate() + 1);
const[start,setStart]=useState(date.setDate(date.getDate()))
const [startDate, setStartDate] = useState(
  setHours(setMinutes(new Date(), 0), 8)
);

    //const[show,setShow]=useState(true);
   // const [dilevery,setDilevery]=useState(false);
    const [wilaya,setWilaya]=useState(false);
    const [wilaya2,setWilaya2]=useState(false);
   // const [emporte,setEmporte]=useState(false);
    const handelwilaya=()=>{
      setWilaya(true);
      setWilaya2(false);
    }
    const handelwilaya2=()=>{
       
       setWilaya(false)
       setWilaya2(true);
    }
    const choiseDilivery=()=>{
      /*  setDilevery(!dilevery)
        setShow(false)
        setEmporte(false)*/
        commande.command="livraison";
        
    }
    const choiceEmporte=()=>{
        /*setEmporte(!emporte) 
        setShow(false)
        setDilevery(false)*/
       commande.command="Emporte"
      
    }
    const goback=()=>{
       /* setShow(true)*/
       /* setDilevery(false)
        setEmporte(false) */
    }

    useEffect(()=>{
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        })
    
        
       }) 
       const [input,setInput]=useState({
commune:"",
commune2:""
})
     
       const handelChange=(event)=>{
      const {name,value}=event.target;
      const comm=document.querySelector("#boumerdes");
        setInput({commune:comm.value}


        )
        console.log("input commune value",input)
        }
const handelChange2=(event)=>{
input.commune2=event.target.value;
console.log("COMMUNE ALGER",input)
}
const[commande,setCommande]=useState({
          command:"",
          date:date,
          wilaya:"",
          lieux:"",
        })
       
 const  handelvalidateEmporte=()=>{
if(token===null){
  alert("Vous n'etes pas Signin 😵")
  history.push('/signin')
  
  
}else {
  commande.command= "Emporté";
  if(commande.date==date || commande.command==""){
    alert("selectioner la date et l'heure SVP")
  }else{
    commande.date=start;
     console.log("CLIQU2 ET RETIRE",commande)
   addCommande(commande,token)
   alert("Nous avons enregistré la date et l'heure de votre commande 😇")
   history.push("/shop")
  }
          }
        }


const handelvalidateLivraison=()=>{
  if(token===null){
    alert("Vous n'etes pas Signin 😵")
    history.push('/signin')
    
    
  }else {
    commande.command="Livraison";
    commande.date=start;
if(dilevery==true){

  if(wilaya==true){
    alert("nous somme dans la livraison alger")
   commande.wilaya="Alger";
    commande.lieux=input.commune2;
  
      console.log("LIVRAISON-ALGER",commande)
    addCommande(commande,token)
    alert("Nous avons enregistré la date et l'heure et l'adresse de votre commande 😇")
    history.push("/shop")
  }
  else if(wilaya2==true)
  
  {   
    commande.command="Livraison"
   //commande.date=start;
    commande.wilaya="Boumerdes";
    commande.lieux=input.commune;
    setCommande({
    command: "Livraison",
    date:start,
    wilaya:"Boumerdes",
    commune:input.commune,
  })}
  console.log("LIVRAISON-BOUMERDES",commande)
  addCommande(commande,token)
  alert("Nous avons enregistré la date et l'heure et l'adresse de votre commande 😇")
  history.push("/shop")
}
}
}
return(
    <div>
    <div className="js-btn"></div>
<div class="modal">
    {show &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <p>Comment voulez-vous récupérer votre commande?</p>
    <div className="choice-box">
<div className="emporte" onClick={choiceEmporte} ><FaHome/>A emporté</div>
<div className="livraison-btn" onClick={choiseDilivery} ><FaBicycle/> Livraison</div>


    </div>
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid">Valider</div>
   </div>)

    }
    {emporte &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d",cursor:"pointer"}}/>

     <h4>Cliqué et retiré</h4>
     <h3>Récupérez votre commande aprés 24h</h3>
    
     <div className="wrap-date-picker">
   
     <DatePicker className="date-picker"
      
     selected={start}
     onChange={(date) => {setStart(date) }}
     placeholderText="seléctionez "
     dateFormat="Pp"
     minDate={date} 
     dateFormat="d MMMM , yyyy h:mm aa"
     timeIntervals={60}
     timeFormat="HH:mm"
     minTime={setHours(setMinutes(new Date(), 0), 14)}
     maxTime={setHours(setMinutes(new Date(), 30), 22)}
     showTimeSelect
     timeCaption="time"
   />
   </div>
   
   
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid" onClick={handelvalidateEmporte}>Valider</div>
   </div>)

    }
      {dilevery &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d",cursor:"pointer"}}/>
     <h3>la livraison est disponible pour ces endroits</h3>
     <div className="choice-box">
     <div className="emporte"  onClick={handelwilaya} ><FaLocationArrow/>Alger</div>
     <div className="emporte" onClick={handelwilaya2}><FaLocationArrow/> Boumerdes</div>
     </div>
    
     {wilaya &&(<div  className="wrap-new-wilaya" >
      <div className="wrap-date-picker">
   
   <DatePicker className="date-picker"
    
    selected={start}
    onChange={(date) => {setStart(date) }}
    placeholderText="seléctionez"
    dateFormat="Pp"
    minDate={date} 
    filterDate={date=>date.getDay() !== 0 && date.getDay() !== 2 && date.getDay() !== 1 && date.getDay() !== 3 && date.getDay() !== 6 && date.getDay() !== 5}
    dateFormat="d MMMM , yyyy h:mm aa"
    timeIntervals={60}
    timeFormat="HH:mm"
    minTime={setHours(setMinutes(new Date(), 0), 14)}
    maxTime={setHours(setMinutes(new Date(), 30), 22)}
    showTimeSelect
    timeCaption="time"
 />
 </div> 
    <select  className="select-style" type="text"
     name="commune2" value={input.commune2} onChange={handelChange2}>
    <option value="">choisissez une commune</option>
    <option value="Alger-centre">Alger-centre</option>
    <option value="Draria">Draria</option>
    
     </select>
     </div>)}



     {wilaya2 && (<div  className="wrap-new-wilaya">
      <div className="wrap-date-picker">
   
   <DatePicker className="date-picker"
    
    selected={start}
    onChange={(date) => {setStart(date) }}
    placeholderText="seléctionez "
    dateFormat="Pp"
    minDate={date} 
    dateFormat="d MMMM , yyyy h:mm aa"
    timeIntervals={60}
    timeFormat="HH:mm"
    minTime={setHours(setMinutes(new Date(), 0), 14)}
    maxTime={setHours(setMinutes(new Date(), 30), 22)}
    showTimeSelect
    timeCaption="time"
 />
 </div> 
      <select id="boumerdes" className="select-style" placeholder="Boumerdes-communes" name="commune" value={input.commune} onChange={handelChange}>
     <option  selected value="boumerdes 01">boumerdess 01</option>
     <option value="boumerdes 02">boumerdes 02</option>
     <option value="boumerdes 03">boumerdes 03</option>
     <option value="boumerdes 04">boumerdes 04</option>
     </select>
     </div>)}
   
    <div className="box-cmd-text"><FaHome/>Adresse amogela</div>
    <div className="btn-box-valid" onClick={handelvalidateLivraison}>Valider</div>
   </div>)

    }


</div>

<div className="js-btn"></div>
<div class="modal">

   <div class="modal_content-signin">
   <span class="close3">&times;</span>
     
    <Signin/>
     
   </div>
</div>
</div>
)

}
export default Clique;