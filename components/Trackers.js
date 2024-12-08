import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Tracker from "./Tracker";

const Trackers = ({ data, timeCategory }) => {
  // const datas = data.data;

  // console.log(typeof data)

  // console.log(data)

  // data.map(x => console.log(x))

  // data.forEach(element => {
  //   console.log(element)
  // });

  // for(let i=0; i<data.length; i++){
  //   console.log(data[i])
  // }

  // data.forEach(element => {
  //     return <Tracker data={element} />
  //   });

  // console.log(data)

    // data.map(data => {
    //   return <Tracker element={data} />
    // })

  return ( 
    <>
      {data.map((data, index) => (
        <Tracker key={index} data={data} timeCategory={timeCategory} />
      ))}
    </>

  // <Tracker data={data} />
    // <Flex w="100%">
    //   <Flex
    //     id="workandexercise"
    //     align="center"
    //     justify="center"
    //     w="225px"
    //     // direction="column"
    //     h="400px"
    //     wrap="wrap"
    //   >
    //     <Tracker />
    //     <Tracker />
        
    //   </Flex>
      
    // </Flex>
  );
};

export default Trackers;
