import React from "react";
import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/core";
import { useContext } from "./context";
import "./index.css";

export default function Form() {
  const {
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
    setOnCvvFocus,
    setOnNumberFocus,
    setOnNameFocus,
    setOnMonthlyFocus,
    setOnYearFocus
  } = useContext();

  return (
    <form>
      <Flex flexDir="column" gridGap="20px" w="100%">
        <FormControl w="100%">
          <FormLabel className="form-label">Card Number</FormLabel>
          <Input
            className="input"
            width="93%"
            bg
            _focus={{ border: "1px solid white" }}
            _hover={{ border: "1px solid white" }}
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            onFocus={() => setOnNumberFocus(true)}
            onBlur={() => setOnNumberFocus(false)}
          />
        </FormControl>

        <FormControl w="100%">
          <FormLabel className="form-label">Card Holders</FormLabel>
          <Input
            className="input"
            width="93%"
            bg
            _focus={{ border: "1px solid white" }}
            _hover={{ border: "1px solid white" }}
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            onFocus={() => setOnNameFocus(true)}
            onBlur={() => setOnNameFocus(false)}
          />
        </FormControl>

        <Flex justifyContent="space-between" gridGap="30px" w="100%">
          <FormControl>
            <FormLabel className="form-label">Expiration Date</FormLabel>
            <Flex fontSize="16px" gridGap="10px">
              <select
                style={{
                  width: "100px",
                  height: "40px",
                  padding: "5px 10px"
                }}
                value={monthly}
                onChange={(e) => {
                  if (e.target.value !== "Month") {
                    setMonthly(e.target.value);
                  } else {
                    setMonthly("");
                  }
                }}
                onFocus={() => setOnMonthlyFocus(true)}
                onBlur={() => setOnMonthlyFocus(false)}
              >
                <option>Month</option>
                {Array.from({ length: 12 }, (x, id) => (
                  <option key={id} value={id + 1}>
                    {id + 1}
                  </option>
                ))}
              </select>
              <select
                style={{
                  width: "120px",
                  padding: "5px 10px"
                }}
                value={year}
                onChange={(e) => {
                  if (e.target.value !== "Year") {
                    setYear(e.target.value);
                  } else {
                    setYear("");
                  }
                }}
                onFocus={() => setOnYearFocus(true)}
                onBlur={() => setOnYearFocus(false)}
              >
                <option>Year</option>

                {Array.from({ length: 10 }, (x, id) => (
                  <option key={id} value={21 + id + 1}>
                    {21 + id + 1}
                  </option>
                ))}
              </select>
            </Flex>
          </FormControl>
          <FormControl>
            <FormLabel className="form-label">CVV</FormLabel>
            <Input
              w="100px"
              className="input"
              bg
              _focus={{ border: "1px solid white" }}
              _hover={{ border: "1px solid white" }}
              onFocus={() => setOnCvvFocus(true)}
              onBlur={() => setOnCvvFocus(false)}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </FormControl>
        </Flex>
      </Flex>
    </form>
  );
}
