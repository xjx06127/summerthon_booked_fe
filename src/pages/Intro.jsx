import React from "react";
import styled, { keyframes } from "styled-components";
import Navigator from "./Navigator";

const vibration = keyframes`
 0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-5deg);
  }

  100%{
    transform: rotate(10deg);
  }
`;

const BackGround = styled.div`
  min-height: 100vh;
  background: #f4faff;
  font-family: "BMJUA";
`;

const Logo = styled.img`
  content: url(아이콘-removebg-preview.png);
  margin-bottom: -100px;
  width: 800px;
  &:hover {
    animation: ${vibration} 2s infinite;
  }
`;

const LogoSub = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  text-align: center;
  color: #686868;
  margin-top: 0px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P1 = styled.p`
  font-weight: 600;
  font-size: 42px;
  padding: 0;
  margin-left: 80px;
  margin-top: 60px;
  margin-bottom: -100px;
  color: #9cbee7;
`;

const P1Container = styled.span`
  margin-left: -800px;
`;

const P2 = styled.p`
  font-weight: 600;
  font-size: 42px;
  text-align: center;
  padding: 0;
  margin: 0px;
  margin-top: 35px;
  margin-left: 630px;
  padding-bottom: 50px;
  color: #9cbee7;
`;

const Intro = () => {
  const activeMenu = "서비스 소개";

  return (
    <>
      <Navigator activeMenu={activeMenu} />
      <BackGround>
        <LogoContainer>
          <P1Container>
            <P1>Booked, 벗어날 수 없는</P1>
          </P1Container>
          <Logo />
          <LogoSub>
            Booked를 통해 내게 맞는 책을 추천받고, <br />
            기록하여 나의 서재를 채워보세요!
          </LogoSub>
        </LogoContainer>
        <P2>
          한 번 사용하면 벗어날 수 없는,
          <br /> Booked를 이용해보세요
        </P2>
      </BackGround>
    </>
  );
};

export default Intro;
