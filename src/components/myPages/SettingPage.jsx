import { Link } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { SignOutButton } from "../SignOutButton";

export function SettingPage() {
  return (
    <>
      <Flex>
        <Box p="4" bg="" className="return_button">
          <Link to="/">キャンセル</Link>
        </Box>
        <Spacer />
        <Box p="4" bg="" className="profile_setting">
          <SignOutButton />
        </Box>
      </Flex>
      <p>プロフィール設定</p>
      <p>表示名の変更</p>
      <p>表示画像の変更</p>
    </>
  );
}
