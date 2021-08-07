import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaFax, FaGem, FaHeart, FaHome, FaPersonBooth} from "react-icons/fa";
import axios from 'axios';
import './sidebar.css';


const MySidebar =(props)=>{
  async function getUser() {
    try {
      
      const response = await axios.get('/getallusers');
      console.log(response);
      
     console.log("we are fetcthing with axios")
    } catch (error) {
      console.error(error);
    }
  }
    
    return(
    <div className="sidebar">

<ProSidebar className="prosidbar">
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    <MenuItem icon={<FaPersonBooth />}><a className="admin-tit" onClick={getUser}>{props.usertype}</a></MenuItem>
    <MenuItem icon={<FaFax />}>Contact</MenuItem>
    <MenuItem icon={<FaFax />}><a href="/commands/getall">{props.commands}</a></MenuItem>
    <SubMenu title="Filiéres" icon={<FaHeart />}>
      <MenuItem>Solaire photovoltaique</MenuItem>
      <MenuItem>Recyclage des déchets</MenuItem>
      <MenuItem>Efficité energitique</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>

        
    </div>
    )
}
export default MySidebar;