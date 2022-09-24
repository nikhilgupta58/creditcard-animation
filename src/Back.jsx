import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "./context";

export default function Back() {
  const { cvv } = useContext();
  return (
    <Flex direction="column" mt="25px" gridGap="15px" overflow="hidden">
      <Flex backgroundColor="#000" width="100%" height="50px" />
      <Flex
        gridGap="5px"
        direction="column"
        justifyContent="end"
        alignItems="end"
        px="20px"
      >
        <Text fontSize="10px" pr="10px">
          CVV
        </Text>
        <Flex
          color="#000"
          width="95%"
          p="10px"
          bgColor="white"
          borderRadius="5px"
          justifyContent="end"
          alignItems="end"
          fontSize="12px"
          minH="15px"
        >
          <Text>{cvv}</Text>
        </Flex>
      </Flex>

      <Flex mt="10px" px="20px" direction="column" gridGap="1px" fontSize="8px">
        <Text textAlign="justify">
          This card is property of Monzo Bank, Wonderland. Misuse is criminal
          offence. If found, please return to Monzo Bank or to the nearest bank
          with MasterCard logo.
        </Text>
        <Text>Use of this card is subject to the credit card agreement.</Text>
      </Flex>
    </Flex>
  );
}
