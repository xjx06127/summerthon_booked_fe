import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationText = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px);
  }

  5% {
    opacity: 1;
    transform: translateX(0px);
  }

  50% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(0px);
  }
`;


const SelectButtons = styled.div`
  display: flex;
  margin-left: 168px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 100px;
  background-color: ${(props) => (props.selected ? 'black' : '#d9d9d9')};
`;

const Phrase = styled.div`
  animation: ${AnimationText} 5s linear infinite;
`;

const PhraseLine1 = styled.h1`
    font-size: 38px;
    margin-bottom: 10px;
`;

const PhraseLine2 = styled.h1`
    font-size: 38px;
    margin-top: 0px; 
`;

const Author = styled.p`
    font-size: 20px;
    margin-top: 0;
`;



//하이라이트 디자인
const HightLight1 = styled.span`
    color: red;
`;

const HightLight2 = styled.span`
    color:#651581;
    
`

const TextAnimation = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);

  const handleCircleClick = (index) => {
    setSelectedCircle(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCircle((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>

   
    <Phrase>
        {selectedCircle === 0 ? (
          <>
            <PhraseLine1><HightLight1>책</HightLight1>은 가장 조용하고</PhraseLine1>
                <PhraseLine2>변함없는 <HightLight2>벗</HightLight2>이다.</PhraseLine2>
                <Author>- 찰스 윌리엄 엘리엇</Author>
          </>
        ) : selectedCircle === 1 ? (
          <>
            <PhraseLine1><HightLight1>하루에 3시간을</HightLight1>걸으면</PhraseLine1>
                <PhraseLine2>7년 후에 <HightLight2>지구 한 바퀴</HightLight2>돌수있다.</PhraseLine2>
                <Author>- 사무엘 존슨</Author>
          
          </>
        ) : (
          <>
            <PhraseLine1><HightLight1>애니메이션</HightLight1>어려워요</PhraseLine1>
                <PhraseLine2>아자아자 <HightLight2>화이팅</HightLight2>이다.</PhraseLine2>
                <Author>- 이연택</Author>
          </>
        )}
    </Phrase>

    <SelectButtons>
        <Circle
          onClick={() => handleCircleClick(0)}
          selected={selectedCircle === 0}
        />
        <Circle
          onClick={() => handleCircleClick(1)}
          selected={selectedCircle === 1}
        />
        <Circle
          onClick={() => handleCircleClick(2)}
          selected={selectedCircle === 2}
        />
    </SelectButtons>


  
      
    </>
  );
};

export default TextAnimation;