import React from 'react';
import {Navlink, link} from 'react-router-dom';
import { fetchUtils  } from 'react-admin';
import {fetchJson as httpClient} from './httpClient'
import { stringify } from 'query-string';
import './admin.css';
import MySidebar from '../MySidebar';
import '../../index.css';
import { Container } from 'react-bootstrap';
import { Admin,Resource,ListGuesse,Datagrid, TextField, EmailField   } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-simple-rest';
import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import {getUsers} from './dataProvider';

const Admin1=()=>{
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com/users');
    //const apiUrl = '/getallusers';
    //const httpClient = fetchUtils.fetchJson;
//const getUsers = jsonServerProvider('http://localhost:3000');
//const dataProvider=getUsers('http://localhost:3000',httpClient)
return(<div className="admin">
    <Admin dataProvider={dataProvider}>
    
   {/* <Resource name="barquettes" list={UserList}/>
    <Resource name="click-retirezs" list={UserList}/>
    <Resource name="click-retirezs" list={UserList}/>
    <Resource name="produits-sur-stocks" list={UserList}/>
<TextField name="username" list={UserList}/>*/}
    </Admin>

</div>

)


}
export default Admin1;