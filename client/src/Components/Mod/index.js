import React,{useState,useEffect} from 'react';
import {FaHome, FaShoppingBag,FaBicycle, FaBaby, FaLocationArrow, FaBackspace, FaRecycle, FaArrowCircleLeft} from "react-icons/fa";
import Select from 'react-select';
const Mod=()=>{

    var counter = 0;
    const trans = 300;
    var num = trans * counter;
    const[show,setShow]=useState(true);
    const [dilevery,setDilevery]=useState(false);
    const [wilaya,setWilaya]=useState(false);
    const [wilaya2,setWilaya2]=useState(false);
    const [emporte,setEmporte]=useState(false);
    const handelwilaya=()=>{
        setWilaya(true)
        setWilaya2(false)
    }
    const handelwilaya2=()=>{
        setWilaya(false)
        setWilaya2(true)
    }
    const choiseDilivery=()=>{
        setDilevery(!dilevery)
        setShow(false)
        setEmporte(false)
    }
    const choiceEmporte=()=>{
        setEmporte(!emporte) 
        setShow(false)
        setDilevery(false)
    }
    const goback=()=>{
        setShow(true)
        setDilevery(false)
        setEmporte(false) 
    }
    const options = [
        { value: 'jeudi', label: 'jeudi' },
        { value: 'lundi', label: 'lundi' },
       ]
    const options2=[{ value: '15:30', label: '15:30'}]
    const comAlger=[{value: 'Alger-centre', label: 'Alger-centre'},
    {value: 'Draria', label: 'Draria'}
    ]
    const comBoumerdess=[{value: 'Draria', label: 'Draria'},
    {value: 'Draria', label: 'Draria'}]
    useEffect(()=>{
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        })
    
        
       }) 
return(
    <div>
    <div className="js-btn"></div>
<div class="modal">
    {  show &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <p>Comment voulez-vous récupérer votre commande?</p>
    <div className="choice-box">
<div className="emporte" onClick={choiceEmporte} ><FaHome/>A emporté</div>
<div className="livraison-btn" onClick={choiseDilivery}><FaBicycle/> Livraison</div>


    </div>
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid">Valider</div>
   </div>)

    }
    {  emporte &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>
     <p>Quand voulez-vous récupérer votre commande?</p>
     A quelle date?
     <Select options={options} className="select-style"/>
   A quelle heure
   <Select options={options2} className="select-style"/>
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid">Valider</div>
   </div>)

    }
      { dilevery &&(<div class="modal_content_cmd">
     <span class="close">&times;</span>
     <FaArrowCircleLeft onClick ={goback} style={{color:"#c19a5d"}}/>
     <p>la livraison est disponible pour ces endroits</p>
     <div className="choice-box">
     <div className="emporte"  onClick={handelwilaya}><FaLocationArrow/>Alger</div>
     <div className="emporte" onClick={handelwilaya2}><FaLocationArrow/> Boumerdes</div>
     </div>
     {wilaya &&(<Select options={comAlger} className="select-style" placeholder="Alger-communes"/>)}
     {wilaya2 && ( <Select options={comBoumerdess} className="select-style" placeholder="Boumerdes-communes"/>)}
   
    <div className="box-cmd-text"><FaHome/>Adresse amogela,</div>
    <div className="btn-box-valid">Valider</div>
   </div>)

    }


</div>
</div>
)

}
export default Mod;