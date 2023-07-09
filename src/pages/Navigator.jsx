import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(187, 226, 178, 0.97);
  height: 70px;
`;

const Logo = styled.img`
    content: url(${(props)=> props.src});
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
    color: white;
    &:hover{color:#88aed9;
            transition: 0.5s;};
    font-size: 21px;
`;


const Navigator = () => {
    return (
       <>
            <Nav>
            <Logo src="아이콘-removebg-preview.png"></Logo>
            <Menu>
                <Page>서비스 소개</Page>
                <Page>마이페이지</Page>
                <Page>커뮤니티</Page>
                <Page>나의 서재</Page>
                <Page>도서 추천</Page>
            </Menu>


            </Nav>
           
            
       </>
    );
};

export default Navigator;