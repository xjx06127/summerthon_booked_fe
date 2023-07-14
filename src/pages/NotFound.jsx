import React from 'react';
import styled from "styled-components";

const Con=styled.div`
font-family: 'BMJUA'; 
font-weight:100px;
font-size: 20px;
margin-left: 20px;
`;

const NotFound = () => {
   
    return (
        <Con>
     <h1>페이지를 찾을 수 없습니다.</h1>
     </Con>
    );
};

export default NotFound;