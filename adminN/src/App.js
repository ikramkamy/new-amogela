import React,{useState,useEffect} from 'react' 

import './App.css';
import { Admin,Resource, ListGuesser ,MenuItemLink,Layout } from 'react-admin';
import { fetchUtils } from 'ra-core';
import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import {UserList} from './component/Users.js';
import  ProduitssList from "./component/ProsuitsStock/ProduitssList";
import dataProvider from './dataProvider';
import jsonapiClient from "ra-jsonapi-client";
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
import {FaIceCream,FaGlasses,FaJediOrder,FaCube,FaProductHunt,FaTasks,FaImage } from "react-icons/fa";
import {GoutEdit} from './component/Gout/GoutEdit.js';
import {ClickList} from './component/Click/ClickList';
import {LivraisonList} from './component/Livraison/LivraisonList';
import {ProList} from './component/Pro/ProList';
import {PhotoPageList} from './component/PhotoPage/PhotoPageList';
import ProduitEdit from './component/ProsuitsStock/ProduitEdit';
/*
const dataProvider = function () {
  const authToken="";
  const dataProvider = hasuraDataProvider("http://localhost:3001", { "content-type": "application/json","Authorization": "Bearer " +  authToken});
  return dataProvider;
}
*/

function App() {
 
  return (
   
    <Admin dataProvider={dataProvider} >
     
    
    
        <Resource
        name="notes"
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
        edit={ProduitssList}
        list={ProduitssList}
        icon={FaProductHunt}
        />
         <Resource
        name="Barquettes"
        list={ProduitssList}
        icon={FaCube}
        />
         <Resource
        name="gouts"
        list={GoutList}
        create={GoutCreate}
        edit={GoutEdit}
        icon={FaIceCream}
        />
            <Resource
        name="click-retirezs"
        list={ClickList}
        icon={FaTasks}
        />
           <Resource
        name="livraison"
        list={LivraisonList}
        icon={FaJediOrder}
        />
     <Resource
        name="commandePro"
        list={ProList}
        icon={FaGlasses}
        />
         <Resource
        name="photoPages"
        list={PhotoPageList}
        icon={FaImage}
        />
     </Admin>

  );
}

export default App;
