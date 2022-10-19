import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";

import { useDataList } from "../../hooks/useDataList";
import { useDataCreate } from "../../hooks/useDataCreate";

import "../../css/Chats.css";
import { useAuthContext } from "../../contexts/AuthContext";

export function ProfContents({ profId, friendsList }) {
  //inputに入力したチャットテキスト
  const [inputChatText, setInputChatText] = useState("");
  const dataCreate = useDataCreate;
  const tableName = "profs";
  const { user } = useAuthContext();

  const dataList = useDataList;

  const tmpArr = [];
  console.log("friendsList at ProfContents.jsx");
  console.log(friendsList);

  for (let i = 0; i < friendsList.length; i++) {
    console.log(friendsList[i]);
    const queryKey = "combProfUserId";
    const queryValue = profId + friendsList[i].item.userId;
    const { data: response } = dataList(tableName, queryKey, queryValue);
    response && tmpArr.push(response);
  }
  console.log(tmpArr);
  if (tmpArr) {
    tmpArr.map((data) => {
      console.log("data");
      console.log(data);
    });
  }

  const onClickSend = () => {
    if (inputChatText === "") return;
    // データ保存処理
    const newChatObject = {
      content: inputChatText,
      profId: profId,
      resUserId: user.uid,
      resUsername: user.displayName,
      combProfUserId: profId + user.uid,
      createdAt: new Date().toISOString(),
    };
    const tableName = "profs";
    dataCreate(tableName, newChatObject);
    setInputChatText("");
  };

  return (
    <>
      <div className="chats_answer">
        {tmpArr &&
          tmpArr.map((data) => {
            return Object.entries(data).map(([key, item]) => {
              return (
                <div
                  key={key}
                  className={item.resUserId === user.uid ? "right" : "left"}
                >
                  <p className="chat_send_user">{item.resUsername}</p>
                  <p className="chat_send_text">{item.content}</p>
                </div>
              );
            });
          })}
      </div>
      <div className="send_feeld">
        <div className="send_form">
          <Input
            placeholder="プロフに回答"
            value={inputChatText}
            onChange={(e) => setInputChatText(e.target.value)}
            w={"85%"}
          />
          <button onClick={onClickSend} className="chat_send_button">
            送信
          </button>
        </div>
      </div>
    </>
  );
}
