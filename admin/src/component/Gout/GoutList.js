import React from 'react';
import { alpha } from '@material-ui/core/styles';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const GoutList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="name" />
        <TextField source="id" />
       
        <EditButton label="Edit" basePath="/gouts"/>
        <DeleteButton label="Delete" basePath="/gouts"/>
      </Datagrid>
    </List>
  );
};

export default GoutList;