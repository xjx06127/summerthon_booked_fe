import React from "react";
import styled from 'styled-components';
import Navigator from "./Navigator"
import { Link } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  height: 1024px;
`;

const Con = styled.div`
  margin-left: 250px;
  margin-right: 200px;
`

const WriteText = styled.div`
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  color: #667121;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 1016px;
  height: 65px;
  background: #FFFFFF;
  border: 2px solid #efebeb;
  box-shadow: 0px 10px 10px #efebeb;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  padding: 8px;
`;

const ContentInput = styled.textarea`
  margin-top: 45px;
  width: 1016px;
  height: 400px;
  border:2px solid #efebeb;
  border-radius:0;
  box-shadow:0px 10px 10px #efebeb;
;
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  padding: 8px;
 
`;

const SubmitButton = styled(Link)`
  width: 109px;
  height: 40px;
  margin-right: 40px;
  
  background: #D9D9D9;
  border-radius: 40px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #4A7594;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  line-height: 2;
  cursor: pointer;
`;

const SubmitOk1 = () => {
  alert("정상적으로 접수되었습니다.");
};

const Con2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

`;

const CmWrite = () => {
  return (
    <>
      <Navigator />
      <Con>
        <Desktop>
          <Con2>
          <WriteText>글쓰기</WriteText>
          <SubmitButton to="/other-page" onClick={SubmitOk1}>등록하기</SubmitButton>
          </Con2>
          <Input placeholder=" 제목을 입력하세요." />
          <ContentInput placeholder=" 내용을 입력하세요." />
          
        </Desktop>
      </Con>
    </>
  );
};

export default CmWrite;