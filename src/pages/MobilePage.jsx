import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 가로 중앙 정렬 */
  height: 100vh; /*현재 보이는 화면 height를 꽉 채워줌*/
`;

const Img = styled.img`
  width: 80%;
  content: url(cryLogo.png);
`;

const ImgSub = styled.p``;

const MobilePage = () => {
  return (
    <>
      <Container>
        <Img />
        <ImgSub>모바일은 접속이 불가합니다.</ImgSub>
      </Container>
    </>
  );
};

export default MobilePage;
