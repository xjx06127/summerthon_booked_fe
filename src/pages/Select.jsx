import React from "react";
import "./Css/Select.css";
import styled from "styled-components";
import { useState } from "react";

const SelBox = styled.span`
  width: 80%;
  height: 40px;
  display: flex;
  margin-left: 3%;
`;

const Select = ({ handleOptionChange }) => {
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [ei, setEi] = useState("");
  const [sn, setSn] = useState("");
  const [tf, setTf] = useState("");
  const [jp, setJp] = useState("");

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenre(value);
    handleOptionChange("genre", value);
  };

  const handleMoodChange = (event) => {
    const value = event.target.value;
    setMood(value);
    handleOptionChange("mood", value);
  };

  const handleEiChange = (event) => {
    const value = event.target.value;
    setEi(value);
    handleOptionChange("ei", value);
  };

  const handleSnChange = (event) => {
    const value = event.target.value;
    setSn(value);
    handleOptionChange("sn", value);
  };

  const handleTfChange = (event) => {
    const value = event.target.value;
    setTf(value);
    handleOptionChange("tf", value);
  };

  const handleJpChange = (event) => {
    const value = event.target.value;
    setJp(value);
    handleOptionChange("jp", value);
  };
  return (
    <div>
      <SelBox>
        {/* <label for="장르">장르<img src='/화살표배경제거.png'></img> </label> */}
        <select name="장르" value={genre} onChange={handleGenreChange}>
          <option value="">
            장르 <img src="/화살표배경제거.png"></img>
          </option>
          <option value="소설">소설</option>
          <option value="시/에세이">시/에세이</option>
          <option value="인문">인문</option>
          <option value="가정/육아">가정/육아</option>
          <option value="요리">요리</option>
          <option value="건강">건강</option> <option value="소설">소설</option>
          <option value="취미/실용/스포츠">취미/실용/스포츠</option>
          <option value="경제/경영">경제/경영</option>{" "}
          <option value="소설">소설</option>
          <option value="자기계발">자기계발</option>
          <option value="정치/사회">정치사회</option>{" "}
          <option value="소설">소설</option>
          <option value="역사/문화">역사/문화</option>
          <option value="종교">종교</option>
          <option value="예술/대중문화">예술/대중문화</option>
          <option value="과학">과학</option>
          <option value="여행">여행</option>
          <option value="컴퓨터/IT/육아">컴퓨터/IT</option>
          <option value="잡지">잡지</option>
        </select>
        <br />
        <br />
        {/* <label for="기분">기분 </label> */}
        <select name="기분" value={mood} onChange={handleMoodChange}>
          <option value="">기분</option>
          <option value="기쁨">기쁨</option>
          <option value="설렘">설렘</option>
          <option value="슬픔">슬픔</option>
          <option value="화남">화남</option>
          <option value="허무">허무</option>
          <option value="건강">건강</option> <option value="소설">소설</option>
          <option value="취미/실용/스포츠">취미/실용/스포츠</option>
          <option value="경제/경영">경제/경영</option>{" "}
          <option value="소설">소설</option>
          <option value="자기계발">자기계발</option>
          <option value="정치/사회">정치사회</option>{" "}
          <option value="소설">소설</option>
          <option value="역사/문화">역사/문화</option>
          <option value="종교">종교</option>
          <option value="예술/대중문화">예술/대중문화</option>
          <option value="과학">과학</option>
          <option value="여행">여행</option>
          <option value="컴퓨터/IT/육아">컴퓨터/IT</option>
          <option value="잡지">잡지</option>
        </select>
        <br /> <br />
        {/* <label for="외향/내향">E & I</label> */}
        <select name="외향/내향" value={ei} onChange={handleEiChange}>
          <option value="">E & I</option>
          <option value="외향">E</option>
          <option value="내향">I</option>
        </select>
        <br /> <br />
        {/* <label for="감각/직관">S & N</label> */}
        <select name="감각/직관" value={sn} onChange={handleSnChange}>
          <option value="">S & N</option>
          <option value="감각">S</option>
          <option value="직관">N</option>
        </select>
        <br /> <br />
        {/* <label for="사고/감정">T & F </label> */}
        <select name="사고/감정" value={tf} onChange={handleTfChange}>
          <option value="">T & F</option>
          <option value="사고">T</option>
          <option value="감정">F</option>
        </select>
        <br /> <br />
        {/* <label for="판단/인식">J & P </label> */}
        <select name="판단/인식" value={jp} onChange={handleJpChange}>
          <option value="">J & P</option>
          <option value="판단">J</option>
          <option value="인식">P</option>
        </select>
      </SelBox>
    </div>
  );
};

export default Select;