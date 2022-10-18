import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";

import { useDataList } from "../../hooks/useDataList";
import { useDataCreate } from "../../hooks/useDataCreate";

import "../../css/Chats.css";
import { useAuthContext } from "../../contexts/AuthContext";

export function ProfContents({ profId }) {
  //inputに入力したチャットテキスト
  const [inputChatText, setInputChatText] = useState("");
  // const dataList = useDataList;
  const dataCreate = useDataCreate;
  const tableName = "profs";
  const queryKey = "profId";
  const queryValue = profId;
  const { user } = useAuthContext();

  const dataList = useDataList;
  const { data } = dataList(tableName, queryKey, queryValue);

  //送信ボタンを押したときの処理
  const onClickSend = () => {
    if (inputChatText === "") return; //空文字で送信ボタンを押したときに処理が走らないようにする
    // データ保存処理
    const newChatObject = {
      content: inputChatText,
      profId: profId,
      resUserId: user.uid,
      resUsername: user.displayName,
      createdAt: new Date().toISOString(),
    };
    const tableName = "profs";
    dataCreate(tableName, newChatObject);
    setInputChatText("");
  };

  return (
    <>
      <div className="chats_answer">
        {data &&
          Object.entries(data).map(([key, item]) => {
            return (
              <div
                key={key}
                className={item.resUserId === user.uid ? "right" : "left"}
              >
                <p className="chat_send_user">{item.resUsername}</p>
                <p className="chat_send_text">{item.content}</p>
              </div>
            );
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
