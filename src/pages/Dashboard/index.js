import React, { useState, useEffect } from 'react';
import { Title, Button, ListUsers} from './styles';
import api from '../../services/api';
import User from '../../components/User';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/');
      console.log(response.data);
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  async function handleDelete(id){
    const response = await api.delete(`/users/${id}`);
    
    console.log(response.data);
    
    const aux = users.filter( user => id !== user.id);
    setUsers(aux);
  }

  return (
    <>
        <Title>Usuários</Title>
        <ListUsers>
            { users.map(user => (
              <User
              key={ user.id }
                id={ user.id }
                name={ user.name }
                handleDelete={ handleDelete }
              />
            ))
            }
        </ListUsers>

        <Button to="/new" > Criar Usuário </Button>
    </>
  );
}
