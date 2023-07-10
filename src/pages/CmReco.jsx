import React from "react";
import styled from 'styled-components';
import Navigator from "./Navigator"
import { Link } from "react-router-dom";


const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  height: 1400px;
`;

const RcboxT = styled.div`
width: 850px;
height: 50px;
background: #ffffff;
border: 1px solid #000000;
border-radius: 50px;
margin-left: auto;
margin-right: auto;
margin-top: 0px;
`;

const Rcbar = styled.div`
  width: 1200px;
  height: 15px;
  background:#D9D9D9;
  border-radius: 50px;
  margin-left: auto;
 margin-right: auto;
 margin-top: 50px;

`;

const Rcbox = styled.div`
margin-top: 50px;
width: 850px;
height: 350px;
background: #ffffff;
border: 1px solid #000000;
border-radius: 50px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;

`;

const RcCon =styled.div`
 margin-left: auto;
margin-right: auto;
margin-top: 200px;



`

const Recment = styled.div`
  width: 600px;
  height: 100px;
  left: 578px;
  top: 249px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
  margin-top:50px;
  
  `;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 50px;
  width: 800px;
  height:50px;

 
`;

const CommentInput = styled.textarea`
  background: #FFFDFD;
  border: 1px solid #ffffff;
  width: 400px;
  height:35px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  margin-left: 24px; /* 오른쪽으로 이동 */
`;

const CommentButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 40px;
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
margin: 0 auto;
display: block;
`;


const ComT =styled.div`
width: 213px;
height: 36px;
left: 139px;
top: 140px;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 36px;
color: #717D2C;
white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`

const Rcbar2 = styled.div`
  width: 1200px;
  height: 5px;
  background:rgba(0, 0, 0, 0.43);
  border-radius: 50px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;


`;

const DeleteButton = styled.button`
  width: 99px;
  height: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: ${props => `${Math.min(props.width / 5, 20)}px`};
  line-height: 30px;
  color: #4F561F;
  background-color: #ffffff; 
`;
const CDEButtonContainer = styled.div`

`;

const EditButton = styled.button`
  width: 99px;
  height: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size:${props => `${Math.min(props.width / 5, 20)}px`};
  line-height: 30px;
  color: #4F561F;
  background-color: #ffffff;
`;
 const Mybox=styled.div`
 width: 390px;
 height: 29px;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 800;
 font-size: 24px;
 line-height: 29px;
 `
const Otherbox=styled.div`
width: 390px;
 height: 29px;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 800;
 font-size: 24px;
 line-height: 29px;  
`

const Talkballon = styled.img`
margin-left:70%;

width:300px;
height:300px;
`;
const SubmitOk2 = () => {
  alert("정상적으로 접수되었습니다.");
};




const CmReco = () => {
  return (
    <>
    <Navigator></Navigator>    
   <Desktop>   
    <RcCon>
       <RcboxT></RcboxT>
        <Rcbar></Rcbar>
        <Rcbox></Rcbox>
        </RcCon>
        <Recment>댓글을 남겨보세요.<br/>타인을 비방, 욕설하는 댓글은 남기지 말아주세요.</Recment>
        <CommentInputContainer>
        <CommentInput placeholder="댓글을 입력해주세요."/ >
        <CommentButton to="/other-page" onClick={SubmitOk2}>댓글등록</CommentButton>
        </CommentInputContainer>
        <DoubleArrowIcon src="FiChevronsDown.png"/>
        <ComT>최근 내가 쓴 댓글</ComT>
        <CDEButtonContainer>
        <DeleteButton>댓글 삭제</DeleteButton>
        <EditButton>댓글 수정</EditButton>
        </CDEButtonContainer>
        <Rcbar2></Rcbar2>
        <Mybox></Mybox><Otherbox></Otherbox><Mybox></Mybox>
        <Talkballon src="GrChat.png"/>
    </Desktop>
    </>
  );
};

export default CmReco;