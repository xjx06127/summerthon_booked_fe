import React, { useState, useEffect } from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NicName = styled.div`
  color: rgba(74, 117, 148, 1);
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 2%;
  margin-top: 1%;
  font-family: "BMJUA";
`;

const Name = styled.div`
  color: #000000;
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 5%;
  margin-top: 1%;
  padding-left: 5%;
  font-family: "Myfont";
  font-family: "BMJUA";
`;

const One_liner = styled.div`
  color: #000000;
  font-size: large;
  margin-left: 5%;
  margin-top: 1%;
  padding-left: 5%;
  width: 300px;
  font-family: "BMJUA";
`;

const Bar = styled.div`
  background-color: rgba(217, 217, 217, 1);
  height: 8px;
  width: 90%;
  margin-top: 4%;
  margin-left: 5%;
  border-radius: 3px;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden; /*넘치는 부분 지움 */
  float: left;
  margin-top: 2%;
  margin-left: 2%;
  display: block;
  object-fit: cover;
`;

const Menu = styled.button`
  color: black;
  &:hover {
    color: rgba(74, 117, 148, 1);
    transition: 0.5s;
  }
  background-color: transparent;
  border: none;
  font-size: large;
  font-weight: bold;
  margin-top: 1%;
  cursor: pointer;
  font-family: "BMJUA";
`;

const Button = styled.button`
  background-color: rgba(248, 248, 248, 1);
  border-color: transparent;
  margin-top: 1%;
  border-radius: 20px;
  margin-left: -6.5%;
  width: 100px;
  color: rgba(74, 117, 148, 1);
  font-size: large;
  margin-left: 20%;
  margin-top: -20%;
  cursor: pointer;
  font-family: "BMJUA";
`;

const Dis = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;

const InnerBox = styled.div`
  margin-top: 80px;
  width: 80%;
  height: 400px;
  margin-left: 10%;
  background: rgba(255, 255, 255, 0.11);
  border: dotted;
  border-color: rgba(217, 217, 217, 1);
  border-radius: 1%;
  display: flex;
  flex-wrap: wrap;
  clear: both;
  padding-left: 0px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const Text = styled.p`
  color: #72736b;
  font-weight: bold;
  font-size: medium;
  margin-left: 100px;
  font-family: "BMJUA";
`;

const MyPage = () => {
  const activeMenu = "마이페이지";

  const [post, Setpost] = useState("");
  const [all, Setall] = useState([]);
  const [allcomment, Setallcomment] = useState([]);
  const navigate = useNavigate();

  const HandleAll = () => {
    axios.get(`https://mutsabooked.store/mypage/posts/`).then((res) => {
      Setall(res.data);
      Setallcomment([]);
      console.log(res.data);
    });
  };
  const handleClickPost = (postId) => {
    navigate(`/CmReco/${postId}`); // 게시글 클릭 시 해당 게시글 페이지로 이동
  };

  const Handlecomment = () => {
    axios.get(`https://mutsabooked.store/mypage/comments/`).then((res) => {
      Setallcomment(res.data);
      Setall([]);
      console.log(res.data);
    });
  };

  useEffect(() => {
    // 페이지 로드 시 초기 데이터 가져오기
    HandleAll();
  }, []);

  return (
    <div>
      <Navigator activeMenu={activeMenu}></Navigator>
      <NicName>Likelion.booked</NicName>
      <ProfilePic src="멋사배경.png"></ProfilePic>
      <Name>아기사자</Name>
      <One_liner>front-end</One_liner>
      <Bar></Bar>
      <Dis>
        <Menu onClick={HandleAll}>게시글</Menu>
        <Menu onClick={Handlecomment}>댓글</Menu>
      </Dis>
      <InnerBox>
        {allcomment.map((c) => (
          <Text>{c.content} </Text>
        ))}
        {all.map((c) => (
          <>
            <Text key={c.id} onClick={() => handleClickPost(c.id)}>
              {c.title} {c.content}
            </Text>
          </>
        ))}
      </InnerBox>
    </div>
  );
};

export default MyPage;
