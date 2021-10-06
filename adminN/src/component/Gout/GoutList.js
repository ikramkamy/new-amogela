import React from 'react';
import { alpha } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const GoutList = (props) => {


  const handelClick=()=>{
    
  }
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="name" />
        <TextField source="id" />
       <button onClick={handelClick}><Link to={`/gouts/1`} >Edit</Link></button>
        <EditButton  onClick={handelClick} label="Edit" basePath="gouts" />
        <DeleteButton label="Delete" basePath="/gouts"/>
      </Datagrid>
    </List>
  );
};

export default GoutList;