import React,{useState,useEffect} from 'react';
import {FaHome,FaBicycle,  FaLocationArrow, FaArrowCircleLeft} from "react-icons/fa";
import Select from 'react-select';
import './mod.css';
import  DatePicker from "react-datepicker";
import { now } from 'mongoose';
import moment from 'moment';

import {setSeconds, setMinutes,setHours, startOfDay} from "date-fns";
const Clique=(props)=>{
const {emporte,dilevery,show}=props;
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
    }
    const choiseDilivery=()=>{
      /*  setDilevery(!dilevery)
        setShow(false)
        setEmporte(false)*/
        input.commande="livraison";
    }
    const choiceEmporte=()=>{
        /*setEmporte(!emporte) 
        setShow(false)
        setDilevery(false)*/
        input.commande="emporte"
    }
    const goback=()=>{
       /* setShow(true)*/
       /* setDilevery(false)
        setEmporte(false) */
    }
    const options = [
        { value: 'jeudi', label: 'jeudi' },
        { value: 'lundi', label: 'lundi' },
       ]
    const options2=[{ value: '15:30', label: '15:30'}]
    const comAlger=[{value: 'Alger-centre', label: 'Alger-centre'},
    {value: 'Draria', label: 'Draria'}
    ]
    const comBoumerdess=[{value: 'boumerdes', label: 'boumerdes'},
    {value: 'boumerdes', label: 'boumerdes'}]
    useEffect(()=>{
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        })
    
        
       }) 
       const [input,setInput]=useState({
        commande:"Livraison",
        wilaya:"",
        date:start,
        commune:"",
        commune2:""
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

        const[commande,setCommande]=useState({
          command:"",
          date:date,
          wilaya:"",
          lieux:"",
        })
       
    const  handelvalidateEmporte=()=>{
      commande.command= "Emporté";
     if(commande.date==date || commande.command==""){
       alert("selectioner la date et l'heure SVP")
     }else{
      commande.date=start;
     setCommande({
              command: "Emporté",
              date:start,
            })
        console.log("CLIQU2 ET RETIRE",commande)
        
          
      }
          }
const handelvalidateLivraison=()=>{
if(dilevery==true){
  if(wilaya==true){
    setCommande({
      command: "Livraison",
      date:start,
      wilaya:"Alger",
      lieux:input.commune,
    })
    console.log("LIVRAISON-ALGER",commande)
  }
  else if(wilaya2==true)
  
  { setCommande({
    command: "Livraison",
    date:start,
    wilaya:"Boumerdes",
    commune:input.commune2,
  })}
  console.log("LIVRAISON-BOUMERDES",commande)
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
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>

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
   minTime={setHours(setMinutes(new Date(), 0), 8)}
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
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>
     <h3>la livraison est disponible pour ces endroits</h3>
     <div className="choice-box">
     <div className="emporte"  onClick={handelwilaya} ><FaLocationArrow/>Alger</div>
     <div className="emporte" onClick={handelwilaya2}><FaLocationArrow/> Boumerdes</div>
     </div>
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
    minTime={setHours(setMinutes(new Date(), 0), 8)}
    maxTime={setHours(setMinutes(new Date(), 30), 22)}
    showTimeSelect
    timeCaption="time"
 />
 </div>
     {wilaya &&(<select  className="select-style" type="text" name="commune" value={input.commune} onChange={handelChange}>
     {comAlger.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} 

     </select>)}



     {wilaya2 && ( <select className="select-style" placeholder="Boumerdes-communes" name="commune2" value={input.commune2} onChange={handelChange}>
     {comBoumerdess.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}

     </select>)}
   
    <div className="box-cmd-text"><FaHome/>Adresse amogela</div>
    <div className="btn-box-valid" onClick={handelvalidateLivraison}>Valider</div>
   </div>)

    }


</div>
</div>
)

}
export default Clique;