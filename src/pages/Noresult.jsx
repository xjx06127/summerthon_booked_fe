import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";

const ResultCommentContainer = styled.div`
  //~에 대한 검색결과 + 현재 독후감 존재 x 를 묶는 Container
  display: flex;
  margin-top: 100px;
`;

const BookTitle = styled.span`
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;

  color: #667121;
`;

const ResultComment = styled.p`
  //~에 대한 독후감~ 입니다.
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
`;

const NoResultComment = styled.p`
  //현재 독후감~ 니다.
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;

  color: #000000;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  content: url(image9.png);
  width: 450px;
`;

const CommentUnderImg = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 33px;
  margin-top: -10px;
  margin-bottom: 30px;

  color: #000000;
`;

const Button = styled.button`
  cursor: pointer;
  background: #717d2c;
  border-radius: 50px;
  font-weight: 500;
  font-size: 20px;
  height: 45px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 50px;

  color: #ffffff;
  border: none;
  font-family: 'BMJUA';
`;

const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'BMJUA';
    
`

const EmtyBox2 = styled.div`
    margin-left: 700px;
`

const Noresult = () => {
  const activeMenu = "도서 추천";

  return (
    <>
      <Navigator activeMenu={activeMenu} />
      <BigBox>
      <ResultCommentContainer>
        <ResultComment>
          <BookTitle>백설공주</BookTitle>에 대한
          <br />
          독후감 검색 결과입니다.
        <NoResultComment>현재 독후감이 존재하지 않습니다.</NoResultComment>
        </ResultComment>
        <EmtyBox2></EmtyBox2>
      </ResultCommentContainer>

      <MainContainer>
        <Img />
        <CommentUnderImg>그렇다면, 직접 독후감을 올려보세요!</CommentUnderImg>
        <Button>글쓰러 가기</Button>
      </MainContainer>
      </BigBox>
     
    </>
  );
};

export default Noresult;
