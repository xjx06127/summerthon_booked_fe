import React from 'react';
import styled from 'styled-components';
import Navigator from './Navigator';

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Line1 = styled.p`
    font-size: 30px;
    margin: 0px;
    margin-bottom: 5px;
    font-weight: 700;
`

const Line2 = styled.p`
    font-size: 30px;
    margin: 0px;
    margin-bottom: 17px;
    font-weight: 700;
`

const Line3 = styled.p`
    font-size: 20px;
    margin: 0px;
    font-weight: 550;
`

const Articles = styled.div`
    

`;

const ArticleBox = styled.div`
    

`;

const ProfileImg = styled.img`

`;

const ProfileNickName = styled.p`
    

`;

const ShowLikeBox = styled.div`
    

`;

const HeartImg = styled.img`
    

`;

const HeartNum = styled.p`
    

`;

//font 하이라이트
const HighLight1 = styled.span`
    color: #667121;
    font-size: 42px;
`

const HighLight2 = styled.span`
    color: #667121;
   
`  

const BookRecommend = () => {
    return (
        <> 
            <Navigator/>
            <TextBox>
                <Line1><HighLight1>백설공주</HighLight1>에 대한</Line1>
                <Line2>독후감 검색 결과입니다.</Line2>
                <Line3>총<HighLight2> 2권</HighLight2>의 독후감이 검색되었습니다.</Line3>
            </TextBox>

            <Articles>
                <ArticleBox>
                    <ProfileImg/>
                    <ProfileNickName>닉네임</ProfileNickName>
                    <ShowLikeBox>
                        <HeartImg/>
                        <HeartNum></HeartNum>
                    </ShowLikeBox>

                </ArticleBox>

            </Articles>
        </>
    );
};

export default BookRecommend;