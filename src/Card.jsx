import React from "react";
import { Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useContext } from "./context";
import Back from "./Back";
import Front from "./Front";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default function Card() {
  const [isHover, setIsHover] = React.useState(false);
  const { onCvvFocus } = useContext();
  return (
    <Flex
      width="400px"
      height="250px"
      left="50%"
      position="absolute"
      transform="translateX(-50%)"
      top="-30%"
      borderRadius="15px"
      onMouseOver={() => setIsHover(() => true)}
      onMouseLeave={() => setIsHover(() => false)}
    >
      <ChakraBox
        className="front"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="hidden"
        borderRadius="15px"
        backgroundImage="linear-gradient(to right, #111, #555)"
        boxShadow="0 1px 10px 1px rgb(0 0 0 / 30%)"
        initial={{
          transform: "rotateX(0deg)"
        }}
        animate={
          isHover || onCvvFocus
            ? {
                transform: "rotateY(180deg)",
                transition: {
                  duration: 0.5
                }
              }
            : {
                transform: "rotateY(0deg)",
                transition: {
                  duration: 0.5
                }
              }
        }
      >
        <Flex
          position="absolute"
          backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
          height="100%"
          width="calc(50% + 90px)"
          transform="skewX(-20deg) translateX(173px)"
          right="0"
          boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
        />

        <Flex
          position="absolute"
          backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
          height="100%"
          width="calc(50% + 90px)"
          transform="skewX(20deg) translateX(147px)"
          right="0"
          boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
        />
        <Front />
      </ChakraBox>

      <ChakraBox
        className="back"
        width="100%"
        height="100%"
        borderRadius="15px"
        boxShadow="0 1px 10px 1px rgb(0 0 0 / 30%)"
        position="absolute"
        transform="rotateX(180deg)"
        zIndex="20"
        top="0"
        left="0"
        backgroundColor="#9E9E9E"
        initial={{
          transform: "rotateX(180deg)"
        }}
        animate={
          isHover || onCvvFocus
            ? {
                transform: "rotateY(0deg)",
                transition: {
                  duration: 0.5
                }
              }
            : {
                transform: "rotateY(180deg)",
                transition: {
                  duration: 0.5
                }
              }
        }
      >
        <Back />
      </ChakraBox>
    </Flex>
  );
}
