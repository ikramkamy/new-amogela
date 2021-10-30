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
const CliqueAll=(props)=>{

const[emporte,setEmporte]=useState(false);
const [dilevery,setDilevery]=useState(false);
const [show,setShow]=useState(true);
const isWeekday = date => {
  let d= new Date();
  const day = d.getDay(date);
  return  day != 0 && day != 1 && day != 2 && day != 3;
};

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
const [input,setInput]=useState({
  commande:"Livraison",
  wilaya:"",
  date:date,
  commune:"",
  commune2:""
})
    //const[show,setShow]=useState(true);
   // const [dilevery,setDilevery]=useState(false);
    const [wilaya,setWilaya]=useState(false);
    const [wilaya2,setWilaya2]=useState(false);
   // const [emporte,setEmporte]=useState(false);
    const handelwilaya=()=>{
       input.wilaya="Alger";
       input.commande="livraison";
      
       setWilaya(true)
       setWilaya2(false);
    }
    const handelwilaya2=()=>{
       input.wilaya="Boumerdes";
       input.commande="livraison";
       setWilaya(false)
       setWilaya2(true);
       console.log("INPUT step 02",input)
    }
    const choiseDilivery=()=>{
      /*  setDilevery(!dilevery)
        setShow(false)
        setEmporte(false)*/
        input.commande="livraison";
        setDilevery(true);
        setShow(false);
        console.log("INPUT step 01",input)
    }
    const handelChange2=(event)=>{
      input.commune2=event.target.value;
      console.log("INPUT step 03",input)
    }
   /***************************************************************************************** */   
    const choiceEmporte=()=>{
        /*setEmporte(!emporte) 
        setShow(false)
        setDilevery(false)*/
        input.commande="emporte"
      setEmporte(true);
      setShow(false);
    }
    const goback=()=>{
        setShow(true)
        setDilevery(false)
        setEmporte(false) 
    }
   
    
    const [comAlger,setComAlger]=useState(
      [
    {value: 'Alger-centre', label: 'Alger-centre'},
    {value: 'Ben-Aknoun', label: 'Ben-Aknoun'},
    {value: 'Draria', label: 'Draria'}
    ])
   
    useEffect(()=>{
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        })
    }) 
 /*********************************************************ENVOYER LA COMMANDE********************************************** */   
    const[commande,setCommande]=useState({
      command:"",
      date:start,
      wilaya:"",
      lieux:"",
    })
   
       const handelChange=(event)=>{
      input.commune=event.target.value;
    console.log("INPUT step 04",input)
        }
     
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
  commande.command="Livraison";
  commande.date=start;
  if(date.getDay()==3){
    alert("votre commande sera livrer le jeudi prochain")
  }
if(dilevery==true){
  if(wilaya==true){
  
    commande.wilaya="Alger";
    commande.lieux=input.commune;
    alert("Nous avons enregistré la date et l'heure et l'adresse de votre commande 😇");
    console.log("LIVRAISON-ALGER",commande)
    addCommande(commande,token)
    history.push("/shop")
  }
  else if(wilaya2==true){ 
    commande.wilaya="Boumerdess";
    commande.lieux=input.commune2; 
  }
  
  console.log("LIVRAISON-BOUMERDES",commande)
  addCommande(commande,token)
  alert("Nous avons enregistré la date et l'heure et l'adresse de votre commande 😇")
  history.push("/shop")
}
}
return(
    <div>
    <div className="js-btn"></div>
<div class="modal">
    {show &&(<div class="modal_content_cmd">
     <span class="close">{/*&times;*/}</span>
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
     <span class="close">{/*&times;*/}</span>
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
     <span class="close">{/*&times;*/}</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d",cursor:"pointer"}}/>
     <h3>la livraison est disponible pour ces endroits</h3>
     <div className="choice-box">
     <div className="emporte"  onClick={handelwilaya} ><FaLocationArrow/>Alger</div>
     <div className="emporte" onClick={handelwilaya2}><FaLocationArrow/> Boumerdes</div>
     </div>
    
     {wilaya &&(<div className="wrap-new-wilaya">
       <div className="wrap-date-picker">
   
       <DatePicker className="date-picker"
        
        selected={start}
        onChange={(date) => {setStart(date) }}
        placeholderText="seléctionez "
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
    <select  className="select-style" 
     name="commune" value={input.commune} onChange={handelChange}>
     {comAlger.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} 

     </select>
     </div>)}



     {wilaya2 && (<div className="wrap-new-wilaya">
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
     <select 
     className="select-style" 
      name="commune2" value={input.commune2} onChange={handelChange2}>
     <option value="boumerdes 01">boumerdess 01</option>
     <option value="boumerdes 02">boumerdes 02</option>
     <option value="boumerdes 03">boumerdes 03</option>
     <option value="boumerdes 04">boumerdes 04</option>
     </select>
     </div> 
     )}
   
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
export default CliqueAll;