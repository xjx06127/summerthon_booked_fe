import React from "react";
import styled from "styled-components";
import Navigator from "./Navigator";

const VertiContainer = styled.div`
  //세로 control Container
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HoriContainer = styled.div`
  //가로 control Contiaer
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  margin-left: 45px;
`;

const Title = styled.p`
  //회원정보 수정하기
  margin-top: 80px;
  font-size: 27px;
  font-weight: 600;
`;

const Img = styled.img`
  //이미지
  content: url(image10.png);
  width: 300px;
  height: 220px;
  margin-right: 50px;
`;

const EditContainer = styled.div`
  //수정 창 Container
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: -10px;
`;

const Info = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  margin-right: 50px;

  color: #000000;
`;

const UserId = styled.p`
  font-weight: 500;
  font-size: 25px;
  color: #000000;
  margin-left: 30px;
`;

const InputNickName = styled.input`
  width: 217px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0px 2px 4px 1px #d9d9d9;
  border-radius: 10px;
  margin-left: -10px;
`;

const InputMBTI = styled.input`
  width: 217px;
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0px 2px 4px 1px #d9d9d9;
  border-radius: 10px;
  margin-left: 0px;
`;

const EditButton = styled.button`
  width: 103px;
  height: 34px;

  background: #8e9851;
  border-radius: 50px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 5px;

  color: #ffffff;
  cursor: pointer;
  border: none;
`;

const Ad = styled.div`
  width: 50%;
  height: 10px;
  border: 1px solid black;
  padding: 50px 0;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const AlertM = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: #8e9851;
`;

const Circle = styled.div`
  background-color: #8e9851;
  width: 6.5px;
  height: 6.5px;
  border-radius: 100%;
  margin-right: 5px;
  margin-top: 2px;
`;

const AlertContainer = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

const EditInfo = () => {
  return (
    <>
      <Navigator />
      <VertiContainer>
        <Title>회원 정보 수정하기</Title>
        <HoriContainer>
          <Img />
          <EditContainer>
            <InfoContainer>
              <Info>ID</Info>
              <UserId>yeontaek</UserId>
              <AlertContainer>
                <Circle />
                <AlertM>ID는 변경이 불가능합니다.</AlertM>
              </AlertContainer>
            </InfoContainer>
            <InfoContainer>
              <Info>닉네임</Info>
              <InputNickName />
            </InfoContainer>
            <InfoContainer>
              <Info>MBTI</Info>
              <InputMBTI />
            </InfoContainer>
          </EditContainer>
        </HoriContainer>
        <EditButton>수정 완료</EditButton>
        <Ad>광고 문의</Ad>
      </VertiContainer>
    </>
  );
};

export default EditInfo;
