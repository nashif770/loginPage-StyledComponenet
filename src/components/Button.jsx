import React from 'react'
import styled from 'styled-components'

export default function Button({content}) {
  return (
    <StyledButton>{content}</StyledButton>
  )
}

const StyledButton = styled.button`
background: #1575A7;
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 80%;
height: 3rem;
border: none;
color: white;
cursor: pointer;
`
