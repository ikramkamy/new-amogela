import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
const NotesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
      <TextInput disabled source="id" />
           <TextInput required source="text"/>
      </SimpleForm>
    </Edit>
  );
};

export default NotesEdit;