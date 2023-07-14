import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import Select from "./Select";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "BMJUA";
`;

const Dis = styled.div`
  display: flex;
  justify-content: center;
`;

const Disbox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const HashText = styled.div`
  color: #064f84;
  font-size: xx-large;
  margin-top: 105px;
`;

const HashText2 = styled.div`
  color: black;
  font-size: x-large;
  margin-top: 15px;
  margin-left: 1%;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 550px;
  height: 350px;
  margin-top: 30px;
`;

const Gobutton = styled(Link)`
  border-radius: 15px;
  background-color: rgba(6, 79, 132, 1);
  width: 340px;
  height: 40px;
  border: none;
  color: white;
  box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  font-size: 18px;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  padding-top: 10px;
  margin-top: 30px;
  cursor: pointer;
  margin-top: 20px;
  align-items: center; //높이의 가운데로
  display: flex;
  justify-content: center;
`;

const Ad = styled.div`
  height: 200px;
  width: 850px;
  background-color: #f7f7f7;
  border-color: gray;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬도 추가합니다. */
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 100px;
`;

const Con = styled.div`
  margin-left: 10%;
  margin-right: -30px;
`;

const HashSerch = () => {
  const activeMenu = "독후감 검색";

  const [genre, setGenre] = useState("소설");
  const [mood, setMood] = useState("기쁨");
  const [ei, setEi] = useState("외향적");
  const [sn, setSn] = useState("감각적");
  const [tf, setTf] = useState("사고적");
  const [jp, setJp] = useState("판단적");
  const [op, setOp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // 스크롤을 가장 위로 이동
  }, []);

  const handleOptionChange = (option, value) => {
    // 선택한 옵션 값을 상태로 업데이트
    if (option === "genre") {
      setGenre(value);
      navigate(`/BookRecommend/${genre}/${op}`);
    } else if (option === "mood") {
      setMood(value);
      navigate(`/BookRecommend/${mood}/${op}`);
    } else if (option === "ei") {
      setEi(value);
      navigate(`/BookRecommend/${ei}/${op}`);
    } else if (option === "sn") {
      setSn(value);
      navigate(`/BookRecommend/${sn}/${op}`);
    } else if (option === "tf") {
      setTf(value);
      navigate(`/BookRecommend/${tf}/${op}`);
    } else if (option === "jp") {
      setJp(value);
      navigate(`/BookRecommend/${jp}/${op}`);
    }
    // 필요한 옵션들에 대해 위와 같이 처리
  };

  useEffect(() => {
    if (op) {
      axios
        .post(`https://mutsabooked.store/bookrecommend/`, {
          category: op,
          field:
            op === "장르"
              ? genre
              : op === "감정"
              ? mood
              : op === "EI"
              ? ei
              : op === "NS"
              ? sn
              : op === "FT"
              ? tf
              : op === "JP"
              ? jp
              : "",
        })
        .then((res) => {
          console.log(res);
          navigate(`/BookRecommend/${op}`);
        });
    }
  }, [op]);

  return (
    <>
      <Navigator activeMenu={activeMenu} />

      <Desktop>
        <Disbox>
          <HashText>해시태그를 통한 검색</HashText>
          <HashText2>
            클릭시, 해당 태그가 언급된 독후감으로 이동합니다.
          </HashText2>
        </Disbox>
        <Con>
          <Select handleOptionChange={handleOptionChange}></Select>
        </Con>
        <Dis>
          <Img src="/image12.png"></Img>
        </Dis>
        <Dis>
          <Gobutton to="/Recommend">제목을 통한 검색으로 이동하기</Gobutton>
        </Dis>
        <Dis>
          <Ad>광고문의</Ad>
        </Dis>
      </Desktop>
    </>
  );
};

export default HashSerch;
