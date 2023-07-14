import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

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
  color: black;
  &:hover {
    color: #88aed9;
    transition: 0.5s;
  }
  font-size: 18px;
  cursor: pointer;
`;

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
  flex-direction: column;
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
`;

const SignButton = styled.button`
  font-size: 15px;
  background-color: #fff5ec;
  border: none;
  cursor: pointer;
`;

const Home = () => {
  const [pwType, SetPwType] = useState({
    type: "password",
    visible: false,
  });
  const [ID, SetId] = useState("");
  const [PW, SetPw] = useState("");
  const [NickName, SetNickName] = useState("");
  const [LogCheck, SetLog] = useState(false);
  const [cookies, setCookie] = useCookies(["sessionid", "csrftoken"]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      SetNickName(user.userinfo.nickname);
      SetLog(true);
    }
  }, []);

  const HandleLogin = () => {
    axios
      .post(`https://mutsabooked.store/login/`, {
        userID: ID,
        password: PW,
      })
      .then((res) => {
        SetNickName(res.data.userinfo.nickname);
        SetLog(true);
        localStorage.setItem("loggedInUser", JSON.stringify(res.data));
        setCookie("sessionid", res.data.sessionid);
        setCookie("csrftoken", res.data.csrftoken);
      })
      .catch(() => {
        alert("존재하지 않는 회원 정보입니다!");
      });
  };

  const HandleId = (e) => {
    SetId(e.target.value);
  };

  const HandlePw = (e) => {
    SetPw(e.target.value);
  };

  const HandlePwType = () => {
    SetPwType((prev) => ({
      ...prev,
      visible: !prev.visible,
      type: prev.visible ? "password" : "text",
    }));
  };

  const HandleLogout = () => {
    localStorage.removeItem("loggedInUser");
    SetLog(false);
  };

  return (
    <>
      <Nav>
        <Logo src="아이콘-removebg-preview.png" />
      </Nav>
      <Menu>
        <Page>서비스 소개</Page>
        <Page>마이페이지</Page>
        <Link to={`/CmMain`}>
          <Page>커뮤니티</Page>
        </Link>
        <Link to={`/read`}>
          <Page>나의 서재</Page>
        </Link>
        <Link to={`/recommend`}>
          <Page>도서 추천</Page>
        </Link>
      </Menu>

      <Mid>
        <Left>
          <h1>Welcome to MutsaBooked!</h1>
        </Left>

        <Log>
          {LogCheck ? (
            <div>
              <LogTittle>{NickName}님 환영합니다!</LogTittle>
              <LogButton onClick={HandleLogout}>로그아웃</LogButton>
            </div>
          ) : (
            <div>
              <LogTittle>로그인을 해주세요.</LogTittle>
              <h2>ID</h2>
              <Id
                type="text"
                placeholder="아이디 입력"
                value={ID}
                onChange={HandleId}
              />
              <h2>P/W</h2>
              <Pw
                type={pwType.type}
                placeholder="비밀번호 입력"
                value={PW}
                onChange={HandlePw}
              />
              <ShowPw onClick={HandlePwType}>
                {pwType.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
              </ShowPw>
              <LogButtons>
                <LogButton onClick={HandleLogin}>로그인</LogButton>
                <SignButton>회원가입</SignButton>
              </LogButtons>
            </div>
          )}
        </Log>
      </Mid>
    </>
  );
};

export default Home;
