import React from 'react';
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E2DDB3;
  height: 70px;
`;

const Logo = styled.img`
    content: url(${(props)=> props.src});
    width: 170px;
    margin-left: 70px;
    margin-right: 220px;
    margin-top: 15px;
    transform: rotate(-13deg);
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
`;

const Page = styled.h1`
    margin-left: 50px;
    margin-right: 20px;
    color: white;
    &:hover{color:#A52C2C;
            transition: 0.5s;};
    font-size: 21px;
`;


const Navigator = () => {
    return (
       <>
            <Nav>
            <Logo src="bookedLogo.png"></Logo>
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