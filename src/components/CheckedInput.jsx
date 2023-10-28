import React from 'react'
import styled from 'styled-components'

export default function CheckedInput({type, value}) {
  return (
    <StyledInputCheckBox type={type}></StyledInputCheckBox>
  )
}

const StyledInputCheckBox = styled.input`
background: red;
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
height: 20px;
margin: 10px;
`