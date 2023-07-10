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
  margin: 0 auto;
`;

const Sign = styled.p`
  //회원가입하기
  font-weight: 800;
  font-size: 35px;
  line-height: 42px;

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
      </VertiContainer>
    </>
  );
};

export default SignUp;
