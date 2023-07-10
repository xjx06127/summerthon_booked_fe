import React from "react";
import styled from 'styled-components';
import Navigator from "./Navigator"
import { Link } from "react-router-dom";



const Desktop = styled.div`
  position: relative;
  height: 1024px;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  display: flex;
  flex-direction: column;
`;

const Q = styled.div`
  margin-right: 50px;
   position: absolute;
`;

const Qbox1 = styled.div`
 position: absolute;
  width: 550px;
  height: 120px;
  left: 250px;
  top: 150px;
  background: #FEFEDF;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Quote = styled.div`
 position: absolute;
  width: 550px;
  height: 120px;
  left: 250px;
  top: 150px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #111111;
  padding: 7px;
`;

const Tr =styled.div`
   display: flex;
  flex-direction: column;
  align-items: flex-end; /* 수직 정렬을 위해 오른쪽으로 정렬합니다 */
`;


const TodayReview = styled.div`
 position: absolute;
  width: 90px;
  height: 77px;
  right: 300px;
  top: 170px;
  font-family: 'Inknut Antiqua';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 77px;
  text-align: center;
  color: #BBE2B2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */

`;

const OtherReviews = styled.div`
  position: absolute;
  width: 400px;
  height: 23px;
  right: 40px;
  top: 250px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #000000;
`;

const TRbar= styled.div`
position: absolute;
right:130px;
width: 310px;
height: 8px;
top: 280px;
background: #D9D9D9;
border-radius: 50px;

`;

const TRbox= styled.div`
 position: absolute;
 width: 350px;
 height: 710px;
 right: 110px;
 top: 150px;
 background: #FFFDFD;
 border:2px solid #efebeb;
 border-radius:0;
 box-shadow:0px 10px 10px #efebeb;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;



const R=styled.div`
  
`
const BookRecommendation = styled.div`
  position: absolute;
  width: 321px;
  height: 42px;
  left: 110px;
  top: 380px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 42px;
  color: #BBE2B2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;
const BRbox = styled.div`
 position: absolute;
 width: 879px;
 height: 430px;
 left: 110px;
 top: 430px;
 background: #FFFDFD;
 border:2px solid #efebeb;
  border-radius:0;
  box-shadow:0px 10px 10px #efebeb;
 `;


const ButtonContainer = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: 40px; /* 가로 방향 위치 조정 */
  top: 400px;/* 저튼 전체 세로 방향 위치 조정 */
`;


const DirectLinkButton = styled(Link)`
  width: 102px;
  height: 40px;
  left: 1189px;
  top: 559px;
  background: #D9D9D9;
  border-radius: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #4A7594;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  line-height: 2;
  margin-top: 15px; /* 버튼들 간의 높이 간격 조정 */
  cursor: pointer;
`;

const DirectCwButton = styled(Link)`
  position: absolute;
  width: 120px;
  height: 44px;
  left: 470px;
  top: 380px;
  background: #D9D9D9;
  border-radius: 10px;
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

const BT = styled.div`
  width: 300px;
  height: 70px;
  border:2px solid #efebeb;
  border-radius:0;
  box-shadow:0px 10px 10px #efebeb;
  margin: 10px;
`






const CmMain = () => {
    return (
      <>
        <Desktop>
        <Navigator></Navigator>
        <Tr>
        <TRbox><BT></BT> <BT></BT> <BT></BT> <BT></BT> </TRbox><TodayReview>오늘의 독후감</TodayReview><TRbar></TRbar><OtherReviews>다른 사람들의 독후감을 만나보세요.</OtherReviews>
        </Tr>
        <R>
        <DirectCwButton to="/CmWrite">글쓰러 가기</DirectCwButton>
        <BRbox></BRbox>
        <ButtonContainer>
        <DirectLinkButton to="/link1">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link2">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link3">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link4">바로가기</DirectLinkButton>
        </ButtonContainer>
        <BookRecommendation>이런책 추천해주세요!</BookRecommendation>
        </R>
         <Q>
        <Qbox1> </Qbox1>
        <Quote>"책은 가장 조용하고 변함없는 벗이다."<br /> -102pg- </Quote> 
        </Q>
        
       
    </Desktop>
    </>
    )
};

export default CmMain;
