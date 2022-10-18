import { FriendsComponent } from "./FriendsComponent";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFirebase } from "../../hooks/useFirebase";

export function FriendsContents() {
  const { user } = useAuthContext();
  const tableName = "friends/" + user.uid;
  const { data } = useFirebase(tableName);
  return (
    <ul style={{ listStyle: "none" }}>
      {data &&
        Object.entries(data).map(([key, item]) => {
          return (
            <li key={key}>
              <FriendsComponent
                userPhoto={item.userPhoto}
                userName={item.userName}
              />
            </li>
          );
        })}
    </ul>
  );
}
