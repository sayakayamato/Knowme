import { Button } from "@chakra-ui/react";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useAddFriend } from "../../hooks/useAddFriend";
import { useFirebase } from "../../hooks/useFirebase";

export const AddFriendProcess = () => {
  const { user } = useAuthContext();
  const addFriend = useAddFriend;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const friendId = searchParams.get("userId");
  const { data } = useFirebase(`users/${friendId}`);
  console.log(friendId);
  const friendDisplayName = searchParams.get("userName");
  console.log(friendDisplayName);
  const onClick = () => {
    addFriend(
      user.uid,
      friendId,
      user.displayName,
      data.displayName,
      user.photoURL,
      data.userPhoto
    );
    navigate("/");
  };
  return (
    <>
      <p>{friendDisplayName}さんを友達に追加する</p>
      {data && (
        <Button leftIcon={<BiUserPlus />} colorScheme="blue" onClick={onClick}>
          追加
        </Button>
      )}
    </>
  );
};
