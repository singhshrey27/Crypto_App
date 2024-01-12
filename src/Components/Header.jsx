import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const buttonStyle = {
    variant: "unstyled",
    color: "black",
    border: "1px solid black",
    marginRight: "10px",
  };
  return (
    <div>
      <HStack p={"4"} shadow={"base"} bgColor={"blue.800"}>
        <Button style={buttonStyle}>
          <Link to="/">Home</Link>
        </Button>
        <Button style={buttonStyle}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button style={buttonStyle}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
    </div>
  );
};

export default Header;
