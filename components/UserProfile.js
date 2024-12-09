import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";

const UserProfile = ({ timeCategory, onTimeCategoryChange }) => {
  const handleChange = (category) => {
    onTimeCategoryChange(category);
  };

  return (
    <Flex
      id="userprofilelayout"
      w={{ desktop: "180px", mobile: "300px" }}
      h={{ desktop: "100%", mobile: "175px" }}
      align="center"
      justify={{ desktop: "flex-start", mobile: "center" }}
      direction="column"
      bgColor="neutral.darkBlue"
      borderRadius="15px"
    >
      {/* User Profile Section */}
      <Flex
        id="userprofile"
        align={{ desktop: "flex-start", mobile: "center" }}
        justify="center"
        h="65%"
        w="100%"
        direction={{ desktop: "column", mobile: "row" }}
        bgColor="primary.blue"
        borderRadius="15px"
        p="20px"
      >
        <Flex
          id="avatar"
          align="center"
          justify="center"
          mb={{ desktop: "50px", mobile: "none" }}
          mr={{ desktop: "none", mobile: "10px" }}
        >
          <Avatar name="Jeremy Robson" src="image-jeremy.png" border="2px" />
        </Flex>
        <Flex direction="column">
          <Text fontWeight="300">Report for</Text>
          <Heading fontWeight="300">Jeremy Robson</Heading>
        </Flex>
      </Flex>

      {/* Time Category Selector */}
      <Flex
        id="timecategory"
        align="flex-start"
        justify={{ desktop: "center", mobile: "space-between" }}
        direction={{ desktop: "column", mobile: "row" }}
        w="100%"
        h="35%"
        p="20px"
        gap="10px"
        fontWeight="300"
        color="neutral.desaturatedBlue"
      >
        {["daily", "weekly", "monthly"].map((category) => (
          <Flex
            key={category}
            id={`${category}category`}
            color={timeCategory === category ? "white" : ""}
            onClick={() => handleChange(category)}
            _hover={{
              color: "white",
              cursor: "pointer",
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default UserProfile;
