import React from 'react';
import styled from "styled-components";


const BoxEach = styled.div`

  margin: 15px;
  border-radius: 5px;
  display: inline-block;
  background-color:rgba(217, 217, 217, 1);
  width: 350px;
  height: 380px;

`;


const Write = () => {
    return (
        <div>
            <BoxEach></BoxEach>
        </div>
    );
};

export default Write;