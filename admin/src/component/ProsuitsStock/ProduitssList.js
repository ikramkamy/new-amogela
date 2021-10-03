import React from 'react';
import { alpha } from '@material-ui/core/styles';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,

} from 'react-admin';

const ProduitssList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
         
      <TextField source="name" />
         <TextField source="_id" />
         <TextField source="img" />
         
         <EditButton label="Edit" />
        <DeleteButton label="Delete" />
         
</Datagrid>
    </List>
  );
};

export default ProduitssList ;