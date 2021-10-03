import React,{useState,useEffect} from 'react' 

import './App.css';
import { Admin,Resource, ListGuesser ,MenuItemLink,Layout } from 'react-admin';
import { fetchUtils } from 'ra-core';
import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import {UserList} from './component/Users.js';
import  ProduitssList from "./component/ProsuitsStock/ProduitssList";
import dataProvider from './dataProvider';
import lb4Provider from 'react-admin-lb4';
import hasuraDataProvider from 'ra-data-hasura';
import NotesList from './component/Notes/NotesList';
import NotesEdit from './component/Notes/NotesEdit.js';
import NotesCreate from './component/Notes/NotesCreate.js';
import GoutCreate from './component/Gout/GoutCreate.js';
import GoutList from './component/Gout/GoutList';
import { alpha } from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/People';
import Alarm from '@material-ui/icons/Alarm';
import {FaIceCream } from "react-icons/fa";
import GoutEdit from './component/Gout/GoutEdit.js';
/*
const dataProvider = function () {
  const authToken="";
  const dataProvider = hasuraDataProvider("http://localhost:3001", { "content-type": "application/json","Authorization": "Bearer " +  authToken});
  return dataProvider;
}
*/

function App() {
 
  return (
   
    <Admin dataProvider={simpleRestProvider('http://localhost:3001/api')} >
     
    
    
        <Resource
        name="horaire"
        list={NotesList}
        edit={NotesEdit}
        
        create={NotesCreate}
        icon={Alarm}
       
      />
        <Resource
        name="utilisateurs"
        list={UserList}
        icon={UserIcon }
        />


        <Resource
        name="produitsStock"
        list={ProduitssList}
        icon={FaIceCream}
        />
         <Resource
        name="Barquettes"
        list={ProduitssList}
        icon={FaIceCream}
        />
         <Resource
        name="gouts"
        list={GoutList}
        create={GoutCreate}
        edit={GoutEdit}
        icon={FaIceCream}
        />

     </Admin>

  );
}

export default App;
