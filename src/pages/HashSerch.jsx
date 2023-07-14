import React from 'react';
import Navigator from './Navigator';
import styled from "styled-components";
import Select from './Select';
import { Link } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  font-family:'BMJUA'
`;


const Dis=styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
`;

const HashText=styled.div`
    color: #064F84;
    font-size: xx-large;
    margin-top: 105px;
`;

const HashText2=styled.div`
    color: black;
    font-size: x-large;
    margin-top: 110px;
    margin-left: 1%;
    margin-bottom: 50px;
 `;

const Img = styled.img`
    width: 550px;
    height: 350px;
    margin-top: 30px;
`;

const Gobutton =  styled(Link)`
  border-radius: 15px;
  background-color: rgba(6, 79, 132, 1);
  width: 370px;
  height: 40px;
  border: none;
  color:white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  font-size: 25px;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
  margin-top: 20px;
  align-items: center;//높이의 가운데로
  display:flex;
  justify-content:center;
`;

const Ad=styled.div`
    height:200px;
    width: 850px;
    background-color: #f7f7f7;
    border-color: gray;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25); 
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center; /* 수평 가운데 정렬도 추가합니다. */
    font-weight: 600;
    font-size: 40px;
   margin-bottom:100px;
  
`;

const Con =styled.div`
  margin-left:10%;
  margin-right:-30px;
  `


const HashSerch = () => {
    return (
        
       <>
                   
<Navigator></Navigator>          
 
<Desktop>    

<Dis><HashText>해시태그를 통한 검색</HashText><HashText2>클릭시,  해당 태그가 언급된 독후감으로 이동합니다.</HashText2></Dis>
<Con><Select></Select></Con>
<Dis><Img src='image12.png'></Img></Dis>
<Dis><Gobutton  to="/" >제목을 통한 검색으로 이동하기</Gobutton></Dis>
<Dis><Ad>광고문의</Ad></Dis>
 
</Desktop>
  

</>
    );
};

export default HashSerch;