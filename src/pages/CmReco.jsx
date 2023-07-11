import React from "react";
import styled from 'styled-components';
import Navigator from "./Navigator"
import { Link } from "react-router-dom";


const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  
`;

const RcboxT = styled.div`
width: 850px;
height: 80px;
border: 1px solid #000000;
margin-left: auto;
margin-right: auto;
margin-top: 70px;
font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
`;

const Nicnamebox= styled.div`
 width: 100px;
 height: 50px;
 border: 1px solid #000000;
 margin-left: 75%;
 margin-top: 5px;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 800;
 font-size: 30px;
 line-height: 36px;
 color: #000000;
 white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
 text-align: center;
`;

const Rcbar = styled.div`
  width: 1250px;
  height: 5px;
  background:#D9D9D9;
  border-radius: 50px;
  margin-left: auto;
 margin-right: auto;
 margin-top: 30px;

`;

const Rcbox = styled.div`
margin-top: 50px;
width: 850px;
height: 350px;
background: #ffffff;
border: 1px solid #000000;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
`;

const RcCon =styled.div`
 margin-left: auto;
 margin-right: auto;
`;

const Recment1 = styled.div`
  margin-left: 10%;
  margin-top:50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  color: #667121;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  `;
const Recment2 = styled.div`
  margin-left: 10%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 36px;
  color: #A4AC6D;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right:auto;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 800px;
  height:50px;
`;

const CommentInput = styled.textarea`
  border: 1px solid #ffffff;
  width: 400px;
  height:30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  margin-top: 8px;
  outline: none;
`;

const CommentButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: #8E9851;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
`;

const DoubleArrowIcon = styled.img`
margin-left: auto;
margin-right: auto;
margin-top:70px;
display: block;
`;

const ComT =styled.div`
width: 213px;
height: 36px;
margin-left: 10%;
margin-top: 80px;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 36px;
color: #667121;
white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`
const ComButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px ;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #4F561F;
  background-color: #ffffff; 
  cursor: pointer;
`;
const EditButton = styled.button`
  width: 100px;
  height: 50px;
  border:1px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size:18px;
  color: #4F561F;
  background-color: #ffffff;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 80px;
  margin-right: 10%;
`;
const Mycom=styled.div`
width: 600px;
height: 36px;
margin-right:10%;
margin-top: 80px;
border: 1px solid #000000;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 25px;
line-height: 36px;
color: #111111;
white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`

const Rcbar2 = styled.div`
  width: 1250px;
  height: 5px;
  background:#D9D9D9;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const Talkballon = styled.img`
margin-left:72%;
margin-top: 100px;
width:300px;
height:300px;
`;

 const Mybox=styled.div`
 width: 390px;
 height: 29px;
 margin-left: 15%;
 margin-top: 30px;
 border: 1px solid #000000;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 800;
 font-size: 24px;
 line-height: 29px;
 `
const Otherbox=styled.div`
 width: 390px;
 height: 29px;
 margin-left: 15%;
 
 border: 1px solid #000000;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 800;
 font-size: 24px;
 line-height: 29px;  
`


const SubmitOk2 = () => {
  alert("정상적으로 접수되었습니다.");
};




const CmReco = () => {
  return (
    <>
    <Navigator></Navigator>    
   <Desktop>   
    <RcCon>
       <RcboxT></RcboxT><Nicnamebox></Nicnamebox>
        <Rcbar></Rcbar>
        <Rcbox></Rcbox>
        </RcCon>
        <Recment1>댓글을 남겨보세요.</Recment1>
        <Recment2>타인을 비방, 욕설하는 댓글은 남기지 말아주세요.</Recment2>
        <CommentInputContainer>
        <CommentInput placeholder="댓글을 입력해주세요."/ >
        <CommentButton to="/other-page" onClick={SubmitOk2}>댓글등록</CommentButton>
        </CommentInputContainer>
        <DoubleArrowIcon src="FiChevronsDown.png"/>
        <ComButton>
        <ComT>최근 내가 쓴 댓글</ComT><Mycom></Mycom>
        <ButtonContainer>
        <DeleteButton>댓글 삭제</DeleteButton>
        <EditButton>댓글 수정</EditButton>
        </ButtonContainer>
        </ComButton>
        <Rcbar2></Rcbar2>
        <Talkballon src="GrChat.png"/>
        <Nicnamebox></Nicnamebox><Otherbox></Otherbox>
        <Mybox></Mybox>
        <Nicnamebox></Nicnamebox><Otherbox></Otherbox>
        <Mybox></Mybox>
        <Nicnamebox></Nicnamebox><Otherbox></Otherbox>
        
    </Desktop>
    </>
  );
};

export default CmReco;