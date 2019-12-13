import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Title } from '../Dashboard/styles';
import { UserData } from './styles';
import { ButtonBack } from '../NewUser/styles';

export default function DetailUser({ location }) {
    const { id } = location.user;
    const [user, setUser] = useState({});

    useEffect(() => {
        async function loadUser(){
            const response = await api.get(`/details/${id}`);
            console.log(response.data);
            setUser(response.data);
        }
        loadUser();
    }, []);

    console.log(user)
    return (
        <>
            <Title>Detalhes</Title>
            <UserData>
                <p>ID: {user.id} </p>
                <p>Nome: {user.name} </p>
                <p>Email: {user.email} </p>
                <p>Idade: {user.age} </p>
                <p>Sexo: {user.gender} </p>
            </UserData>
            <ButtonBack to="/">Voltar</ButtonBack>
        </>
    );
}
