import React from 'react';
import styled from "styled-components";
import { useState } from 'react';

//Home 네비게이터
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E2E8CC;
  height: 95px;
`;

const Logo = styled.img`
    content: url(${(props)=> props.src});
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
    &:hover{color:#88AED9;
            transition: 0.5s;};
    font-size: 18px;
    cursor: pointer;
`;

const Section1 = styled.div`
    display: flex;
    background: #B6C656;
    padding-left: 200px;
`;

const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 100px;
    margin-right: 70px;
    align-items: flex-end;
`;

const Section3 = styled.div`

`;

const Lines = styled.div`
display: flex;
flex-direction: column;

width: 700px;
margin-left: 50px;
`;

const Line1 = styled.h1`
color: white;
margin-top: 70px;
margin-bottom: 0px;
font-size: 50px;

`;

const Line2 = styled.h1`
color: white;
margin-top: 0px;
font-size: 50px;
`;

const Line3 = styled.h1`
color: white;
margin-bottom: 70px;
font-size: 26px;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-bottom: 100px;

`

const Text = styled.h1`
text-align: right;
font-size: 38px;
`;

const GoToMyLibrary = styled.button`
width: 188.81px;
height: 49px;
background: #8E9851;
border-radius: 50px;
filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25));
color: white;
border: none;
font-size: 16px;
cursor: pointer;

`;

const ArrowIcon1 = styled.img`
margin: 0 auto;
display: block;
`;

const BackGroundIcon = styled.img`

`;

const Texts = styled.div`
margin-left: 100px;
margin-top: 80px;

`;

const Text2 = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;

`;

const Text3 = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 34px;
color: #8E9851;

`;

const Text4 = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
color: rgba(142, 152, 81, 0.67);
`;

//정보 기입란
const Inputs = styled.div`
display: flex;
flex-direction: column;
margin-top: 90px;
margin-left: 600px;
margin-bottom: 100px;
width: 600px;
`;

const Input1 = styled.div`
display: flex;
align-items: center;

`;

const Input2 = styled.div`
display: flex;
flex-direction: column;

`;

const Input3 = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;

const Text5 = styled.p`
font-size: 20px;
font-weight: 800;
`;

const Text6 = styled.p`
color: #8E9851;
font-weight: 800;
margin-left: 17px;

`

const Blank = styled.input`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.15);
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
margin-left: 17px;
font-size: 20px;
text-align: center;
height: 32px;
`;

const SubmitButton = styled.button`
background: #8E9851;
border-radius: 50px;
width: 130px;
height: 50px;
filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25));
color: white;
border: none;
font-size: 20px;
cursor: pointer;
margin: 0 auto;
display: block;
margin-bottom: 100px;
`;

const Img1 = styled.img`
    margin-left: 190px;
`;

const Img2 = styled.img`
    margin-left: 12px;
`

//폰트 하이라이트
const HightLight1 = styled.span`
color: #7A881F;
font-size: 65px;
`;

const HightLight2 = styled.span`
    font-size: 65px;
    color: #7A881F;
`;


const MakeBook = () => {
    const [name,SetName] = useState("");
    const [address,SetAddress] = useState("");
    const [number,SetNumber] = useState("");

    const SubmitSuccess = () => {
        (name && address && number) ? 
        alert("정상적으로 접수되었습니다.") :
        alert("정보가 제대로 입력되지 않았습니다.")
        };


    return (
        <>
            <Nav>
            <Logo src="아이콘-removebg-preview.png"></Logo>
            </Nav>
            <Menu>
                <Page>서비스 소개</Page>
                <Page>마이페이지</Page>
                <Page>커뮤니티</Page>
                <Page>나의 서재</Page>
                <Page>도서 추천</Page>
            </Menu>

            <Section1>
                <Lines>
                    <Line1>Booked 서재를</Line1>
                    <Line2><HightLight2>당신 집</HightLight2>의 서재로<Img2 src="Vector.png"/></Line2>
                    <Line3>독서 기록을 책으로 만들어 오래도록 간직하세요.</Line3>
                </Lines>
                <Img1 src="책광고 일러스트.png"/>
            </Section1>

            <Section2>
                    <BackGroundIcon src="RiSendPlaneFill.png"></BackGroundIcon>
                    <Right>
                        <Text>현재 홍길동님의 서재에는 <HightLight1>10개</HightLight1>의 독서가<br/> 기록되어있어요.</Text>
                        <GoToMyLibrary>나의 서재 바로가기</GoToMyLibrary>
                    </Right>
            </Section2>
            <ArrowIcon1 src="FiChevronsDown.png"/>

            <Section3>
                <Texts>
                    <Text2>배송 정보를 적어주시면<br/>저희가 전달해드릴게요.</Text2>
                    <Text3>입력 전에 다시 한 번 확인해주세요.</Text3>
                    <Text4>받는 분과 배송 받을 주소를<br/>반드시 정확하게 입력해주세요.</Text4>
                </Texts>
                <Inputs>
                    <Input1>
                        <Text5>받는 분</Text5>
                        <Blank onChange={(e) => SetName(e.target.value)} value={name} />
                    </Input1>
                    <Input2>
                        <Text5>배송받을 주소</Text5>
                        <Blank value={address} onChange={(e)=> SetAddress(e.target.value)}></Blank>
                    </Input2>
                    <Input3>
                        <Text5>전화 번호</Text5>
                        <Blank value={number} onChange={(e) => SetNumber(e.target.value)}></Blank>
                        <Text6>"-"없이 입력해주세요.</Text6>
                    </Input3>
                </Inputs>
            </Section3>
            <SubmitButton onClick={SubmitSuccess}>입력 완료</SubmitButton>

        </>
    );
};

export default MakeBook;
