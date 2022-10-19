import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import { ProfileCardContents } from "./ProfileCardContents";

export function ProfileTabHome() {
  return (
    <>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align="stretch"
        className="card_button_wrap"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Basic</Tab>
            <Tab>Like</Tab>
            <Tab>Values</Tab>
            <Tab>Activity</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ProfileCardContents profTitle="Basic" />
            </TabPanel>
            <TabPanel>
              <ProfileCardContents profTitle="Like" />
            </TabPanel>
            <TabPanel>
              <ProfileCardContents profTitle="Values" />
            </TabPanel>
            <TabPanel>
              <ProfileCardContents profTitle="Activity" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </>
  );
}
