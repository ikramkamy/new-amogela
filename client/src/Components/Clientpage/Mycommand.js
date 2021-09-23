import React from 'react';
const Mycommand =(props)=>{

    return(<div className="mycommand" >
<div>{props.name}</div>
<div>{props.somme}</div>
<div>{props.user}</div>
<div>{props.time}</div>

    </div>)
}
export default Mycommand;