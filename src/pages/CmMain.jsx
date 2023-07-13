import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navigator from "./Navigator";
import { Link } from "react-router-dom";
import axios from "axios";

const Desktop = styled.div`
  display: flex;
  height: 1024px;
  margin-top: 80px;
  justify-content: center;
`;

const Qbox1 = styled.div`
  width: 550px;
  height: 120px;
  background: #fefedf;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 130px;
`;
const Quote = styled.div`
  font-family: "Inter";
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

const TRbox = styled.div`
  width: 350px;
  height: 750px;
  background: #fffdfd;
  border: 2px solid #efebeb;
  box-shadow: 0px 10px 10px #efebeb;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TodayReview = styled.div`
  margin-right: 100px;
  width: 90px;
  height: 77px;
  font-family: "Inknut Antiqua";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 77px;
  color: #bbe2b2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const OtherReviews = styled.div`
  width: 400px;
  height: 23px;
  right: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #000000;
  margin-top: 5px;
`;

const TRbar = styled.div`
  width: 330px;
  height: 7px;
  background: #d9d9d9;
  border-radius: 50px;
  margin-top: 20px;
`;

const R = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 120px;
  margin-top: -20px;
`;

const R2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 27%;
  margin-top: 120px;
`;

const BookRecommendation = styled.div`
  width: 321px;
  height: 42px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 42px;
  color: #bbe2b2;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const DirectCwButton = styled(Link)`
  width: 120px;
  height: 44px;
  margin-left: 430px;
  background: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #4a7594;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  line-height: 2;
  cursor: pointer;
`;

const BRbox = styled.div`
  margin-top: 15px;
  margin-right: 27%;
  width: 879px;
  height: 430px;
  background: #fffdfd;
  border: 2px solid #efebeb;
  box-shadow: 0px 10px 10px #efebeb;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
  align-items: center; //닉, 타이틀, 버튼 세개를 한줄에//
  justify-content: center; //박스 중간으로 이동//
`;

const Nic = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #111111;
  width: 200px;
  margin-left: 30px;
`;

const Title= styled.p`
font-weight: 800;
font-size: 20px;
color: #111111;
margin-left:50px;
`;

const DirectLinkButton = styled(Link)`
  width: 100px;
  height: 40px;
  background: #d9d9d9;
  border-radius: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #4a7594;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  line-height: 2;
  cursor: pointer;
  margin-left: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;

const TCon = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px;
`;

const TrT = styled(Link)`
  font-weight: 800;
  font-size: 28px;
  color: #111111;
  margin: 0px;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
`;

const TrN = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #111111;
  margin: 0px;
`;

const LghAd = styled.img`
  width: auto;
  height: auto;
  max-width: 270px;
  margin-bottom: 700px;
  border-radius: 0px;
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodaysList = styled.div`
  height: 500px;
`;

const CmMain = () => {
  const [recommends, setRecommends] = useState([]);
  const [todays, setTodays] = useState([]);

  useEffect(() => {
    axios.get(`https://mutsabooked.store/posts/`).then((res) => {
      setRecommends(res.data.posts);
      setTodays(res.data.reviews);
    });
  }, []);
  return (
    <>
      <Navigator></Navigator>

      <Desktop>
        <Con>
          <Qbox1>
            {" "}
            <Quote>
              "책은 가장 조용하고 변함없는 벗이다."
              <br /> -102pg-{" "}
            </Quote>
          </Qbox1>
          <R>
            <R2>
              <BookRecommendation>이런책 추천해주세요!</BookRecommendation>
              <DirectCwButton to="/CmWrite">글쓰러 가기</DirectCwButton>
            </R2>

            <BRbox>
              {recommends.map((c, index) => {
                if (index < 4) {
                  return (
                    <Container key={index}>
                      <Nic>{c.poster}</Nic>
                      <Title>{c.title}</Title>
                      <DirectLinkButton to="/link1">바로가기</DirectLinkButton>
                    </Container>
                  );
                }
                return null;
              })}
            </BRbox>
          </R>
        </Con>

        <TRbox>
          <TodayReview>오늘의 독후감</TodayReview>
          <OtherReviews>다른 사람들의 독후감을 만나보세요.</OtherReviews>
          <TRbar></TRbar>
          <TodaysList>
            {todays.map((c) => (
              <TCon>
                <TrT to="/link8">{c.review_title}</TrT>
                <TrN>{c.user}</TrN>
              </TCon>
            ))}
          </TodaysList>
          <LghAd src="LghAd.jpg" />
        </TRbox>
      </Desktop>
    </>
  );
};

export default CmMain;
