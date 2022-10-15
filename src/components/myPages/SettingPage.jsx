import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { SignOutButton } from "../SignOutButton";

export function SettingPage() {
  return (
    <>
      <Flex>
        <Box p="4" bg="" className="return_button">
          <Link to="/myprofile">キャンセル</Link>
        </Box>
        <Spacer />
        <Box p="4" bg="" className="profile_setting">
          <SignOutButton />
        </Box>
      </Flex>
      ここはプロフィール設定画面です
    </>
  );
}
