import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(187, 226, 178, 0.97);
  height: 70px;
  font-family: "BMJUA";
`;

const LogoLink = styled(Link)`
  text-decoration: none; /* 링크 밑줄 제거 */
`;

const Logo = styled.img`
  content: url(${(props) => props.src});
  width: 150px;
  margin-left: 0px;
  margin-top: 5px;
  height: 110px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Page = styled(Link)`
  //링크넣기
  margin-left: 50px;
  margin-right: 20px;
  color: ${(props) => (props.isActive ? "#88aed9" : "white")};
  &:hover {
    color: #88aed9;
    transition: 0.5s;
  }
  font-size: 21px;
  cursor: pointer;
  width: 120px;
  text-decoration: none; /* 밑줄 제거 */
`;

const Navigator = ({ activeMenu }) => {
  return (
    <>
      <Nav>
        <LogoLink to="/">
          <Logo src="/아이콘-removebg-preview.png" />
        </LogoLink>
        <Menu>
          <Page to="/Intro" isActive={activeMenu === "서비스 소개"}>
            서비스 소개
          </Page>
          <Page to="/MyPage" isActive={activeMenu === "마이페이지"}>
            마이페이지
          </Page>
          <Page to="/CmMain" isActive={activeMenu === "커뮤니티"}>
            커뮤니티
          </Page>
          <Page to="/read" isActive={activeMenu === "나의 서재"}>
            나의 서재
          </Page>
          <Page to="/Recommend" isActive={activeMenu === "독후감 검색"}>
            독후감 검색
          </Page>
        </Menu>
      </Nav>
    </>
  );
};

export default Navigator;
