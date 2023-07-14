import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RecpageSelect from "./RecpageSelcet";

const SelStyle = styled.div`
  background-color: transparent;
  border-color: rgba(6, 79, 132, 1);
`;
const Text = styled.div`
  color: rgba(6, 79, 132, 1);
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 5%;
  margin-top: 10%;
  padding-left: 5%;
  text-align: left;
  width: 500px;
`;
const Dis = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 200px;
  height: 180px;
  margin-top: 4%;
`;

const InputBox = styled.input`
  border-radius: 30px;
  background-color: transparent;
  border-color: rgba(6, 79, 132, 1);
  font-size: 20px;
  float: left;
  margin-top: 5%;
  margin-left: 30%;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  width: 40%;
`;

const Ad = styled.div`
  height: 200px;
  width: 50%;
  background-color: #f7f7f7;
  border-color: gray;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-left: 25%;
  margin-top: 8%;
`;

const HashText = styled.div`
  font-weight: bold;
  color: #064f84;
  font-size: x-large;
  margin-top: 5%;
`;

const HashText2 = styled.div`
  color: black;
  font-size: large;
  margin-top: 5.5%;
  margin-left: 1%;
`;

const Icon = styled.img`
  width: 31px;
  height: 31px;
  color: rgba(6, 79, 132, 1);
`;

const Submit = styled.button`
  margin-top: 5.5%;
  margin-left: -4.5%;
  background: url("진짜돋보기.png");
  border: none;
  width: 39.5px;
  height: 40.5px;
`;

const Gobutton = styled.button`
  border-radius: 15px;
  background-color: rgba(6, 79, 132, 1);
  width: 10%;
  height: 50px;
  border: none;
  position: fixed;
  bottom: 20px;
  left: 85%;
  color: white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
`;

function ScrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function ScrollToTop() {
  window.scrollTo(0, 0);
}

const HashBox = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  margin-bottom: 40px;

`
const Img2 = styled.img`
  width: 500px;

`

const HashTitle = styled.p`
  font-size: 28px;
  margin-bottom: 0;
  color: rgba(6, 79, 132, 1);
  font-weight: 800;
`

const MiniTitle = styled.p`
  font-size: 21px;
  font-weight: 500;
`

const GoToHash = styled.button`
  background: #064F84;
border-radius: 50px;
color:white;
font-size: 15px;
padding:7px;
cursor: pointer;
margin-left: 60px;
margin-right: 60px;
margin-top: 60px;
border: none;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

`
const Box = styled.div`
  display: flex;
  flex-direction: column;

`

const Recommend = () => {
  const navigate = useNavigate();

  const [search, SetSearch] = useState("");
  const [Result, SetResult] = useState([]);

  const handleSearch = (e) => {
    SetSearch(e.target.value);
  };

  const handleUpdateUser = () => {
      axios
      .post(`https://mutsabooked.store/bookrecommend/search/`, {
        search: search
      })
      .then((res) => {
        console.log(res.data.searchresult.filter((e)=> e.book_title === search));
        SetResult();
        moveFun(search, res.data.searchresult.filter((e)=> e.book_title === search));
      });
  };

  function moveFun(search, arr){
    console.log(arr);
    (arr.length!==0) ?
    navigate(`/BookRecommend/${search}`) :
    navigate(`/Noresult/${search}`);

  }

  
const GoToHashPage = () => {
  navigate(`/HashSerch`);
};

  return (
    <div>
      <Navigator></Navigator>
      <Dis>
        <Text>
          책 제목을 입력해주시면,
          <br />
          저희가 독후감을 찾아드릴게요.
        </Text>
        <Img src="추천페이지.png"></Img>
      </Dis>
      <InputBox
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="책 제목을 입력해주세요."
      ></InputBox>
      <Submit onClick={handleUpdateUser}></Submit>
      <Ad>광고문의</Ad>
      <Gobutton onClick={ScrollToBottom}>해시태그를 통한 검색</Gobutton>

      <HashBox>
        <Img2 src="undraw_Faq_re_31cw.png"/>
        <Box>
        <HashTitle>혹시, 책 제목 입력이 어려우신가요?</HashTitle>
        <MiniTitle>해시 태그 선택을 통한<br/>독후감 찾기 서비스를 이용해보세요.</MiniTitle>
        <GoToHash onClick={GoToHashPage}>해시태그를 통한 검색으로 이동하기</GoToHash>
        </Box>
        

      </HashBox>
    </div>
  );
};

export default Recommend;
