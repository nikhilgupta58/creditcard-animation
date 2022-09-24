import React from "react";
import { Flex } from "@chakra-ui/core";
import Form from "./Form";
import Card from "./Card";
import { Context } from "./context";

export default function App() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [monthly, setMonthly] = React.useState("");
  const [year, setYear] = React.useState("");

  const [onCvvFocus, setOnCvvFocus] = React.useState(false);
  const [onNumberFocus, setOnNumberFocus] = React.useState(false);
  const [onNameFocus, setOnNameFocus] = React.useState(false);
  const [onMonthlyFocus, setOnMonthlyFocus] = React.useState(false);
  const [onYearFocus, setOnYearFocus] = React.useState(false);

  return (
    <Context.Provider
      value={{
        cardNumber,
        setCardNumber,
        cardName,
        setCardName,
        cvv,
        setCvv,
        monthly,
        setMonthly,
        year,
        setYear,
        onCvvFocus,
        setOnCvvFocus,
        onNumberFocus,
        setOnNumberFocus,
        onNameFocus,
        setOnNameFocus,
        onMonthlyFocus,
        setOnMonthlyFocus,
        onYearFocus,
        setOnYearFocus
      }}
    >
      <Flex
        fontFamily={`'Source Code Pro', monospace`}
        width="100vw"
        height="100vh"
        backgroundImage="linear-gradient(to right, #202020, #808080)"
      >
        <Flex
          position="absolute"
          backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
          height="100vh"
          width="calc(50vw + 90px)"
          transform="skewX(-20deg) translateX(160px)"
          right="0"
          boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
        />

        <Flex
          position="absolute"
          backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
          height="100vh"
          width="calc(50vw + 90px)"
          transform="skewX(20deg) translateX(160px)"
          right="0"
          boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
        />

        <Flex
          color="white"
          letterSpacing="0.02em"
          position="absolute"
          bottom="10px"
          right="10px"
        >
          Nikhil Gupta
        </Flex>

        <Flex
          position="absolute"
          color="white"
          boxShadow="0 1px 10px 1px rgb(0 0 0 / 30%)"
          backgroundImage="linear-gradient(to right, #202020, #808080)"
          width="550px"
          height="400px"
          top="45%"
          left="50%"
          transform="translateX(-50%)"
          borderRadius="10px"
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            overflow="hidden"
            borderRadius="10px"
          >
            <Flex
              position="absolute"
              backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
              height="100%"
              width="calc(50% + 90px)"
              transform="skewX(-20deg) translateX(102px)"
              right="0"
              boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
            />

            <Flex
              position="absolute"
              backgroundImage="linear-gradient(to bottom, #ff6767, #ff4545)"
              height="100%"
              width="calc(50% + 90px)"
              transform="skewX(20deg) translateX(218px)"
              right="0"
              boxShadow="0 0 10px 0px rgb(0 0 0 / 50%)"
            />
          </Flex>

          <Flex w="100%" h="100%" borderRadius="10px" zIndex="1" py="150px">
            <Form />
          </Flex>

          <Card />
        </Flex>
      </Flex>
    </Context.Provider>
  );
}
