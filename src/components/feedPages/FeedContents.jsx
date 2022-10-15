import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeedComponent } from "./FeedComponent";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFirebase } from "../../hooks/useFirebase";

export function FeedContents() {
  const navigate = useNavigate();
  const NewFeedContents = () => navigate("/CollectFeedback");
  const [friendList, setFriendList] = useState([]);
  const { user } = useAuthContext();
  const { data } = useFirebase(`friends/${user.uid}`);

  useEffect(() => {
    const userList = data
      ? Object.entries(data).map(([key, item]) => {
          return item.userId;
        })
      : "";
    setFriendList([user.uid, ...userList]);
  }, [user.uid, data]);
  return (
    <>
      <FeedComponent friendList={friendList} />
      <button onClick={NewFeedContents} className="feed_add_button">
        +
      </button>
    </>
  );
}
