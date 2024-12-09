import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const Tracker = ({ data, timeCategory }) => {
  const currentData = data.timeframes[timeCategory].current;
  const previousData = data.timeframes[timeCategory].previous;

  const [categoryBackground, setCategoryBackground] = useState(true);

  const categoryDetails = {
    Work: {
      color: "primary.lightRed.work",
      image: "icon-work.svg",
      alt: "icon-work",
    },
    Play: {
      color: "primary.softBlue.play",
      image: "icon-play.svg",
      alt: "icon-play",
    },
    Study: {
      color: "primary.lightRed.study",
      image: "icon-study.svg",
      alt: "icon-study",
    },
    Exercise: {
      color: "primary.limeGreen.exercise",
      image: "icon-exercise.svg",
      alt: "icon-exercise",
    },
    Social: {
      color: "primary.violet.social",
      image: "icon-social.svg",
      alt: "icon-social",
    },
    "Self Care": {
      color: "primary.softOrange.selfCare",
      image: "icon-self-care.svg",
      alt: "icon-self-care",
    },
  };

  const { color, image, alt } = categoryDetails[data.title] || {
    color: "neutral.darkBlue",
    image: "",
    alt: "",
  };

  return (
    <Flex
      id="work"
      align="center"
      justify="center"
      h={{ desktop: "200px", mobile: "175px" }}
      pb={{ desktop: "20px", mobile: "0px" }}
    >
      <Flex
        bgColor={color}
        w={{ desktop: "180px", mobile: "300px" }}
        h={{ desktop: "180px", mobile: "175px" }}
        direction="column"
        borderRadius="15px"
      >
        <Flex h="15%" w="100%" justify="right" pr="10px">
          <Image src={image} alt={alt} fit="cover" w="25%" />
        </Flex>
        <Flex
          h="85%"
          w="100%"
          bgColor={categoryBackground ? "neutral.darkBlue" : "neutral.desaturatedBlue"}
          borderRadius="15px"
          p="20px"
          direction="column"
          justify="space-between"
          onMouseOver={() => setCategoryBackground(false)}
          onMouseLeave={() => setCategoryBackground(true)}
          cursor={categoryBackground ? "" : "pointer"}
        >
          <Flex w="100%" justify="space-between" align="center">
            <Text>{data.title}</Text>
            <Flex _hover={{ cursor: "pointer" }}>
              <Image src="icon-ellipsis.svg" alt="icon-ellipsis" fit="contain" />
            </Flex>
          </Flex>
          <Flex pt="30px">
            <Heading fontWeight="300">{currentData}hrs</Heading>
          </Flex>
          <Flex>
            <Text fontWeight="300">Last Week - {previousData}hrs</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tracker;
