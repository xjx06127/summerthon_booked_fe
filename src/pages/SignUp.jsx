import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  align-items: center;
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
  margin-right: 350px;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 570px;
  margin-bottom: 50px;
  margin-top: 20px;
`;


//정렬 컨테이너 박스
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 570px;
`

const SignUp = () => {
  const [ID,SetId] =useState("");
  const [PW,SetPw] =useState("");
  const [PWCheck,SetPWCheck] =useState("");
  const [NICK,SetNick] =useState("");
  const [INFO,SetInfo] =useState("");
  const navigate = useNavigate();

  const HandleId = (e) => {
    SetId(e.target.value);
  };

  const HandlePw = (e) => {
    SetPw(e.target.value);
  };

  const HandlePwCheck = (e) => {
    SetPWCheck(e.target.value);
  };

  const HandleNick = (e) => {
    SetNick(e.target.value);
  };


  const HandleInfo = (e) => {
    SetInfo(e.target.value);
  };

  const HandleSignUp = () => {
    PW === PWCheck ? (
    axios
    .post(`https://mutsabooked.store/signup/`,{
      userID:ID,
      password:PW,
      nickname:NICK,
      user_mbti:INFO,
    })
    .then(()=>{
        alert("회원가입 성공! Booked 회원이 되신 것을 환영합니다.");
        navigate(-1);
    })
    .catch(()=>{
        alert("입력이 누락되었습니다. 다시 확인 해주세요.");
    })
    )
    :
    alert("비밀번호가 불일치합니다! 다시 확인해주세요.");
  };


  const Button = styled.button`
  height: 43px;
  background: #8e9851;
  border-radius: 50px;
  font-weight: 800;
  font-size: 15px;
  line-height: 23px;

  color: #ffffff;

  border: none;
  padding: 9px;
  padding-left: 18px;
  padding-right: 18px;
  margin-right: 30px;

  cursor: pointer;  
`;

  const GoToHome = () => {
    navigate(`/home`);
  };

  const Check = styled.p`
    margin-left: 10px;
    color: red;
    font-size: 15px;
  `;

  return (
    <>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <VertiContainer>
        <Box1>
        <Sign>회원가입하기</Sign>
        <Thankyou>
          Booked 서비스를
          <br />
          찾아주셔서 감사합니다.
        </Thankyou>
        </Box1>
        <Img />
        <SetContainer>
          <Set>
            <Info>ID</Info>
            <Input placeholder="아이디 입력" maxlength='50' value={ID} onChange={HandleId}></Input>
          </Set>
          <Set>
            <Info>P/W</Info>
            <Input type={"password"} placeholder="비밀번호 입력" maxlength='20' value={PW} onChange={HandlePw}></Input>
          </Set>
          <Set>
            <Info>P/W 확인</Info>
            <Input type={"password"} placeholder="비밀번호 재입력" maxlength='20' value={PWCheck} onChange={HandlePwCheck}></Input>
            <Check>{
              PW === PWCheck ? "비밀번호 일치합니다." : "비밀번호 불일치합니다."
            }</Check>
          </Set>


          <Set>
            <Info>닉네임</Info>
            <Input placeholder="닉네임 입력" maxlength='15' value={NICK} onChange={HandleNick}></Input>
          </Set>
          <Set>
            <Info>한 줄 소개</Info>
            <Input placeholder="한 줄 소개 입력" maxlength='100' value={INFO} onChange={HandleInfo}></Input>
          </Set>
        </SetContainer>
        <Buttons>
          <Button onClick={HandleSignUp}>가입하기</Button>
          <Button onClick={GoToHome}>홈으로 이동하기</Button>
        </Buttons>
      </VertiContainer>
    </>
  );
};

export default SignUp;
