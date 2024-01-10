import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      botton={"4"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
    </Alert>
  );
};

export default ErrorComponent;
