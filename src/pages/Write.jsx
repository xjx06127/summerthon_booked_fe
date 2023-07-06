import React from 'react';
import styled from "styled-components";
import "./Css/Select.css";
import Navigator from "./Navigator"
import Select from './Select';



const BoxEach = styled.div`
  margin: 15px;
  border-radius: 5px;
  display: inline-block;
  background-color:rgba(217, 217, 217, 1);
  width: 350px;
  height: 380px;

`;

const BackBox=styled.div`

width: 1238px;
height: 817px;
background-color:rgba(217, 217, 217, 1);
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 100px;
margin-bottom: 100px;
border-radius: 13%;
`;

const InnerBox=styled.div`
width: 1238px;
height: 738px;
margin-top: 80px;
background: #FFEFDC;
border-radius: 13%;
position: absolute;

`;

const BC=styled.div`
    background-color: rgba(251, 255, 224, 1);
    background-size: 100vh;
`;

const InputBox=styled.input`
    border-radius: 40%;
    background-color: transparent;
    border: transparent;
    border-color: #c4c496;
    font-size:20px;
`;


const Dis=styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 500px;
`;
const Con=styled.textarea`
   width: 800px;
   height: 500px;
   background-color: transparent;
   border-color: rgba(167, 167, 167, 0.5);
   border-radius: 12%;
   border-width: 3px;
   
`;

const MText=styled.textarea`
   background-color: transparent;
   border-color: rgba(167, 167, 167, 0.5);
   border-radius: 12%;
   border-width: 3px;
`;
const PageBox=styled.input`
    border-radius: 40%;
    background-color: transparent;
    border: transparent;
    border-color: #c4c496;
    font-size:20px;
    width: 50px;
`

const Text=styled.a`
text-align: center;
font-size: 30px;
color: #ee9dab;

`
const Memory=styled.div`
  color: #0a4511;
  font-weight: 10px;
  width: 400px;
`;


const Write = () => {
    return (
        <BC>
          <Navigator></Navigator>
            <BackBox> <Text>제목: <InputBox ></InputBox></Text>
            <InnerBox>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;읽은 날짜: <InputBox  type="date"></InputBox> 저자: <InputBox></InputBox><br/><br/>
            <Dis>
          <Select></Select>
          <Con></Con></Dis><br/>
          <Dis>
          <Memory>
          기억하고 싶은 책 구절이 있으신가요? <button>추가</button> <br/> 페이지:<PageBox></PageBox>pg  <br/> 구절: <MText></MText>
          </Memory>
          <li>"영감이 나에게 오지 않을 때 내가 그것을 만나러 반을 간다." 102pg</li> 
        
          </Dis>
            </InnerBox>
            </BackBox>
        </BC>
    );
};

export default Write;