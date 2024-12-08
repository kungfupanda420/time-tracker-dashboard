import { Avatar, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import data from "../data.json";
import Trackers from "./Trackers";
import { useState } from "react";

const Content = () => {
  // const [timeCategory, setTimeCategory] = useState("daily");

  // const handleTimeCategoryChange = (timeCategory) => {
  //   setTimeCategory(timeCategory);
  // };

  
  const [timeCategory, setTimeCategory] = useState("daily");
  const handleTimeCategoryChange = (timeCategory) => {
    setTimeCategory(timeCategory);
  };

  return (
    <Flex
      id="background"
      h={{desktop: "100vh", mobile: '1500px'}}
      fontFamily="Rubik"
      bgColor="neutral.veryDarkBlue"
      color="white"
      align={{desktop: "center", mobile: 'flex-start'}}
      justify="center"
    >
      <Flex
        id="container"
        w={{ desktop: "780px", mobile: "350px" }}
        h={{desktop: '380px', mobile: 'auto'}}
        align="center"
        justify={{desktop: "space-between", mobile: 'center'}}
        bgColor="neutral.veryDarkBlue"
        direction={{ desktop: "row", mobile: "column" }}
        gap={{desktop: '0px', mobile: '20px'}}
        py={{desktop: '0px', mobile: '60px'}}
      >
        <UserProfile
          timeCategory={timeCategory}
          onTimeCategoryChange={handleTimeCategoryChange}
        />

        <Flex
          id="categories"
          w={{desktop: "580px", mobile: '300px'}}
          h={{desktop: '380px', mobile: '175px'}}
          wrap={{desktop: "wrap", mobile: 'nowrap'}}
          justify={{desktop: "space-between", mobile: 'none'}}
          direction={{desktop: 'row', mobile:'column'}}
          gap={{desktop: '0px', mobile: '20px'}}
        >
          <Trackers data={data} timeCategory={timeCategory} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;
