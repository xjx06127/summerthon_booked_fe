import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  height: 1024px;
  font-family: "BMJUA";
`;

const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "BMJUA";
`;

const WriteText = styled.div`
  font-size: 30px;
  line-height: 36px;
  color: #667121;
`;

const Input = styled.input`
  margin-top: 20px;
  width: 1016px;
  height: 65px;
  background: #ffffff;
  border: 2px solid #efebeb;
  box-shadow: 0px 10px 10px #efebeb;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "BMJUA";
  font-size: 20px;
  line-height: 24px;
  padding: 8px;
`;

const ContentInput = styled.textarea`
  margin-top: 45px;
  width: 1016px;
  height: 400px;
  border: 2px solid #efebeb;
  border-radius: 0;
  box-shadow: 0px 10px 10px #efebeb;
  outline: none;
  font-family: "BMJUA";
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  line-height: 24px;
  padding: 8px;
`;

const SubmitButton = styled(Link)`
  width: 109px;
  height: 40px;
  background: #d9d9d9;
  border-radius: 40px;
  border: none;
  font-size: 20px;
  line-height: 24px;
  color: #4a7594;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  line-height: 2;
  cursor: pointer;
`;

const SubmitOk1 = () => {
  alert("정상적으로 접수되었습니다.");
};

const Con2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const CmWrite = () => {
  const activeMenu = "커뮤니티";

  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");
  const navigate = useNavigate();

  const handleTitle = (e) => {
    SetTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleContent = (e) => {
    SetContent(e.target.value);
    console.log(e.target.value);
  };

  const handleUpdateUser = () => {
    axios
      .post(`https://mutsabooked.store/posts/create/`, {
        title: title,
        content: content,
      })
      .then((res) => {
        navigate(`/mypage`);
      });
  };

  return (
    <>
      <Navigator activeMenu={activeMenu} />
      <Con>
        <Desktop>
          <Con2>
            <WriteText>글쓰기</WriteText>
            <SubmitButton to="/other-page" onClick={handleUpdateUser}>
              등록하기
            </SubmitButton>
          </Con2>
          <Input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder=" 제목을 입력하세요."
          />
          <ContentInput
            onChange={handleContent}
            value={content}
            placeholder=" 내용을 입력하세요."
          />
        </Desktop>
      </Con>
    </>
  );
};

export default CmWrite;
