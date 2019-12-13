import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form `
    max-width: 600px;
    border-top: 1px solid #ccc;
`;

export const Input = styled.input`
    margin-top: 15px;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto; 
    padding: 5px;
    width: 300px;
    border-radius: 5px;
`;

export const Submit = styled.button `
    font-size: 16px;
    text-transform: uppercase;
    background: transparent;
    background-color: rgba(172, 207, 207, 0.842);
    padding: 3px;
    width: 300px;
    margin-top: 30px;
    &:hover {
        background-color: rgba(100, 170, 170, 0.842);
    }
    border-radius: 500px;
    border-width:0;
    cursor: pointer;
`;

export const ButtonBack = styled(Link)`
    margin-top: 20px;
    display: block;
    text-transform: uppercase;
    color: red;
    text-decoration: none;

    &:hover{
        color: #FF6347;
    }
`;