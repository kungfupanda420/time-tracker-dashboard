import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const UserProfile = ({ timeCategory, onTimeCategoryChange }) => {
  // const [timeCategory, setTimeCategory] = useState("weekly");

  const handleChange = (timeCategory) => {
    onTimeCategoryChange(timeCategory);
  };

  return (
    // <Flex
    //   id="userprofilelayoutwithbackground"
    //   w="250px"
    //   h="400px"
    //   bgColor="neutral.veryDarkBlue"
    //   align="center"
    //   justify="flex-start"
    //   direction="column"
    //   // border='2px'
    // >
    <Flex
      id="userprofilelayout"
      w={{desktop: "180px", mobile: '300px'}}
      h={{desktop: "100%", mobile: '175px'}}
      align="center"
      justify={{desktop: "flex-start", mobile: 'center'}}
      direction="column"
      bgColor="neutral.darkBlue"
      borderRadius="15px"
    >
      <Flex
        id="userprofile"
        align={{desktop: "flex-start", mobile: 'center'}}
        justify="center"
        h="65%"
        w="100%"
        direction={{ desktop: "column", mobile: "row" }}
        bgColor="primary.blue"
        borderRadius="15px"
        p="20px"
      >
        <Flex id="avatar" align="center" justify="center" mb={{desktop: "50px", mobile: 'none'}} mr={{desktop: 'none', mobile: '10px'}}>
          <Avatar name="Jeremy Robson" src="image-jeremy.png" border='2px' />
        </Flex>
        <Flex direction='column'>
          <Text fontWeight="300">Report for</Text>
          <Flex id="username">
            <Heading fontWeight="300">Jeremy Robson</Heading>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="timecategory"
        align="flex-start"
        justify={{desktop: "center", mobile: 'space-between'}}
        direction={{desktop: "column", mobile: 'row'}}
        w="100%"
        h="35%"
        p="20px"
        gap="10px"
        fontWeight="300"
        color="neutral.desaturatedBlue"
      >
        <Flex
          id="dailycategory"
          color={timeCategory == "daily" ? "white" : ""}
          onClick={() => handleChange("daily")}
          _hover={{
            color: "white",
            cursor: "pointer",
          }}
        >
          Daily
        </Flex>
        <Flex
          id="weeklycategory"
          color={timeCategory == "weekly" ? "white" : ""}
          onClick={() => handleChange("weekly")}
          _hover={{
            color: "white",
            cursor: "pointer",
          }}
        >
          Weekly
        </Flex>
        <Flex
          id="monthlycategory"
          color={timeCategory == "monthly" ? "white" : ""}
          onClick={() => handleChange("monthly")}
          _hover={{
            color: "white",
            cursor: "pointer",
          }}
        >
          Monthly
        </Flex>
      </Flex>
    </Flex>
    // </Flex>
  );
};

export default UserProfile;
