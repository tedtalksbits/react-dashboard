import React from 'react'
import Anime from 'react-anime'
import styled from 'styled-components'
import { lightTheme } from './App'
const MainContent = styled.section`
   padding: 8rem 3.5rem 0 0;

`
const CardContainer = styled.div`

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
   img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   }
`
const MediumCard = styled.div`
   border: 1px rgba(0, 0, 0, 0.1) solid;
   padding: 1.2rem;
   /* margin: 1rem; */
   /* height: 350px; */
   /* width: 450px; */
   border-radius: 18px;
   background: ${props => props.cardBg};
   transition: all ease .4s;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   :hover{

      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
   }
`
const CardTextLg = styled.h1`

   font-size: ${props => props.textSize};
   color: ${props => props.textColor};
   font-weight: ${({ bold }) => bold ? '700' : '400'};

`


const MainSection = () => {
   return (
      <MainContent id='main_content' className="main_content wrapper">
         <CardContainer>
            <Anime easing="easeOutElastic"
               duration={2000}
               loop={false}
               delay={(el, index) => index * 100}
               scale={[.9, 1]}>
               <MediumCard cardBg="white">
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true}>$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$5,400</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!loremsdsdss</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
               <MediumCard cardBg="white" >
                  <CardTextLg textColor={lightTheme.black} textSize="4rem" bold={true} >$2,000</CardTextLg>
                  <CardTextLg textColor={lightTheme.grey} textSize="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</CardTextLg>
               </MediumCard>
            </Anime>
         </CardContainer>
      </MainContent>
   )
}

export default MainSection
