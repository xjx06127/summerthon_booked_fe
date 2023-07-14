import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 350px;
  background-color: rgba(155, 174, 213, 0.74);
  float: left;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "BMJUA";
`;

const InputBox = styled.input`
  border-radius: 37px;
  border: none;
  box-shadow: 0px 9px 4px 0px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 29px;
  margin-left: 30px;
  background: #fffbfb;
  outline: none;
  ::placeholder {
    text-align: center;
  }
  padding-left: 10%;
  height: 40px;
`;

const Text = styled.p`
  color: rgba(8, 87, 145, 1);
  font-size: xx-large;
  margin-left: 100px;
  font-family: "BMJUA";
`;
const Rowbox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;
const Intext = styled.div`
  color: white;
  font-size: 25px;
  width: 200px;
`;
const IIntext = styled.div`
  color: white;
  font-size: xx-large;
  padding-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Gobutton = styled.button`
  border-radius: 15px;
  color: rgba(8, 87, 145, 0.64);
  width: 10%;
  height: 50px;
  border: none;
  position: fixed;
  bottom: 20px;
  left: 85%;
  background-color: transparent;
  font-weight: bolder;
  font-family: "BMJUA";
  cursor: pointer;
`;

const BookInform = () => {
  const NickName = useParams();
  const navigate = useNavigate();

  const [book_title, SetTitle] = useState("");
  const [author, SetAuthor] = useState("");

  const handleUpdateUser = () => {
    if (book_title === "" || author === "") {
      alert("책 제목과 저자를 입력해주세요.");
      return;
    }
    navigate(`/writepage/${book_title}/${author}`);
  };

  const handleTitle = (e) => {
    SetTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleAuthor = (e) => {
    SetAuthor(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Navigator />
      <Text>
        이제,
        <br />
        이곳에서
        <br />
        나만의 이야기를 적어보세요.
      </Text>
      <Box>
        <InputContainer>
          <IIntext>먼저, 간단하게 책 정보를 입력해주세요.</IIntext>
          <Rowbox>
            <Intext>책 제목</Intext>
            <InputBox
              type="text"
              onChange={handleTitle}
              value={book_title}
              placeholder="제목을 입력해주세요."
            ></InputBox>
          </Rowbox>
          <Rowbox>
            <Intext>저자</Intext>
            <InputBox
              onChange={handleAuthor}
              value={author}
              placeholder="저자를 입력해주세요."
            ></InputBox>
          </Rowbox>
        </InputContainer>
      </Box>
      <Gobutton onClick={handleUpdateUser}>글쓰러가기</Gobutton>
    </div>
  );
};

export default BookInform;
