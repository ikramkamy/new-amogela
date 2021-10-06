import React from 'react';
import { alpha } from '@material-ui/core/styles';
import {List,Datagrid,TextField,EditButton,DeleteButton,} from 'react-admin';

const NotesList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
     
        <TextField source="text" />
        <EditButton label="Edit" basePath="/notes" />
        <DeleteButton label="Delete" basePath="/notes" />
      </Datagrid>
    </List>
  );
};

export default NotesList;