import React from 'react'
import styled from 'styled-components';

export default function Input({type, placeholder, value}) {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value}></StyledInput>
  )
}


const StyledInput = styled.input`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
width: 100%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
margin: 20px 0;
font-size: 1rem;
font-weight: bold;
&::placeholder{
    color: gray;
    font-size: 1rem;
}
`