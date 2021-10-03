import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
const GoutEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        
      <TextInput disabled source="id" />
        <TextInput required source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default GoutEdit;