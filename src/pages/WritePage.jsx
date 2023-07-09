import React from 'react';
import Navigator from './Navigator';
import Select from './Select';
import styled from "styled-components";


const InputBox=styled.input`
     border-radius: 37px;
     border-color: transparent;
     box-shadow: 0px 9px 4px 0px rgba(0, 0, 0, 0.25);
     width: 200px;
     height: 29px;
     margin-left:30px;
`;

const Text= styled.p`
color: #72736b;
font-weight: bold;
font-size: medium;
margin-left: 100px;


`;

const WriteBox=styled.textarea`
   width: 70%;
   height: 500px;
   background-color:rgba(239, 239, 239, 1);
   border: none;
   border-radius: 1%;
   border-width: 3px;
   padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    float: left;
    color: #000000;
    font-size: larger;
    margin-top: 50px;
    margin-left: 5%;
    outline: none;
  
`;

const Button=styled.button`
    background-color:#b9e4c7;
    border-color: transparent;
    margin-top: 1%;
    border-radius: 20px;
    margin-left: -6.5%;
    width: 100px;
`;
const Memory=styled.div`
  color: #0a4511;
  font-weight: 10px;
  width: 200px;
  border: dotted;
  border-color: #deede2; 
  border-radius: 20px;
`;

const ListBox=styled.div`
  background-color  : #c8a0cb;
  width: 200px;
  height: 200px;
  margin-top: 30%;
  z-index: 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const ListBox1=styled.div`
  background-color  : #a2d6db;
  width: 200px;
  height: 200px;
  margin-top: -40%;
  z-index: -1;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const ListBox2=styled.div`
  background-color  : #d7e462;
  width: 200px;
  height: 200px;
  margin-top: -50%;
  z-index: -2;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Dis=styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;

const AddButton=styled.button`
 background-color   : transparent;
 color:#464f47;
 border-radius: 12px;

`
;

const MemText=styled.div`
    width: 100px;
    height: auto;
    text-align: center;
    font-size: large;
    margin-right: 100px;

`;

const PageBox=styled.input`
border-radius: 40px;
background-color: transparent;
border: transparent;
border-color: #c4c496;
font-size:20px;
width: 50px;
`;

const MText=styled.textarea`
   background-color: transparent;
   border-color: rgba(167, 167, 167, 0.5);
   border-radius: 12px;
   border-width: 3px;

`;

const WritePage = () => {
    return (
        <div>
            <Navigator></Navigator>
           <Text>제목: 불러오는 이름</Text>
           <Text>저자: 000 ㅣ 읽은날: 0000년 00월 00일 </Text> 
            <Select></Select>
            <WriteBox></WriteBox><Button>출간하기</Button>
            <Dis>
                <MemText>            <Memory>
          기억하고 싶은<br/> 책 구절이 있으신가요? <br/>  <br/> 페이지<PageBox></PageBox>pg  <br/> <br/> 구절 <MText></MText><AddButton>추가</AddButton>
          </Memory>
          <ListBox>   <li>"영감이 나에게 오지 않을 때 내가 그것을 만나러 반을 간다." 102pg</li> </ListBox></MemText>
            <ListBox1></ListBox1>
            <ListBox2></ListBox2>
          </Dis>
        </div>
    );
};

export default WritePage;