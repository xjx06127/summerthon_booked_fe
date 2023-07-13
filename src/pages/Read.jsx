import React, { useState, useEffect } from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainBox = styled.div`
  //처음 하얀 박스
  width: 1000px;
  height: 800px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
  color: #000000;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px 20px 10px 10px;
`;

const GrayBox = styled.div`
  //상단 회색 박스
  border-radius: 20px 20px 0px 0px;
  background: #d9d9d9;
  height: 70px;
  width: 100%;
`;

const Circle3 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #24ff00;
  border-color: #611818;
  margin: 10px;
  margin-top: 20px;
`;

const Circle2 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff504;
  border-color: #611818;
  margin: 10px;
  margin-top: 20px;
`;

const Circle1 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f00;
  border-color: #611818;
  margin: 10px;
  margin-top: 20px;
`;

const CircleContainer = styled.div`
  //circle들 control
  display: flex;
  margin-left: 30px;
`;

const Container = styled.div`
  //안에 컨텐츠들 가로로
  display: flex;
`;

const Line1 = styled.div`
  //세로줄 1
  border-left: 2px solid #a1a1a1;
  height: 720px;
`;

const Line2 = styled.div`
  //세로줄 2
  border-left: 2px solid #a1a1a1;
  height: 720px;
`;

const MyLibrary = styled.div`
  //나의 책장
  color: #a1a1a1;
  font-size: 30px;
  font-weight: 700;
  margin-top: 30px;
  margin-right: 130px;
  margin-bottom: 15px;
  margin-left: 30px;
`;

const Hr = styled.hr`
  //가로줄
  border: 1px solid #d9d9d9;
  margin: 10px;
  width: 96%;
`;

const Hr2 = styled.hr`
  border: 1px solid #d9d9d9;
  width: 100%;
`;

const BookList = styled.div`
  //BookContent들 관리
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const BookContentContainer = styled.div`
  //Bookcontent 개별 요소들
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-left: 30px;
  cursor: pointer; /* 커서를 변경하여 클릭 가능한 요소로 표시 */
  background-color: ${({ selected }) =>
    selected ? "#d9d9d9" : "transparent"}; /* 선택 여부에 따라 배경색 변경 */
`;

const BookTitle = styled.span`
  font-family: "Kokoro";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: #000000;
`;
const Heart = styled.img`
  content: url(heart.png);
  margin-right: 5px;
`;
const Like = styled.div`
  background: #e7e7e7;
  width: 70px;
  border-radius: 20px;
  padding: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  margin-right: -40px;
`;

const HeartCount = styled.span`
  color: #ff9494;
  font-family: "Preahvihear";
  font-weight: 400;
  font-size: 16px;
`;

const FirstContainer = styled.div`
  //가장 맨 왼쪽 담당하는 컨테이너
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 730px;
`;

const BookCount = styled.div`
  font-family: "Kokoro";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  margin-right: 15px;
  margin-bottom: 20px;

  color: #909090;
`;

const ParaPage = styled.div`
  //구절+페이지
  width: 290.55px;
  height: 73px;
  background: #f0f0f0;
`;

const Para = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  margin: 10px;
  color: #000000;
`;

const Page = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  margin-left: 20px;
  color: #000000;
`;

const ParaPageContainer = styled.div`
  //구절+페이지 세로 정렬
  display: flex;
  flex-direction: column;
  height: 730px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const ContentContainer = styled.div`
  //본문 Container
  width: 30%;
  margin: 0 auto;
  margin-top: 16px;
  word-break: break-all;
`;

const Date = styled.p`
  //본문 날짜
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 50px;
  text-align: center;

  color: #9f9f9f;
`;

const Content = styled.p`
  //본문
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-left: -10%;
  margin-right: -10%;

  color: #000000;
`;

const MyContainer = styled.div`
  //나의 책장부분이랑 아래 책들 싹다 묶기
  width: 295px;
`;

const Read = () => {
  const activeMenu = "나의 서재";
  const [bookReview, setBookReview] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // 선택한 책의 정보를 유지하는 상태
  const NickName = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mutsabooked.store/bookreviewall/`).then((res) => {
      setBookReview(res.data.filter((c) => c.user == NickName.NickName));
    });
  }, []);

  // BookContentContainer를 클릭했을 때 실행되는 핸들러
  const showParaPage = (book) => {
    setSelectedBook(book); // 선택한 책의 정보를 업데이트x
  };

  return (
    <>
      <Navigator />
      <MainBox>
        <GrayBox>
          <CircleContainer>
            <Circle1 />
            <Circle2 />
            <Circle3 />
          </CircleContainer>
        </GrayBox>
        <Container>
          <FirstContainer>
            <MyContainer>
              <MyLibrary>나의 책장</MyLibrary>
              <Hr />
              <BookList>
                {/* map을 통해 api를 사용하여 받아온 데이터를 BookList에 표시 */}
                {bookReview.map((c) => (
                  <>
                    <BookContentContainer
                      onClick={() => showParaPage(c)}
                      selected={selectedBook && selectedBook.id === c.id} // 선택 여부에 따라 배경색 변경
                    >
                      <BookTitle>{c.book_title}</BookTitle>
                      <Like>
                        <Heart />
                        <HeartCount>5,000</HeartCount>
                      </Like>
                    </BookContentContainer>
                    <Hr />
                  </>
                ))}
              </BookList>
            </MyContainer>
            <BookCount>내가 읽은 책: {bookReview.length}권</BookCount>
          </FirstContainer>
          <Line1 />
          <ParaPageContainer>
            {/* 선택한 책의 정보를 ParaPageContainer에 표시 */}
            {selectedBook && (
              <ParaPage>
                <Para>{selectedBook.pickwriting}</Para>
                <Page>{selectedBook.pickpage}</Page>
                <Hr2 />
              </ParaPage>
            )}
          </ParaPageContainer>
          <Line2 />
          <ContentContainer>
            <Date>{selectedBook && selectedBook.updated_at}</Date>
            <Content>{selectedBook && selectedBook.content} </Content>
          </ContentContainer>
        </Container>
      </MainBox>
      <button onClick={() => navigate(`/bookInform/${NickName.NickName}`)}>
        글 쓰러 가기
      </button>
    </>
  );
};

export default Read;