import React from "react";
import Navigator from "./Navigator";
import Select from "./Select";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "react-router-dom";
import { useState } from "react";

const InputBox = styled.input`
  border-radius: 37px;
  border-color: transparent;
  box-shadow: 0px 9px 4px 0px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 29px;
  margin-left: 30px;
  font-family: 'BMJUA';
`;

const Text = styled.p`
  color: #72736b;
  font-weight: bold;
  font-size: medium;
  margin-left: 100px;
  font-family: 'BMJUA';
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
  font-family: 'BMJUA';
`;

const Button = styled.button`
  background-color: #b9e4c7;
  border-color: transparent;
  margin-top: 1%;
  border-radius: 20px;
  margin-left: -120px;
  width: 100px;
  height:35px;
  cursor: pointer;
  font-family: 'BMJUA';
`;
const Memory = styled.div`
  color: #0a4511;
  font-weight: 10px;
  width: 200px;
  border: dotted;
  border-color: #deede2;
  border-radius: 20px;
  margin-top: -0%;
  font-family: 'BMJUA';
  padding:10px;
`;

const ListBox = styled.div`
  background-color: rgba(175, 190, 220, 0.74);
  width: 200px;
  height: 200px;
  margin-top: 40px;
  z-index: 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  font-family: 'BMJUA';
  padding: 10px;
  text-align: left;
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
  font-family: 'BMJUA';
`;

const AddButton = styled.button`
  background-color: transparent;
  color: #464f47;
  border-radius: 12px;
  font-family: 'BMJUA';
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
  font-family: 'BMJUA';
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
  padding-left:15px;
  font-family: 'BMJUA';
  font-size: 20px; 
  
`;

const WritePage = () => {
  const navigate = useNavigate();
  const book_title = useParams().book_title;
  const author = useParams().author;
  const created_at = useParams().created_at;
  const NickName = useParams().NickName;
  const GoRead = () => {};

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
  const [quotes, setQuotes] = useState([]);

  const addQuote = () => {
    const newQuote = {
      page: pickpage,
      content: pickwriting,
    };
    setQuotes([...quotes, newQuote]);
    setPickPage("");
    setPickWriting("");
  };


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
            <PageBox value={pickpage} onChange={handlePageChange} ></PageBox>
            pg <br /> <br /> 구절{" "}
            <MText value={pickwriting} onChange={handleWritingChange}></MText>
            <AddButton onClick={addQuote}>추가</AddButton>
          </Memory>
          <ListBox>
  {quotes.map((quote, index) => (
    <li key={index}>
      {quote.content} , {quote.page}pg
    </li>
  ))}
</ListBox>

        </MemText>
      </Dis>
    </div>
  );
};

export default WritePage;