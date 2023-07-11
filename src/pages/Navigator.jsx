import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(187, 226, 178, 0.97);
  height: 70px;
`;

const Logo = styled.img`
  content: url(${(props) => props.src});
  width: 150px;
  margin-left: 70px;
  margin-right: 220px;
  margin-top: 5px;
  height: 110px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Page = styled.h1`
  margin-left: 50px;
  margin-right: 20px;
  color: ${(props) => (props.isActive ? "#88aed9" : "white")};
  &:hover {
    color: #88aed9;
    transition: 0.5s;
  }
  font-size: 21px;
  cursor: pointer;
`;

const Navigator = ({ activeMenu }) => {
  return (
    <>
      <Nav>
        <Logo src="아이콘-removebg-preview.png" />
        <Menu>
          <Page isActive={activeMenu === "서비스 소개"}>서비스 소개</Page>
          <Page isActive={activeMenu === "마이페이지"}>마이페이지</Page>
          <Page isActive={activeMenu === "커뮤니티"}>커뮤니티</Page>
          <Page isActive={activeMenu === "나의 서재"}>나의 서재</Page>
          <Page isActive={activeMenu === "도서 추천"}>도서 추천</Page>
        </Menu>
      </Nav>
    </>
  );
};

export default Navigator;
