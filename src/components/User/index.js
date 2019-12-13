import React from 'react';
import { Label, DeleteButton, ItemList } from './styles';

export default function User({id, name, handleDelete}) {
  return (
    <>
      
          <ItemList key={id}  >
              <Label 
                to={{ 
                  pathname: "/details", 
                  user : { id }
                }}
              > 
                  Id: { id } { name } 
              </Label>
              <DeleteButton onClick={ () => handleDelete(id) } >Excluir</DeleteButton>
          </ItemList>
      
    </>
  );
}
