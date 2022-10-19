// import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";

import "../../css/Proflie_Card.css";

export function ProfileCardContents({ profTitle }) {
  return (
    <>
      <div className="card_wrap">
        <div className="card_title">{profTitle}</div>
        <div className="card_input_wrap">
          <Flex>
            <Box p="4" w="49%" bg="white" mt="1%" className="card_input">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" w="49%" bg="white" mt="1%" className="card_input">
              Box 2
            </Box>
          </Flex>
          <Box p="4" bg="white" mt="1%" className="card_input">
            Box 3
          </Box>
          <Box p="4" bg="white" mt="1%" className="card_input">
            Box 4
          </Box>
          <Flex>
            <Box p="4" w="49%" bg="white" mt="1%" className="card_input">
              Box 5
            </Box>
            <Spacer />
            <Box p="4" w="49%" bg="white" mt="1%" className="card_input">
              Box 6
            </Box>
          </Flex>
          <Box p="4" bg="white" mt="1%" className="card_input">
            Box 7
          </Box>
        </div>
      </div>
    </>
  );
}
