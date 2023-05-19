import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      alignItems="start"
      gap={2}
      backgroundColor="white"
      textColor="black"
      rounded="lg"
    >
      <Image src={imageSrc} rounded="lg" />
      <VStack alignItems="start" gap={2} px={2} pb={2}>
        <Heading fontSize={16}>{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
