import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FeedContents } from "../feedPages/FeedContents";
import { FriendsContents } from "../friendPages/FriendsContents";
import { HomeContents } from "../homePages/HomeContents";
import { NewFriendModal } from "../friendPages/NewFriendModal";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { useAuthContext } from "../../contexts/AuthContext";
import Remew from "./ReMew_logo.jpg"

export function UnderTabBar() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <>
        <div className="top_bar">
          <Flex>
            <Link to="/">
              <img src={Remew} alt="" width={"90px"} className="service_name"/>
            </Link>
            <Spacer />

            <Link to="/myprofile">
              <Wrap className="top_profile_icon">
                <WrapItem>
                  <Avatar name={user.displayName} src={user.photoURL} />
                </WrapItem>
              </Wrap>
            </Link>
          </Flex>
        </div>
        <Tabs
          variant="soft-rounded"
          colorScheme="gray" 
          isFitted="true"
          className="under_tab_bar"
          defaultIndex={1}
        >
          <TabPanels>
            <TabPanel p={0}>
              <HomeContents />
            </TabPanel>
            <TabPanel>
              <FeedContents />
            </TabPanel>
            <TabPanel>
              <p className="friend">Friend</p>
              <FriendsContents />
              <NewFriendModal />
            </TabPanel>
          </TabPanels>
          <TabList className="under_nav_bar">
            <Tab color={"#704116"}>
              <MdHome />
              Home
            </Tab>
            <Tab color={"#704116"}>
              <MdOutlineArticle />
              Feed
            </Tab>
            <Tab color={"#704116"}>
              <MdGroup />
              Friend
            </Tab>
          </TabList>
        </Tabs>
      </>
    );
  }
}
