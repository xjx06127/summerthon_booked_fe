import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  content: url(아이콘-removebg-preview.png);
  width: 200px;
`;

const LogoContainer = styled.div`
  //로고 가운데 정렬
  text-align: center;
`;

const VertiContainer = styled.div`
  //회원가입 창 control Container
  display: flex;
  flex-direction: column;
  margin-left: 280px;
`;

const Sign = styled.p`
  //회원가입하기
  font-weight: 800;
  font-size: 35px;
  line-height: 42px;
  margin-bottom: 0px;
  color: #000000;
`;

const Thankyou = styled.p`
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;

  color: #667121;
`;

const Img = styled.img`
  content: URL(Group179.png);
  width: 845px;
  height: 202px;
`;

const Set = styled.div`
  //Info와 Input box 묶음
  display: flex;
  align-items: center;
`;

const Info = styled.p`
  font-weight: 700;
  font-size: 23px;
  color: #000000;
`;

const Input = styled.input`
  width: 200px;
  border: 3px solid #d9d9d9;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  outline: none;
  margin-left: 30px;
  font-weight: 500;
  font-size: 17px;
  height: 30px;
`;

const SetContainer = styled.div`
  //set 세로로 묶어서 관리하는 Container
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 250px;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const Button = styled.button`
  height: 49px;

  background: #8e9851;
  border-radius: 50px;

  font-weight: 800;
  font-size: 19px;
  line-height: 23px;

  color: #ffffff;

  border: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 30px;

  cursor: pointer;
`;

const SignUp = () => {
  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <VertiContainer>
        <Sign>회원가입하기</Sign>
        <Thankyou>
          저희 Booked 서비스를
          <br />
          찾아주셔서 감사합니다.
        </Thankyou>
        <Img />
        <SetContainer>
          <Set>
            <Info>ID</Info>
            <Input placeholder="아이디 입력"></Input>
          </Set>
          <Set>
            <Info>P/W</Info>
            <Input type={"password"} placeholder="비밀번호 입력"></Input>
          </Set>
          <Set>
            <Info>P/W 확인</Info>
            <Input type={"password"} placeholder="비밀번호 재입력"></Input>
          </Set>
          <Set>
            <Info>닉네임</Info>
            <Input placeholder="닉네임 입력"></Input>
          </Set>
          <Set>
            <Info>한 줄 소개</Info>
            <Input placeholder="한 줄 소개 입력"></Input>
          </Set>
        </SetContainer>
        <Buttons>
          <Button>가입하기</Button>
          <Button>홈으로 이동하기</Button>
        </Buttons>
      </VertiContainer>
    </>
  );
};

export default SignUp;
