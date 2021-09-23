import React from 'react';
import { List, Datagrid, TextField, EmailField,EditButton,DeleteButton } from 'react-admin';

export const UserList = (props) =>{
    return(
    <List {...props}>

     <Datagrid rowClick="edit">
         
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" /> 
            
</Datagrid>


    </List>
)}