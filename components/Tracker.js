import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const Tracker = ({ data, timeCategory }) => {
  // console.log(timeCategory)

  const currentData = data.timeframes[timeCategory].current
  const previousData = data.timeframes[timeCategory].previous

  // const dataCurrent = {currentData}

  // console.log(currentData)

  const [categoryBackground, setCategoryBackground] = useState(true);
  // const [categoryColor, setCategoryColor] = useState('');
  // const [categoryImage, setCategoryImage] = useState('');
  // const [categoryImageAlt, setCategoryImageAlt] = useState('');

  let categoryColor = "";
  let categoryImage = "";
  let categoryImageAlt = "";

  if (data.title == "Work") {
    categoryColor = "primary.lightRed.work";
    categoryImage = "icon-work.svg";
    categoryImageAlt = "icon-work";
  } else if (data.title == "Play") {
    categoryColor = "primary.softBlue.play";
    categoryImage = "icon-play.svg";
    categoryImageAlt = "icon-play";
  } else if (data.title == "Study") {
    categoryColor = "primary.lightRed.study";
    categoryImage = "icon-study.svg";
    categoryImageAlt = "icon-study";
  } else if (data.title == "Exercise") {
    categoryColor = "primary.limeGreen.exercise";
    categoryImage = "icon-exercise.svg";
    categoryImageAlt = "icon-exercise";
  } else if (data.title == "Social") {
    categoryColor = "primary.violet.social";
    categoryImage = "icon-social.svg";
    categoryImageAlt = "icon-social";
  } else {
    categoryColor = "primary.softOrange.selfCare";
    categoryImage = "icon-self-care.svg";
    categoryImageAlt = "icon-self-care";
  }

  return (
    <Flex
      id="work"
      align="center"
      justify="center"
      h={{desktop: "200px", mobile: '175px'}}
      // w={{desktop: 'auto', mobile: '175px'}}
      // w="225px"
      pb={{desktop: "20px", mobile: '0px'}}
      // border="2px"
    >
      <Flex
        bgColor={categoryColor}
        w={{desktop: "180px", mobile: '300px'}}
        h={{desktop: "180px", mobile: '175px'}}
        direction="column"
        borderRadius="15px"
        // pb='10px'
      >
        <Flex h="15%" w="100%" justify="right" pr="10px">
          <Image
            src={categoryImage}
            alt={categoryImageAlt}
            fit="cover"
            w="25%"
          />
        </Flex>
        <Flex
          h="85%"
          w="100%"
          bgColor={
            categoryBackground == true
              ? "neutral.darkBlue"
              : "neutral.desaturatedBlue"
          }
          borderRadius="15px"
          p="20px"
          direction="column"
          justify="space-between"
          onMouseOver={() => {
            setCategoryBackground(false);
          }}
          cursor= {categoryBackground == false ? 'pointer' : ''}
          onMouseLeave={() => setCategoryBackground(true)}
          // _hover={}
        >
          <Flex w="100%" justify="space-between" align="center">
            <Flex>{data.title}</Flex>
            <Flex _hover={{ cursor: "pointer" }} h="100%">
              <Image
                src="icon-ellipsis.svg"
                alt="icon-ellipsis"
                fit="contain"
              />
            </Flex>
          </Flex>
          <Flex pt="30px">
            <Heading fontWeight="300">
              {currentData}hrs
            </Heading>
          </Flex>
          <Flex>
            <Text fontWeight="300">
              Last Week - {previousData}hrs
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tracker;
