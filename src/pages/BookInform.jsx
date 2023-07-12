import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 350px;
  background-color: rgba(182, 198, 86, 1);
  float: left;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.input`
  border-radius: 37px;
  border: none;
  box-shadow: 0px 9px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 29px;
  margin-left: 30px;
  background: #fffbfb;
  outline: none;
  ::placeholder {
    text-align: center;
  }

  height: 40px;
`;

const Text = styled.p`
  color: rgba(182, 198, 86, 1);
  font-weight: bold;
  font-size: xx-large;
  margin-left: 100px;
`;
const Rowbox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;
const Intext = styled.div`
  color: white;
  font-weight: bold;
  font-size: x-large;
`;
const IIntext = styled.div`
  color: white;
  font-weight: bold;
  font-size: xx-large;
  padding-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BookInform = () => {
  return (
    <div>
      <Navigator />
      <Text>
        이제,
        <br />
        이곳에서
        <br />
        나만의 이야기를 적어보세요.
      </Text>
      <Box>
        <InputContainer>
          <IIntext>먼저, 간단하게 책 정보를 입력해주세요.</IIntext>
          <Rowbox>
            <Intext>책 제목</Intext>
            <InputBox placeholder="제목을 입력해주세요."></InputBox>
          </Rowbox>
          <Rowbox>
            <Intext>저자</Intext>
            <InputBox placeholder="저자를 입력해주세요."></InputBox>
          </Rowbox>
          <Rowbox>
            <Intext>언제 읽었나요?</Intext>
            <InputBox type="date"></InputBox>
          </Rowbox>
        </InputContainer>
      </Box>
    </div>
  );
};

export default BookInform;
