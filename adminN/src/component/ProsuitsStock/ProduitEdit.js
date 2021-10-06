import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
const ProduitEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm >
        
           <TextInput required source="name" />
           <TextInput required source="prix" />
           
      </SimpleForm>
    </Edit>
  );
};

export default ProduitEdit;