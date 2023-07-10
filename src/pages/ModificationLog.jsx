import React from 'react';
import Navigator from '../components/Navigator';
import styled from "styled-components";
import { useState } from 'react';


const BackColor = styled.div`
    background-color:white;
    height: 100vh;
    width: 100%;
    padding-top: 120px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 590px;
`;

const Line1 = styled.h1`
    color: #61673C;
    margin-bottom: 0px;
`;


const Line2 = styled.h1`
    margin-top: 10px;

`;

const LogBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFDFD;
    box-shadow: 0px 20px 10px rgba(199, 213, 114, 0.4);
    border-radius: 50px;
    margin-left: 590px;
    margin-right: 590px;
    width: 570px;
    height: 320px;

`;

const IdBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 60px;
`;
const Id = styled.p`
     font-size: 27px;
     font-weight: 600;
`;

const PwBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 60px;
    font-size: 27px;
`;

const Pw = styled.p`
    font-weight: 600;
`;

const PwInput = styled.input`
    margin-left: 15px;
    font-size: 25px;
    padding: 3px;
`;

const LogButton = styled.button`
background: #8E9851;
border-radius: 50px;
border: none;
color:white;
font-size: 20px;
width: 70px;
height: 40px;
margin-left: 460px;
margin-top: 25px;
cursor: pointer;
`;

//ID, PW 옆에 동그라미 디자인
const Circle = styled.div`
    background-color: #61673C;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 10px;
`;

const ModificationLog = () => {
    const [pwType, setPwType]=useState({
        type: "password",
        visible: false,
    });

    const PwVisibleSelect = styled.span`
        font-size: 18px;
        text-align: right;
        margin-right: 88px;
        margin-bottom: 14px;
        cursor: pointer;
    `;

    const HandlePwType = () => {
        setPwType(
            pwType.visible ? {type: "password", visible: false} : {type:"text", visible: true}
        );
    };



    return (
        <>
            <Navigator/>
            <BackColor>
                <Text>
                    <Line1>회원 정보 수정 페이지로 이동합니다.</Line1>
                    <Line2>비밀번호를 입력해주세요.</Line2>
                </Text>
                <LogBox>
                    <IdBox>
                        <Circle/>
                        <Id>ID : </Id>
                    </IdBox>
                    <PwBox>
                        <Circle/>
                        <Pw>P/W : </Pw>
                        <PwInput type={pwType.type} placeholder="비밀번호 입력"></PwInput>
                    </PwBox>
                    <PwVisibleSelect onClick={HandlePwType}>{
                                pwType.visible ? "비밀번호 숨기기" : "비밀번호 보기"
                        }</PwVisibleSelect>
                    <LogButton>입력</LogButton>
                </LogBox>



            </BackColor>
        </>
    );
};

export default ModificationLog;
