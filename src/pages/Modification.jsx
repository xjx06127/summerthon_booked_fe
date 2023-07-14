import React from 'react';
import styled from "styled-components"
import Navigator from './Navigator';

const Title = styled.h1`
    font-size: 40px;
    margin-top: 130px;
    margin-left: 100px;
    color: #8E9851;
    font-family: 'BMJUA';
`;

const Box = styled.div`
    margin-left: 350px;
    font-family: 'BMJUA';
`;

//ID
const IdBox = styled.div`
    display: flex;
    align-items: center;

`;

const Id = styled.h1`
    margin-right: 30px;
`;

const ShowId = styled.h1`
    margin-right: 20px;
`

const Text = styled.p`
    color:#8E9851;
    font-weight: 600;

`;

//NickName
const NickNameBox = styled.div`
    display: flex;
    align-items: center;

`;

const NickName = styled.h1`
    margin-right: 30px;
`;

const ShowNickName = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.09);
    box-shadow: 0px 2px 4px 1px rgba(144, 167, 4, 0.52);
    border-radius: 25px;
    height: 40px;
    padding-left: 18px;
    font-size: 16px;
    font-family: 'BMJUA';
`;

//MBTI
const MbtiBox = styled.div`
    display: flex;
    align-items: center;

`;

const Mbti = styled.h1`
    margin-right: 30px;
`;

const ShowMbti = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.09);
    box-shadow: 0px 2px 4px 1px rgba(144, 167, 4, 0.52);
    border-radius: 25px;
    height: 40px;
    padding-left: 18px;
    font-size: 16px;
    font-family: 'BMJUA';
`;

//수정 완료 버튼
const ModificationButton = styled.button`
    background: #8E9851;
    border-radius: 50px;
    border: none;
    color:white;
    padding: 12px;
    cursor: pointer;
    margin-left: 700px;
    font-size: 17px;
    font-family:'BMJUA';
`;


const Modification = () => {
    return (
        <>
        <Navigator/>
        <Title>회원 정보 수정하기</Title>
        <Box>
            <IdBox>
                <Id>ID</Id>
                <ShowId>yeontaek</ShowId>
                <Text>ID는 변경이 불가능합니다.</Text>
            </IdBox>
            <NickNameBox>
                <NickName>닉네임</NickName>
                <ShowNickName placeholder="기존 닉네임"/>
            </NickNameBox>
            <MbtiBox>
                <Mbti>MBTI</Mbti>
                <ShowMbti placeholder="기존 MBTI"/>
            </MbtiBox>
        </Box>
            <ModificationButton>수정 완료</ModificationButton>
        </>
    );
};

export default Modification;
