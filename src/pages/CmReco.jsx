import React, { useState, useEffect } from "react";
import Navigator from "./Navigator";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 화면을 옆으로 스크롤되지 않도록 설정 */
  font-family: "BMJUA";
`;

const RcboxT = styled.div`
  width: 850px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  font-family: "BMJUA";
  font-size: 30px;
  line-height: 36px;
  color: #000000;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
`;

const Nicnamebox = styled.div`
  width: 100px;
  height: 50px;
  margin-left: 75%;
  margin-top: 5px;
  font-family: "BMJUA";
  font-size: 20px;
  line-height: 36px;
  color: #72736b;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
`;

const Rcbar = styled.div`
  width: 1250px;
  height: 5px;
  background: #d9d9d9;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

const Rcbox = styled.div`
  margin-top: 50px;
  width: 850px;
  height: 350px;
  background: #ffffff;
  border: 1px solid #000000;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  font-size: 25px;
  line-height: 36px;
  color: #000000;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
  text-align: center;
  font-family: "BMJUA";
`;

const RcCon = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Recment1 = styled.div`
  margin-left: 10%;
  margin-top: 50px;
  font-style: normal;
  font-size: 28px;
  line-height: 36px;
  color: #667121;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;
const Recment2 = styled.div`
  margin-left: 10%;
  font-size: 20px;
  line-height: 36px;
  color: #a4ac6d;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #fffdfd;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  border-radius: 50px;
  width: 800px;
  height: 50px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.31);
  }
`;

const CommentInput = styled.input`
  border: none;
  width: 620px;
  height: 30px;
  font-family: "BMJUA";
  font-size: 25px;
  line-height: 24px;
  margin-top: 0px;
  margin-left: 35px;
  outline: none;
`;

const CommentButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  background-color: #8e9851;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  text-decoration: none; /* 밑줄 제거 */
  cursor: pointer;
  margin: 10px;
`;

const DoubleArrowIcon = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  display: block;
`;

const ComT = styled.div`
  width: 213px;
  height: 36px;
  margin-left: 10%;
  margin-top: 80px;

  font-style: normal;

  font-size: 28px;
  line-height: 36px;
  color: #667121;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;
const ComButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px;

  font-style: normal;

  font-size: 18px;
  color: #4f561f;
  background-color: #ffffff;
  cursor: pointer;
`;
const EditButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px;

  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: #4f561f;
  background-color: #ffffff;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-right: 10%;
`;
const Mycom = styled.div`
  width: 600px;
  height: 36px;
  margin-right: 10%;
  margin-top: 80px;
  border: 1px solid #000000;

  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 36px;
  color: #111111;
  white-space: nowrap; /* 텍스트 개행 없이 한 줄에 유지 */
`;

const Rcbar2 = styled.div`
  width: 1250px;
  height: 5px;
  background: #d9d9d9;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const Talkballon = styled.img`
  //말풍선 모양 사진
  width: 200px;
  content: url(GrChat.png);
`;

const TalkBallonContainer = styled.div`
  text-align: right;
  margin: 30px;
`;

const Mybox = styled.div`
  width: 390px;
  height: 29px;
  margin-left: 15%;
  margin-top: 30px;
  border: 1px solid #000000;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
`;
const Otherbox = styled.div`
  width: 390px;
  height: 29px;
  margin-left: 15%;
  border: 1px solid #000000;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
`;

const CommentContainer = styled.div`
  //닉네임 + 댓글 쌍 하나 container
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const CommentList = styled.div`
  //댓글들 싹다 묶는 container
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const NickName = styled.span`
  font-size: 20px;
  margin-right: 50px;
  color: #50562a;
`;

const Me = styled.span`
  font-size: 20px;
  margin-right: 80px;
  margin-left: 35px;
  color: #4a7594;
`;

const Comment = styled.div`
  font-size: 20px;
  width: 600px;
  color: #000000;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-right: -120px;
  margin-left: 30px;
`;

const Button = styled.button`
  font-size: 17px;
  font-family: "BMJUA";
  color: #4f561f;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const Line = styled.div`
  //세로줄
  border-left: 2px solid #4f561f;
  height: 25px;
`;

const CmReco = () => {
  const navigate = useNavigate();
  const activeMenu = "커뮤니티";
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [post2, setPost2] = useState([]);
  const [post3, setPost3] = useState([]);
  const [post4, setPost4] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`https://mutsabooked.store/posts/`).then((res) => {
      const filteredPost = res.data.posts.filter((item) => item.id === postId);
      moveFun(res.data.posts.filter((item) => item.id === Number(postId)));
    });
  }, [postId]);

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  function moveFun(arr) {
    setPost(arr);
    setPost2(arr);
    setPost3(arr);
    setPost4(arr[0].comment_set);
  }

  console.log(content);

  const SubmitOk2 = (event) => {
    event.preventDefault();

    axios.post(`https://mutsabooked.store/posts/${postId}/`, {
      content: content,
    });
    navigate(0);
  };

  const Text = styled.p`
    color: black;
    font-weight: bold;
    font-size: xx-large;
    margin-left: 100px;
    font-family: "BMJUA";
  `;

  //   <InnerBox>
  //   {allcomment.map((c) => (
  //     <Text key={c.id} onClick={() => handleClickComment(c.id)}>{c.content} </Text>
  //   ))}
  //           {all.map((c)=>(
  //         <>
  //         <Text key={c.id} onClick={() => handleClickPost(c.id)}>{c.title} {c.content}</Text>
  //         </>
  //       ))}
  // </InnerBox>

  return (
    <>
      <Navigator activeMenu={activeMenu}></Navigator>
      <Desktop>
        <RcCon>
          <RcboxT>
            {post.map((c) => (
              <Text>{c.title}</Text>
            ))}
          </RcboxT>
          {post2.map((c) => (
            <Nicnamebox>{c.poster}</Nicnamebox>
          ))}
          <Rcbar></Rcbar>
          {post3.map((c) => (
            <Rcbox>{c.content}</Rcbox>
          ))}
        </RcCon>
        <Recment1>댓글을 남겨보세요.</Recment1>
        <Recment2>타인을 비방, 욕설하는 댓글은 남기지 말아주세요.</Recment2>
        <CommentInputContainer>
          <CommentInput
            placeholder="댓글을 입력해주세요."
            onChange={handleContent}
          />
          <CommentButton onClick={SubmitOk2}>댓글 쓰기</CommentButton>
        </CommentInputContainer>
        <DoubleArrowIcon src="/FiChevronsDown.png" />
        <CommentList>
          {post4.map((c) => (
            <CommentContainer>
              <NickName>{c.commenter}</NickName>
              <Comment>{c.content}</Comment>
            </CommentContainer>
          ))}
        </CommentList>
        <TalkBallonContainer>
          {" "}
          <Talkballon />
        </TalkBallonContainer>
      </Desktop>
    </>
  );
};

export default CmReco;
