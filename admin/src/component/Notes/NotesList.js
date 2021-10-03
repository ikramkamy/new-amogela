import React from 'react';
import { alpha } from '@material-ui/core/styles';
import {List,Datagrid,TextField,EditButton,DeleteButton,} from 'react-admin';

const NotesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
     
        <TextField source="text" />
        <EditButton label="Edit" basePath="/edit" />
        <DeleteButton label="Delete" basePath="/horaire" />
      </Datagrid>
    </List>
  );
};

export default NotesList;