import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TextAnimation from "./TextAnimation";
import { Link } from "react-router-dom";
//Home 네비게이터

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bbe2b2;
  height: 95px;
`;

const Logo = styled.img`
  content: url(${(props) => props.src});
  width: 220px;
  height: 150px;
  padding: 0px;
  margin-top: -1.4%;
`;

const Con = styled.div`
  font-family: "BMJUA";
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 17px;
`;

const Page = styled.h1`
  margin-top: 0px;
  margin-left: 50px;
  margin-right: 20px;
  text-decoration: none; /* 밑줄 제거 */

  color: black;
  &:hover {
    color: #88aed9;
    transition: 0.5s;
  }
  font-size: 18px;
  cursor: pointer;
`;

//Home 중간페이지 (로그인 부분)
const Mid = styled.div`
  background-color: #fff5ec;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 800px;
`;
const Log = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 70px;
  font-size: 12px;
`;

const LogTittle = styled.h1`
  margin-bottom: 15px;
  font-size: 30px;
`;

const Id = styled.input`
  width: 292px;
  height: 47px;
  padding-left: 11px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 17px;
`;

const Pw = styled.input`
  width: 292px;
  height: 47px;
  padding-left: 11px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 17px;
`;

const ShowPw = styled.p`
  font-size: 14px;
  cursor: pointer;
  text-align: right;
  margin-right: 40px;
`;

const LogButtons = styled.div`
  margin-left: 250px;
  margin-top: 20px;
`;

const LogButton = styled.button`
  margin-right: 10px;
  font-size: 15px;
  background-color: #fff5ec;
  border: none;
  cursor: pointer;
  font-family: "BMJUA";
`;

const SignButton = styled.button`
  font-size: 15px;
  background-color: #fff5ec;
  border: none;
  cursor: pointer;
  font-family: "BMJUA";
`;

//Home 광고 페이지
const Ad = styled.div`
  display: flex;
  flex-direction: column;
  /* 
      margin-left: 270px;
      margin-right: 270px;
      margin-top: 110px;
      margin-bottom: 50px;
      height: 180px;*/
  width: 900px;
  height: 180px;

  margin: 0 auto;
  margin-top: 80px;

  background: url(leaves_background.png);
  background-position: -500px -100px;

  border: 0.5px solid rgba(0, 0, 0, 0.4);
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  cursor: pointer;
`;

const Line1 = styled.h1`
  text-align: right;
  margin-top: 20px;
  margin-right: 300px;
  font-size: 23px;
`;

const Line2 = styled.h1`
  margin-top: 10px;
  margin-right: 180px;
  text-align: right;
  font-size: 32px;
  color: #4a7594;
`;

const Line3 = styled.h1`
  text-align: right;
  margin-right: 50px;
  font-size: 17px;
  color: #babda4;
`;

const NotLog = styled.div``;

const LogSuccess = styled.div``;
const Img2 = styled.img`
  height: 120px;
  width: 120px;
  margin-right: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const [pwType, SetPwType] = useState({
    type: "password",
    visible: false,
  });

  const [ID, SetId] = useState("");
  const [PW, SetPw] = useState("");
  const [NickName, SetNickName] = useState("");
  const [LogCheck, SetLog] = useState(0);
  const GoToMakeBookPage = () => {
    navigate(`/MakeBookService`);
  };

  return (
    <>
      <Nav>
        <Logo src="/아이콘-removebg-preview.png" />
      </Nav>
      <Con>
        <Menu>
          <Link to={`/intro`}>
            <Page>서비스 소개</Page>
          </Link>
          <Link to={`/mypage`}>
            <Page>마이페이지</Page>
          </Link>
          <Link to={`/cmmain`}>
            <Page>커뮤니티</Page>
          </Link>
          <Link to={`/read`}>
            <Page>나의 서재</Page>
          </Link>
          <Link to={`/recommend`}>
            <Page>독후감 검색</Page>
          </Link>
        </Menu>

        <Mid>
          <Left>
            <TextAnimation />
          </Left>

          <Log>
            <Img2 src="/멋사배경제거.png" />
            <LogTittle>아기사자님 환영합니다!</LogTittle>
          </Log>
        </Mid>

        <Ad onClick={() => GoToMakeBookPage()}>
          <Line1>독서 기록을 책으로 만들어 오래도록 간직하세요.</Line1>
          <Line2>" Booked 서재를 당신 집의 서재로 "</Line2>
          <Line3>해당 배너를 클릭하면 페이지로 이동합니다.</Line3>
        </Ad>
      </Con>
    </>
  );
};

export default Home;
