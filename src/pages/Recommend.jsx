import React from 'react';
import Navigator from './Navigator';
import styled from "styled-components"
import RecpageSelect from "./RecpageSelcet"

const SelStyle=styled.div`
background-color: transparent;
border-color:rgba(6, 79, 132, 1);
`
const Text=styled.div`
  color  : rgba(6, 79, 132, 1);
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 5%;
  margin-top: 10%;
  padding-left: 5%;
  text-align: left;
  width: 500px;

`;
const Dis=styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
`;


const Img = styled.img`
    width: 200px;
    height: 180px;
    margin-top: 4%;
`;

const InputBox=styled.input`
    border-radius: 30px;
    background-color:transparent;
    border-color:rgba(6, 79, 132, 1);
    font-size:20px;
    float: left;
    margin-top: 5%;
    margin-left: 30%;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom:15px;
    padding-right: 40px;
    width: 40%;

`;

const Ad=styled.div`
    height:100px;
    width: 50%;
    background-color: #f7f7f7;
    border-color: gray;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    margin-left: 25%;
    margin-top: 8%;

`

const HashText=styled.div`
    font-weight: bold;
    color: #064F84;
    font-size: x-large;
    margin-top: 5%;
`

const HashText2=styled.div`
    color: black;
    font-size: large;
    margin-top: 5.5%;
    margin-left: 1%;
`

const Icon=styled.img`
    width: 31px;
    height: 31px;
    color:rgba(6, 79, 132, 1);
`

const Submit=styled.button`
    margin-top: 5.5%;
    margin-left: -4.5%;
    background: url( "진짜돋보기.png" );
    border: none;
    width: 39.5px;
    height: 40.5px;

`
    
const Gobutton = styled.button`
  border-radius: 15px;
  background-color: rgba(6, 79, 132, 1);
  width: 10%;
  height: 50px;
border: none;
position: fixed;
  bottom: 20px;
  left: 85%;
  color:white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);

`;

function ScrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  };



  function ScrollToTop() {
    window.scrollTo(0, 0);
  };


const Recommend = () => {
    return (
        
        <div>
<Navigator></Navigator>           
<Dis><Text>책 제목을 입력해주시면,<br/>저희가 독후감을 찾아드릴게요.</Text> 
<Img src='추천페이지.png'></Img></Dis>
<InputBox placeholder='책 제목을 입력해주세요.'></InputBox><Submit></Submit>
<Ad>광고문의</Ad>
<Gobutton onClick={ScrollToBottom}>해시태그를 통한 검색</Gobutton>
<Dis><HashText>해시태그를 통한 검색</HashText><HashText2>클릭시,  해당 태그가 언급된 독후감으로 이동합니다.</HashText2></Dis>

<RecpageSelect></RecpageSelect>
        </div>
    );
};

export default Recommend;