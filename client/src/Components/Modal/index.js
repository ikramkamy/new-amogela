import React, {useState} from "react";
import  DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./modal.css";
import axios  from 'axios';
import moment from 'moment';
import ReactDOM  from "react-dom";
const Modal = (props) => {
  var date = new Date();
var m=date.getHours();
const now = moment().toDate();
  // add a day
  date.setDate(date.getDate() + 1);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const {open,close}=props;
  const [input, setInput] = useState({
    date:"",
    heure:""
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
  const handelClick = (event) => {
    event.preventDefault();
    console.log("we are posting ");
    const newCommand = {
      date:props.input.date,
      heure:""
    };
    console.log(newCommand);
    
    axios
      .post(`http://localhost:3001/clickretire`, newCommand)
      .then((response) => {
        console.log("fetch with axios succed");
      })
      .catch((error) => {
        console.log("the raison of failure", error);
      });
      
  };
  
  if(!open) return null
  return ReactDOM.createPortal(
    <div className="modal-container" >
      <div className="modal-content" >
        <div className="service-selected">Cliquez & Retirez <br/> Amogela</div>
        <h4>Choisissez la date et l'heure de votre commande SVP</h4>
        <div className="dialog-box">
     
        <DatePicker 
        className="date-picker" 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        showTimeSelect
  dateFormat="Pp" minDate={date} dateFormat="d MMMM , yyyy h:mm aa"/>
       <button onClick={props.close}> <a href="/shop">Voir les produits</a></button>
      <h6>lorsque vous clickez ici vous serez orienter vers la page shop</h6> 
 
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
};
export default Modal;
