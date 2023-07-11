import React from "react";
import styled from 'styled-components';
import Navigator from "./Navigator"
import { Link } from "react-router-dom";


const Desktop = styled.div`
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  display: flex;
  flex-direction: column;
  height:1024px;
`;

const Qbox1 = styled.div`
  margin-top:80px;
  margin-left: 18%;
  width: 550px;
  height: 120px;
  background: #FEFEDF;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Quote = styled.div`
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
`;

const TRbox= styled.div`
margin-top: -7%;
 width: 350px;
 height: 710px;
 margin-left: 70%;
 background: #FFFDFD;
 border:2px solid #efebeb;
 box-shadow:0px 10px 10px #efebeb;
 text-align: center;
 display: flex;
 align-items: center;
 flex-direction: column;
`;

const TodayReview = styled.div`
  margin-right:100px;
  width: 90px;
  height: 77px;
  font-family: 'Inknut Antiqua';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 77px;
  color: #BBE2B2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */

`;

const OtherReviews = styled.div`
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
margin-top:10px;
width: 320px;
height: 5px;
background: #D9D9D9;
border-radius: 50px;
`;

const R=styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const R2 =styled.div`
display: flex;
justify-content: space-between;
margin-top:-35%;
margin-right:27%;

`;

const BookRecommendation = styled.div`
  width: 321px;
  height: 42px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 42px;
  color: #BBE2B2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const DirectCwButton = styled(Link)`
  width: 120px;
  height: 44px;
  margin-left:430px;
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


const BRbox = styled.div`
margin-top:15px;
 margin-right:27%;
 width: 879px;
 height: 430px;
 background: #FFFDFD;
 border:2px solid #efebeb;
 border-radius:0;
 box-shadow:0px 10px 10px #efebeb;
 `;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:70%;
`;

const DirectLinkButton = styled(Link)`
  width: 102px;
  height: 40px;
  margin-right:30%;
  margin-top: 30px; /* 버튼들 간의 높이 간격 조정 */
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
  cursor: pointer;
`;




const CmMain = () => {
    return (
      <>
        <Desktop>
        <Navigator></Navigator>
        <Qbox1> <Quote>"책은 가장 조용하고 변함없는 벗이다."<br /> -102pg- </Quote></Qbox1>
        <Tr>
        <TRbox>
        <TodayReview>오늘의 독후감</TodayReview> 
        <OtherReviews>다른 사람들의 독후감을 만나보세요.</OtherReviews>
        <TRbar></TRbar>
        </TRbox>
        </Tr>
        <R>
        <R2>
        <BookRecommendation>이런책 추천해주세요!</BookRecommendation>
        <DirectCwButton to="/CmWrite">글쓰러 가기</DirectCwButton>
        </R2>
        
        <BRbox>
        <ButtonContainer>
        <DirectLinkButton to="/link1">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link2">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link3">바로가기</DirectLinkButton>
        <DirectLinkButton to="/link4">바로가기</DirectLinkButton>
        </ButtonContainer>
        </BRbox>
        
        </R>
       
        
        
        
       
    </Desktop>
    </>
    )
};

export default CmMain;