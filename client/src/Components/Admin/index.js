import React from 'react';
import {Navlink, link} from 'react-router-dom';
import './admin.css';
import MySidebar from '../MySidebar';
import '../../index.css';
import { Container } from 'react-bootstrap';
const Admin=()=>{

return(<div className="admin">
    <h1>Bienvenue à Amogela Administration</h1>

<div className="admin-background"><img src="/images/logoamo.png" className="admin-background-image"/></div>

<MySidebar usertype="Admin"/>



</div>

)


}
export default Admin;