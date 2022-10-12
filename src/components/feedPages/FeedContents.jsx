import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDataList } from "../../hooks/useDataList";
import { useAuthContext } from "../../contexts/AuthContext";

// import { Link } from 'react-router-dom'

export function FeedContents() {
  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");

  const { user } = useAuthContext();
  const logedInUserId = user.uid;

  // TODO: フレンドリストを追加する必要あり
  // const friendList = [logedInUserId];
  const userList = ["dCmUF37YQBSRce5Kd2nBYyZLqAb2", "dCmUF37YQBSRce5Kd2nBYyZLqAb2", "kCJ6rquI08Vf1kE4ZEUbst8NAii2", "U9WMPUnhbfTjb9GmVcJRdxADP0a2"]
  const friendList = [logedInUserId, ...userList];

  const dataList = useDataList;
  const tableName = "questions";
  const queryKey = "userId";
  const feedContents = friendList
    .map((friendId) => {
      const queryValue = friendId;
      const { data } = dataList(tableName, queryKey, queryValue);
      if (!data) {
        return;
      } else {
        return data;
      }
    })
    .filter((e) => typeof e !== "undefined");

  //クリックされた質問判定
  const WhatFeed = (e) => {
    //配列のキーとidが一致してるときにできる処理...
    const pushQuestionID = e.target.id;
    const whatfeedtext = e.target.innerText; //記入した質問本文を定数に入れる
    navigate(`/chats/${pushQuestionID}`, {
      state: { whatfeedtext: whatfeedtext, pushQuestionID: pushQuestionID },
    }); //ページ遷移と共に値を持っていく
  };

  return (
    <>
      {feedContents.map((data) =>
        Object.entries(data).map(([key, item]) => {
          return (
            <Box
              className="feed_box"
              bg={"rgba(255, 255, 255, 0.7)"}
              w="100%"
              p={4}
              color="black"
              mb={5}
              key={key}
            >
              <p className="feed_user_name">{item.username}</p>
              <p className="feed_contents_text" onClick={WhatFeed} id={key}>
                {item.content}
              </p>
            </Box>
          );
        })
      )}
      <button onClick={NewFeedContents} className="feed_add_button">
        +
      </button>
    </>
  );
}
