import React from "react";
import Navigator from "./Navigator";
import Select from "./Select";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const InputBox = styled.input`
  border-radius: 37px;
  border-color: transparent;
  box-shadow: 0px 9px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 29px;
  margin-left: 30px;
`;

const Text = styled.p`
  color: #72736b;
  font-weight: bold;
  font-size: medium;
  margin-left: 100px;
`;

const WriteBox = styled.textarea`
  width: 70%;
  height: 500px;
  background-color: rgba(239, 239, 239, 1);
  border: none;
  border-radius: 1%;
  border-width: 3px;
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  float: left;
  color: #000000;
  font-size: larger;
  margin-top: 50px;
  margin-left: 5%;
  outline: none;
`;

const Button = styled.button`
  background-color: #b9e4c7;
  border-color: transparent;
  margin-top: 1%;
  border-radius: 20px;
  margin-left: -6.5%;
  width: 100px;
  cursor: pointer;
`;
const Memory = styled.div`
  color: #0a4511;
  font-weight: 10px;
  width: 200px;
  border: dotted;
  border-color: #deede2;
  border-radius: 20px;
  position: fixed;
  margin-top: -0%;
`;

const ListBox = styled.div`
  background-color: rgba(175, 190, 220, 0.74);
  width: 200px;
  height: 200px;
  margin-top: 250px;
  z-index: 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
`;
const ListBox1 = styled.div`
  background-color: #7bacb0;
  width: 200px;
  height: 200px;
  margin-top: -40%;
  z-index: -1;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const ListBox2 = styled.div`
  background-color: #d7e462;
  width: 200px;
  height: 200px;
  margin-top: -50%;
  z-index: -2;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Dis = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;

const AddButton = styled.button`
  background-color: transparent;
  color: #464f47;
  border-radius: 12px;
`;
const MemText = styled.div`
  width: 100px;
  height: auto;
  text-align: center;
  font-size: large;
  margin-right: 100px;
`;

const PageBox = styled.input`
  border-radius: 40px;
  background-color: transparent;
  border: transparent;
  border-color: #c4c496;
  font-size: 20px;
  width: 50px;
`;

const MText = styled.textarea`
  background-color: transparent;
  border-color: rgba(167, 167, 167, 0.5);
  border-radius: 12px;
  border-width: 3px;
`;

const ReviewTitleInput = styled.input`
  width: 400px;
  height: 50px;
  margin-left: 30%;
  margin-top: 2%;
`;

const WritePage = () => {
  const navigate = useNavigate();
  const book_title = useParams().book_title;
  const author = useParams().author;
  const created_at = useParams().created_at;
  const NickName = useParams().NickName;

  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [ei, setEi] = useState("");
  const [sn, setSn] = useState("");
  const [tf, setTf] = useState("");
  const [jp, setJp] = useState("");
  const [pickpage, setPickPage] = useState("");
  const [pickwriting, setPickWriting] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [writeContent, setWriteContent] = useState(""); // Added state variable

  const handleOptionChange = (option, value) => {
    // 선택한 옵션 값을 상태로 업데이트
    if (option === "genre") {
      setGenre(value);
    } else if (option === "mood") {
      setMood(value);
    } else if (option === "ei") {
      setEi(value);
    } else if (option === "sn") {
      setSn(value);
    } else if (option === "tf") {
      setTf(value);
    } else if (option === "jp") {
      setJp(value);
    }
    // 필요한 옵션들에 대해 위와 같이 처리
  };

  const handlePageChange = (event) => {
    const value = event.target.value;
    setPickPage(value);
  };

  const handleWritingChange = (event) => {
    const value = event.target.value;
    setPickWriting(value);
  };

  const handleWriteBoxChange = (event) => {
    const value = event.target.value;
    setWriteContent(value);
  };
  const GoRead = () => {
    axios
      .post(`https://mutsabooked.store/bookreview/create/`, {
        review_title: "독후감 제목",
        book_title: "책 제목",
        author: "저자",
        genre: "소설",
        feeling: "신남",
        ei: "외향적",
        ns: "감각적",
        ft: "사고적",
        jp: "인식적",
        content: "독후감 내용",
        pickpage: "abc",
        pickwriting: "abbb",
      })
      .then(() => navigate(`/read`));
  };
  return (
    <div>
      <Navigator></Navigator>
      <Text>제목: {book_title}</Text>
      <Text>
        저자: {author} ㅣ 읽은날: {created_at}{" "}
      </Text>
      <Select handleOptionChange={handleOptionChange} />

      <ReviewTitleInput
        placeholder="독후감 제목"
        value={reviewTitle}
        onChange={(e) => setReviewTitle(e.target.value)}
      />
      <WriteBox value={writeContent} onChange={handleWriteBoxChange}></WriteBox>
      <Button onClick={() => GoRead()}>출간하기</Button>

      <Dis>
        <MemText>
          {" "}
          <Memory>
            기억하고 싶은
            <br /> 책 구절이 있으신가요? <br /> <br /> 페이지
            <PageBox value={pickpage} onChange={handlePageChange}></PageBox>
            pg <br /> <br /> 구절{" "}
            <MText value={pickwriting} onChange={handleWritingChange}></MText>
            <AddButton>추가</AddButton>
          </Memory>
          <ListBox>
            {" "}
            <li>
              "영감이 나에게 오지 않을 때 내가 그것을 만나러 반을 간다." 102pg
            </li>{" "}
          </ListBox>
        </MemText>
      </Dis>
    </div>
  );
};

export default WritePage;
