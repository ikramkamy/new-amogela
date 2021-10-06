import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
import axios from 'axios';
export const GoutEdit = (props) => {
  const handelClick=()=>{
 console.log("we are posting ")
      const gout={
      name:""  
      }
      
      axios.put("/api/gouts/:id",gout)
      .then(response => {
       console.log("post with axios succed")
      
      }).catch(error => {
        console.log("the raison of failure", error) 
      });
      }
return(
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput source="gouts"  />
         <button onClick={handelClick}>UPDATE</button>
      </SimpleForm>
  </Edit>
  )
};