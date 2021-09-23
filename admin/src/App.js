import './App.css';
import { Admin,Resource, ListGuesser } from 'react-admin';
import { fetchUtils } from 'ra-core';
import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import {UserList} from './component/Users.js';
//import dataProvider from './dataProvider';
import lb4Provider from 'react-admin-lb4';
import hasuraDataProvider from 'ra-data-hasura';

const dataProvider = function () {
  const authToken="";
  const dataProvider = hasuraDataProvider("http://localhost:3001", { "content-type": "application/json","Authorization": "Bearer " +  authToken});
  return dataProvider;
}


function App() {

/*
appsmith react admin dashboead
https://www.youtube.com/watch?v=4y2FFEmPW7I
*/ 


  return (
   
    <Admin dataProvider={dataProvider}>
        <Resource name="simple_users" list={UserList}/>
     </Admin>

  );
}

export default App;
