import React from "react";
import Navigator from "./Navigator";
import styled from "styled-components";

const NicName = styled.div`
  color: rgba(74, 117, 148, 1);
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 2%;
  margin-top: 1%;
`;

const Name = styled.div`
  color: #000000;
  font-size: xx-large;
  font-weight: bolder;
  margin-left: 5%;
  margin-top: 1%;
  padding-left: 5%;
`;

const One_liner = styled.div`
  color: #000000;
  font-size: large;
  margin-left: 5%;
  margin-top: 1%;
  padding-left: 5%;
  width: 300px;
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

const MyPage = () => {
  return (
    <div>
      <Navigator></Navigator>
      <NicName>hyoring.booked</NicName>
      <ProfilePic src="핑크배경.png"></ProfilePic>
      <Name>최효리</Name>
      <One_liner>front-end</One_liner>
      <Button>Logout</Button>
      <Bar></Bar>
      <Dis>
        <Menu>게시글</Menu>
        <Menu>댓글</Menu>
        <Menu>회원정보 수정</Menu>
      </Dis>
      <InnerBox></InnerBox>
    </div>
  );
};

export default MyPage;
