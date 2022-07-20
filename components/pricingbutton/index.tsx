import React from "react";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import PricingModal from "./pricingmodal";

const PricingButton = (props: any) => {
  const [opened, handlers] = useDisclosure(false);

  const handleButton = () => {
    handlers.toggle();
  };

  return (
    <>
      <PricingModal opened={opened} onClose={handleButton} />
      <Button
        mt="1em"
        color="appGreen"
        sx={{ width: "100%", display: "block" }}
        onClick={handleButton}
      >
        VIEW MY PRICING
      </Button>
    </>
  );
};

export default PricingButton;
