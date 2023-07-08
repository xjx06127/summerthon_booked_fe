import React from 'react';
import Navigator from './Navigator';
import WritePage from './WritePage';
import styled from "styled-components";



const Text= styled.p`
color: #72736b;
font-weight: bold;
font-size: medium;
margin-left: 100px;


`;


const MainBox=styled.div`
   width: 80%;
   height: 800px;
   background-color:rgba(255, 255, 255, 1);
   border: none;
    box-shadow:0px 20px 20px rgba(0, 0, 0, 0.50);
    color: #000000;
    font-size: larger;
    margin: 0 auto;
    outline: none;
    /* display: flex; */
    margin-top: 3%;
    border-radius: 20px 20px 10px 10px;
`;

const Circle3=styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
background-color: #24FF00;
border-color: #611818;
margin: 8px;
`;

const Circle2=styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
background-color: #FFF504;
border-color: #611818;
margin: 8px;
`;

const Circle1=styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
background-color: #F00;
border-color: #611818;
margin: 8px;
`;

const GrayBox=styled.div`
border-radius: 20px 20px 0px 0px;
background: #D9D9D9;
height: 70px;
width: 100%;
`;


const Ad=styled.div`
width: 25%;
height:60px; 
background-color:rgba(217, 217, 217, 1);
border-radius: 10px;
`;

const Add=styled.div`
 display: flex;
justify-content: space-evenly;
margin-top: 5%;
`;
const AddButton=styled.button`
 background-color   : rgba(182, 198, 86, 1);
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 color:#464f47;
 border-radius: 12px;
 border: none;
 font-size: large;
 margin-left: 70%;
 
`
;

const Line=styled.div`
    width: 2px;
    height:91%;
    margin-right: 70%;
    background-color: #A1A1A1;
    border: none;
    margin-top: -3.5%;
    margin-left: 30%;
`

const Line2=styled.div`
    width: 2px;
    height:91%;
    margin-right: 70%;
    background-color: #A1A1A1;
    border: none;
    /* position: absolute ; */
    /* top:20%;
    left: 45%; */
    margin-top: -59.4%;
    margin-left: 45%;
`

const Direc=styled.div`

display: flex;
    flex-direction: row;
    margin-top: 1%;

`
const Dis=styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;

const Title=styled.div`
color: #A1A1A1;
font-size: xx-large;
font-weight: 1000;
border-color: #A1A1A1;
border: 10px;
`;
const Read = () => {
    return (
        <div>
            <Navigator></Navigator>

          <MainBox><GrayBox>
            <Direc><Circle1></Circle1><Circle2></Circle2><Circle3></Circle3></Direc>
            </GrayBox>
            <Title>나의 책장</Title><Line></Line><Line2></Line2>
            </MainBox>
           
            
    <Add>   <Ad>광고 1</Ad> <Ad>광고 2</Ad> <Ad>광고 3</Ad></Add> 
</div>
    );
};

export default Read;