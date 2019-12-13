import React, { useState } from 'react';
import { Input, Form, Submit, ButtonBack } from './styles';
import { Title } from '../../pages/Dashboard/styles';
import api from '../../services/api';


export default function NewUser({ history }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    const response = await api.post('/users', { name, email, gender, age });
    console.log(response.data.errors);
    if(response.data.errors){
      setErrors(response.data.errors);
    } 
    history.push('/');
  }

  return (
    <>
        <Title> Novo usuário </Title>
        <Form onSubmit={ handleSubmit }>
          <div>
            { <span>errors</span> && <span></span>}
          </div>
          <Input type="text" placeholder="Nome" name="name" 
          onChange={ event => setName(event.target.value) } />

          <Input type="text" placeholder="Idade" name="age" 
          onChange={ event => setAge(event.target.value) } />

          <Input type="text" placeholder="Sexo" name="gender" 
          onChange={ event=> setGender(event.target.value) } />
          
          <Input type="text" placeholder="Email" name="email" 
          onChange={ event => setEmail(event.target.value) } />

          <Submit type="submit"> Enviar </Submit>
          <ButtonBack to="/">Voltar</ButtonBack>
        </Form>
    </>
  );
}
