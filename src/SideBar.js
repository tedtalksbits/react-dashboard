import React, { useState } from 'react'
import Anime from 'react-anime'
import styled from 'styled-components'
import ActionButton from './ActionButton'
import { link_data } from './linkData'

const MainContainer = styled.nav`
   background: ${props => props.bGround || '#fff'};
   transition: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 400ms;
   position: absolute;
   z-index: 999;
   width: ${({ open }) => (open ? '355px' : '5rem')};
   height: 100vh;
   margin-right: 2rem;
      
`
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   justify-content: center;
   color: white;
   overflow: hidden;
`
const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   height: 40%;
`
const SideBarLink = styled.div`
   cursor: pointer;
   position: relative;
   display: grid;
   place-items: center;
   width: 100px;
   font-size: 1.5rem;
   font-weight: bold;
  

   :hover{
     
      ::after{
         content: '';
         position: absolute;
         background: rgba(255,255,255,0.1);
         height: 3rem;
         width: 17rem;
         z-index: -1;
        
      }
   }
`
const SideBar = ({ bGround, primary }) => {
   let [isOpen, setIsOpen] = useState(false);

   const handleIsOpen = () => {
      setIsOpen(!isOpen);
      // console.log(!isOpen);

      document.getElementById('main_content').classList.toggle('toggle');

   }

   return (

      <MainContainer bGround={bGround} open={isOpen}  >


         <InnerContainer >
            <LinkContainer>
               <Anime easing="easeOutElastic"
                  duration={2000}
                  loop={false}
                  delay={(el, index) => index * 100}
                  scale={[.9, 1]}>

                  {link_data.map(data => (

                     isOpen === true ?
                        <SideBarLink>
                           {data.title}
                        </SideBarLink>

                        :

                        <SideBarLink>
                           {data.icon}
                        </SideBarLink>

                  ))}


               </Anime>
            </LinkContainer>
         </InnerContainer>

         {isOpen === true ? <ActionButton clickFunc={handleIsOpen} icon={<i class='bx bx-align-right toggler'></i>} col={bGround} /> : <ActionButton clickFunc={handleIsOpen} icon={<i class='bx bx-align-left toggler'></i>} col={bGround} />}



      </MainContainer>
   )

}

export default SideBar
