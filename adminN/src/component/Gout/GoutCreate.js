import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
const GoutCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" required />
         <TextInput source="id" required />
      </SimpleForm>
    </Create>
  );
};

export default GoutCreate;