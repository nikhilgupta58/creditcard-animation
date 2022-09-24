import { Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSimFill } from "react-icons/bs";
import { TbWifi } from "react-icons/tb";
import { useContext } from "./context";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, makeUseVisualState } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default function Front() {
  const {
    cardNumber,
    cardName,
    cvv,
    monthly,
    year,
    onNumberFocus,
    onNameFocus,
    onMonthlyFocus,
    onYearFocus
  } = useContext();

  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const expiryRef = useRef(null);

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const [x, setX] = React.useState(-30);
  const [y, setY] = React.useState(-30);

  const [maskNumber, setMaskNumber] = React.useState([
    "#",
    "#",
    "#",
    "#",
    " ",
    "#",
    "#",
    "#",
    "#",
    " ",
    "#",
    "#",
    "#",
    "#",
    " ",
    "#",
    "#",
    "#",
    "#"
  ]);

  React.useEffect(() => {
    let number = cardNumber;
    for (let i = number.length; i < 16; i++) {
      number += "#";
    }

    const cnumber = [];
    for (let i = 0; i < number.length; i++) {
      if ((i + 1) % 4 === 0) {
        cnumber.push(number[i]);
        cnumber.push("");
      } else cnumber.push(number[i]);
    }
    setMaskNumber((e) => cnumber);
  }, [cardNumber]);

  React.useEffect(() => {
    if (onNumberFocus && numberRef?.current) {
      setX(numberRef?.current?.offsetLeft);
      setY(numberRef?.current?.offsetTop);
      setWidth(numberRef?.current?.offsetWidth);
      setHeight(numberRef?.current?.offsetHeight);
    }
    if (onNameFocus && nameRef?.current) {
      setX(nameRef?.current?.offsetLeft);
      setY(nameRef?.current?.offsetTop);
      setWidth(nameRef?.current?.offsetWidth);
      setHeight(nameRef?.current?.offsetHeight);
    }
    if ((onMonthlyFocus || onYearFocus) && expiryRef?.current) {
      setX(expiryRef?.current?.offsetLeft);
      setY(expiryRef?.current?.offsetTop);
      setWidth(expiryRef?.current?.offsetWidth);
      setHeight(expiryRef?.current?.offsetHeight);
    }
    if (!onNumberFocus && !onNameFocus && !onMonthlyFocus && !onYearFocus) {
      setX(-4 * width);
      // setY(0);
      setWidth(0);
      setHeight(0);
    }
  }, [onNameFocus, onNumberFocus, onMonthlyFocus, onYearFocus]);

  return (
    <Flex p="25px" position="relative" direction="column" gridGap="10px">
      <Flex>
        <Text width="70%" fontSize="14px">
          INVESTOR
        </Text>
      </Flex>
      <Flex gridGap="20px" alignItems="center">
        <Flex transform="rotate(90deg)" color="#d0b978">
          <BsSimFill fontSize={"50px"} />
        </Flex>
        <Flex color="white" transform="rotate(90deg)">
          <TbWifi fontSize={"50px"} />
        </Flex>
      </Flex>

      <Flex>
        <Text
          ref={numberRef}
          border="1px solid none"
          p="5px 10px"
          fontSize="23px"
          width="280px"
          height="28px"
          overflow="hidden"
          position="relative"
        >
          <Flex position="absolute">
            {maskNumber.map((row, id) => {
              if (!row) return <Text marginX="5px" />;
              return (
                <>
                  <ChakraBox
                    position="absolute"
                    left={`${id * 15}px`}
                    initial={{
                      transform: "translateY(0px)"
                    }}
                    animate={
                      row !== "#"
                        ? { transform: "translateY(0px)" }
                        : { transform: "translateY(-40px)" }
                    }
                  >
                    {row}
                  </ChakraBox>
                  <ChakraBox
                    position="absolute"
                    left={`${id * 15}px`}
                    animate={
                      row !== "#"
                        ? { transform: "translateY(-40px)" }
                        : { transform: "translateY(0px)" }
                    }
                  >
                    #
                  </ChakraBox>
                </>
              );
            })}
          </Flex>
        </Text>
      </Flex>

      <Flex>
        <Flex
          alignItems="center"
          gridGap="5px"
          ref={expiryRef}
          border="1px solid none"
          p="5px 10px"
          fontSize="14px"
          width="110px"
          position="relative"
          height="18px"
          overflow="hidden"
        >
          <Flex fontSize="9px">EXP. END:</Flex>
          <Flex>
            <ChakraBox
              position="absolute"
              initial={{
                transform: "translateY(0px)"
              }}
              animate={
                monthly
                  ? { transform: "translateY(0px)" }
                  : { transform: "translateY(-40px)" }
              }
            >
              {(monthly + "").length === 1 ? "0" + monthly : monthly}
            </ChakraBox>
            <ChakraBox
              position="absolute"
              animate={
                monthly
                  ? { transform: "translateY(-40px)" }
                  : { transform: "translateY(0px)" }
              }
            >
              MM
            </ChakraBox>
            <Flex mx="20px">/</Flex>
            <ChakraBox
              position="absolute"
              left="100px"
              initial={{
                transform: "translateY(0px)"
              }}
              animate={
                year
                  ? { transform: "translateY(0px)" }
                  : { transform: "translateY(-40px)" }
              }
            >
              {year}
            </ChakraBox>
            <ChakraBox
              position="absolute"
              left="100px"
              animate={
                year
                  ? { transform: "translateY(-40px)" }
                  : { transform: "translateY(0px)" }
              }
            >
              YY
            </ChakraBox>
          </Flex>
          {/* <Flex>{`MM/YY`}</Flex> */}
        </Flex>
      </Flex>

      <Flex>
        <Text
          ref={nameRef}
          width="70%"
          border="1px solid none"
          p="5px 10px"
          fontSize="14px"
          overflow="hidden"
          position="relative"
          height="18px"
        >
          <ChakraBox
            position="absolute"
            initial={{
              transform: "translateY(0px)"
            }}
            animate={
              cardName
                ? { transform: "translateY(0px)" }
                : { transform: "translateY(-40px)" }
            }
          >
            {cardName.toUpperCase()}
          </ChakraBox>
          <ChakraBox
            position="absolute"
            animate={
              cardName
                ? { transform: "translateY(-40px)" }
                : { transform: "translateY(0px)" }
            }
          >
            FULL NAME
          </ChakraBox>
        </Text>
      </Flex>

      <Flex
        border="1px solid white"
        position="absolute"
        width={`${width}px`}
        height={`${height}px`}
        top={`${y}px`}
        left={`${x}px`}
        transition="all 1s ease-in-out"
      />

      <Flex position="absolute" right="20px" bottom="20px">
        <Flex
          position="absolute"
          borderRadius="99px"
          width="25px"
          height="25px"
          bgColor="#eb001b"
          transform="translateX(-15px)"
          opacity="0.9"
        />
        <Flex
          borderRadius="99px"
          width="25px"
          height="25px"
          bgColor="rgba(255,209,0,0.7)"
          opacity="0.9"
          filter="brightness(1.5)"
        />
      </Flex>

      <Flex position="absolute" right="20px">
        <svg class="logo" width="40" height="40" viewBox="0 0 17.5 16.2">
          <path
            d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z"
            fill="white"
          ></path>
        </svg>
      </Flex>
    </Flex>
  );
}
