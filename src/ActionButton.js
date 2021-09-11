import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   background: ${props => props.col};
   width: 5.5rem;
   height: 5rem;
   border-radius: 50%;
   padding: .2rem;
   display: grid;
   place-items: center;
   color: white;
   position: absolute;
   right: -2rem;
   top: 15rem;
   cursor: pointer;
   
`

const ActionButton = ({ clickFunc, icon, col }) => {
   return (
      <Container onClick={clickFunc} col={col}>
         {icon}
      </Container>
   )
}
export default ActionButton
