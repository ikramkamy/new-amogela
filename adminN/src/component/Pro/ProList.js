import React from 'react';
import { List, Datagrid, TextField, EmailField,EditButton,DeleteButton } from 'react-admin';

export const ProList = (props) =>{
    return(
    <List {...props}>

     <Datagrid rowClick="edit">
         
            <TextField source="_id" />
            <TextField source="somme"/>
            <TextField label="User" source="user[0].firstName"/>
            <TextField label="Télephone" source="user[0].phone"/>
            <TextField label="Achats" source="cart.length"/>
             <TextField label="Date" source="time"/>
             <TextField label="Adresse" source="address"/>
             <EditButton label="Edit" basePath="/click-retirezs"/>
        <DeleteButton label="Delete" basePath="/click-retirezs"/>
</Datagrid>


    </List>
)}