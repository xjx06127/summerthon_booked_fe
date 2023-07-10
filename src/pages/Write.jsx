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

width: 90%;
height: 100%;
background-color:rgba(234, 234, 234, 1);
justify-content: center;
margin: 0 auto;
margin-top: 100px;
 border-radius: 1%
`;

const InnerBox=styled.div`
height: auto;
margin-top: 80px;
background:rgba(94, 144, 114, 0.11);
border-radius: 1%;
display: flex;
flex-wrap: wrap;
clear: both;
padding-left: 0px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
`;

const BC=styled.div`
    background-color: #ffffff;
    height:auto;
    padding-bottom: 10%;
`;

const InputBox=styled.input`
    border-radius: 40%;
    background-color: transparent;
    border: red;
    border-color: #c4c496;
    font-size:20px;
    float: left;
`;


const Dis=styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;


const Con=styled.textarea`
   width: 60%;
   height: 500px;
   background-color: #ffffff;
   border-color: rgba(167, 167, 167, 0.5);
   border-radius: 1%;
   border-width: 3px;
   padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    float: left;
    color: #000000;
    font-size: larger;
  
   
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

const Text=styled.div`
text-align: center;
font-size: 30px;
color: #ee9dab;
float: left;
display: flex;
flex-wrap: wrap;
margin-left: 40%;
`;
const Memory=styled.div`
  color: #0a4511;
  font-weight: 10px;
  width: 400px;
`;


const Write = () => {
    return (
        <BC>
          <Navigator></Navigator>
            <BackBox> 
              <Text>제목: <InputBox ></InputBox></Text>
            <InnerBox>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;읽은 날짜: <InputBox  type="date"></InputBox> 저자: <InputBox></InputBox><br/><br/>
            <Dis>
          <Select></Select>
          <Con></Con>
          <Memory>
          기억하고 싶은 책 구절이 있으신가요? <button>추가</button> <br/> 페이지:<PageBox></PageBox>pg  <br/> 구절: <MText></MText>
          </Memory>
          <li>"영감이 나에게 오지 않을 때 내가 그것을 만나러 반을 간다." 102pg</li> 
          </Dis>
          <br/>
            </InnerBox>
            </BackBox>
        </BC>
    );
};

export default Write;