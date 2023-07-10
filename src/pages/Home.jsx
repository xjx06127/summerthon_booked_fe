import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


//Home 네비게이터
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E2E8CC;
  height: 110px;
`;

const Logo = styled.img`
    content: url(${(props)=> props.src});
    width: 270px;
    transform: rotate(-13deg);
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
    &:hover{color:#A52C2C;
            transition: 0.5s;};
    font-size: 21px;
    cursor: pointer;
`;

//Home 중간페이지 (로그인 부분)
const Mid = styled.div`
    background-color: #FFF5EC;
    display: flex;
    justify-content: space-around;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;

`
const PhraseLine1 = styled.h1`
    font-size: 47px;
    margin-bottom: 10px;
`;

const PhraseLine2 = styled.h1`
    font-size: 47px;
    margin-top: 0px; 
`;

const Author = styled.p`
    font-size: 28px;
    text-align: right;
    margin-top: 0;
`;

const SelectButtons = styled.div`
    display: flex;
    margin-left: 168px;

`;

const Circle = styled.div`
    background-color: #D9D9D9;
    width: 13px;
    height: 13px;
    border-radius: 6px;
    margin-right: 10px;
    &:hover{background-color:black;
        transition: 0.5s;};
`;

const Log = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    margin-bottom: 100px;
    font-size: 14px;
`;

const LogTittle = styled.h1`
    margin-bottom: 0;
`;

const Id = styled.input`
    width: 292px;
    height: 47px;
    padding-left: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    border: none;
`;

const Pw = styled.input`
    width: 292px;
    height: 47px;
    padding-left: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    border: none;
`;

const LogButtons = styled.div`
    margin-left: 250px;
    margin-top: 20px;
`;

const LogButton = styled.button`
    margin-right: 10px;
    font-size: 17px;
    background-color: #FFF5EC;
    border: none;
    cursor: pointer;
`;

const SignButton = styled.button`
    font-size: 17px;
    background-color: #FFF5EC;
    border: none;
    cursor: pointer;
`;

//하이라이트 디자인
const HightLight1 = styled.span`
    color: red;
`;

const HightLight2 = styled.span`
    color:#651581;
    
`

//Home 광고 페이지
const Ad = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 42px;
    background: #c0cb80;
    box-shadow: 0px 10px 4px rgba(149, 176, 72, 0.27);
    border-radius: 30px;
    cursor: pointer;
`

const Line1 = styled.h1`
    margin-top: 20px;
    margin-left: 50px;
    font-size: 25px;
`;

const Line2 = styled.h1`
    margin-top: 5px;
    text-align: center;
    font-size: 35px;
    color: #4A7594;
`;

const Line3 = styled.h1`
    text-align:right;
    margin-right: 50px;
    font-size: 20px;
    color:white;
`;



const Home = () => {
    const navigate = useNavigate();
    const GoToMakeBookPage = () => {
        navigate(`/MakeBookService`);
    };

    return (
        <>
            <Nav>
            <Logo src="bookedLogo.png"></Logo>
            </Nav>
            <Menu>
                <Page>서비스 소개</Page>
                <Page>마이페이지</Page>
                <Page>커뮤니티</Page>
                <Page>나의 서재</Page>
                <Page>도서 추천</Page>
            </Menu>

            <Mid>
            <Left>
                <PhraseLine1><HightLight1>책</HightLight1>은 가장 조용하고</PhraseLine1>
                <PhraseLine2>변함없는 <HightLight2>벗</HightLight2>이다.</PhraseLine2>
                <Author>- 이가희</Author>
                <SelectButtons>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                </SelectButtons>
            </Left>

            <Log>
                <LogTittle>로그인을 해주세요.</LogTittle>
                <h2>ID</h2>
                    <Id placeholder="아이디 입력"></Id>
                <h2>P/W</h2>
                    <Pw placeholder="비밀번호 입력"></Pw>
                <LogButtons>
                    <LogButton>로그인</LogButton>
                    <SignButton>회원가입</SignButton>
                </LogButtons>
            </Log>
            </Mid>

            <Ad onClick={()=>GoToMakeBookPage()}>
            <Line1>독서 기록을 책으로 만들어 오래도록 간직하세요.</Line1>
            <Line2>" Booked 서재를 당신 집의 서재로 "</Line2>
            <Line3>해당 배너를 클릭하면 페이지로 이동합니다.</Line3>
            </Ad>

        </>
    );
};

export default Home;