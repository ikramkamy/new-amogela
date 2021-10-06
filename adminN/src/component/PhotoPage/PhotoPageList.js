import React from 'react';
import { List, Datagrid, TextField, EmailField,EditButton,DeleteButton } from 'react-admin';

export const PhotoPageList = (props) =>{
    return(
    <List {...props}>

     <Datagrid rowClick="edit">
         
            <TextField source="photo" />
           <EditButton label="Edit" basePath="/click-retirezs"/>
           <DeleteButton label="Delete" basePath="/click-retirezs"/>
</Datagrid>


    </List>
)}