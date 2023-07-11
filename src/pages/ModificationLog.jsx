import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Img1 = styled.img`
  margin-right: 90px;
`;

const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #fffdfd;
  box-shadow: 0px 2px 4px rgba(158, 159, 155, 0.8);
  border-radius: 20px;
  padding: 25px;
`;

const Text1 = styled.h1`
  font-size: 26px;
  margin-bottom: 0px;
  font-style: normal;
  font-weight: 800;
`;

const Text2 = styled.p`
  font-size: 23px;
  margin-top: 3px;
  font-style: normal;
  font-weight: 800;
  color: #999999;
`;

const Text3 = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  color: #000000;
`;

const InputPw = styled.input`
  border: none;
  border-bottom: 3px solid #d9d9d9;
  font-size: 17px;
  padding: 10px;
  outline: none;
`;

const Text4 = styled.p`
  text-align: right;
  color: #8f9acf;
`;

const ModificationLog = () => {
  return (
    <>
      <Box>
        <Img1 src="아이콘-removebg-preview.png" />
        <LogBox>
          <Text1>회원 정보 수정 페이지로 이동합니다.</Text1>
          <Text2>비밀 번호를 입력해주세요.</Text2>
          <Text3>비밀번호 password</Text3>
          <InputPw placeholder="이곳에 비밀번호를 입력해주세요."></InputPw>
          <Text4>비밀번호 보기</Text4>
        </LogBox>
      </Box>
    </>
  );
};

export default ModificationLog;
