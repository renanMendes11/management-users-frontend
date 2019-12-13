import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Label = styled(Link) `
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 5px;
`

export const DeleteButton = styled.button `
    /* display: inline-flex; */
    /* justify-content: end;  */
    text-transform: uppercase;
    color: red;
    text-decoration: none;
    background-color: transparent;
    &:hover{
        color: #FF6347;
    }
    cursor: pointer;
    border: 0;

`
export const ItemList = styled.li `
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(200, 219, 219, 0.842);
    &:hover {
        background-color: rgba(100, 170, 170, 0.842);
    }
    cursor: pointer;
`