import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    font-size: 28px;
`;

export const Button = styled(Link) `
    font-size: 16px;
    text-transform: uppercase;
    background-color: rgba(172, 207, 207, 0.842);
    padding: 10px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    &:hover {
        background-color: rgba(100, 170, 170, 0.842);
    }
    border-radius: 50px;
    cursor: pointer;
    text-decoration: none;
    width: 300px;
`;

export const ListUsers = styled.ul `
    width: 560px;
    border-top: 1px solid #ccc;
`