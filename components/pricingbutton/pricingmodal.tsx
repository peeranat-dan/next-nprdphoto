import React from "react";
import { Button, Group, Space, Table } from "@mantine/core";
import { useMediaQuery, useOs } from "@mantine/hooks";
import { Modal, Typography } from "../base";
import { BrandInstagram } from "tabler-icons-react";

interface PricingModalProps {
  opened: boolean;
  onClose: () => void;
}
const PricingModal = ({ opened, onClose }: PricingModalProps) => {
  const TABEL_HEAD = ["Option", "Full Day", "Half Day", "Price/hour"];
  const options = [
    { option: "Graduation", priceFullDay: 4500, priceHalfDay: 3500 },
    { option: "Profile", priceFullDay: 3500, priceHalfDay: 2500 },
    { option: "Hourly (Not Graduation)", pricePerHour: 800 },
  ];
  const TABLE_CONTENT = options.map((option) => (
    <tr key={option.option}>
      <td>{option.option}</td>
      <td>
        {option.priceFullDay
          ? option.priceFullDay.toLocaleString() + " THB"
          : "-"}
      </td>
      <td>
        {option.priceHalfDay
          ? option.priceHalfDay.toLocaleString() + " THB"
          : "-"}
      </td>
      <td>
        {option.pricePerHour
          ? option.pricePerHour.toLocaleString() + " THB"
          : "-"}
      </td>
    </tr>
  ));

  const match = useMediaQuery("(min-width: 769px)");
  const os = useOs();
  const dmLink =
    os === "windows" || os === "macos" || os === "linux"
      ? "https://www.instagram.com/nprdphoto"
      : "instagram://user?username=nprdphoto";

  return (
    <Modal
      aria-modal="true"
      role="dialog"
      centered
      opened={opened}
      onClose={onClose}
      size={match ? "lg" : "100%"}
    >
      <Typography size="xl" color="appGreen" weight={600}>
        Pricing
      </Typography>
      <Space mt="1em" />
      <Table fontSize="md">
        <thead>
          <tr>
            {TABEL_HEAD.map((head) => {
              return <th key={head}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>{TABLE_CONTENT}</tbody>
      </Table>
      <Space mt="1em" />
      <Typography color="red">
        * If more than one person, DM me for discount.
      </Typography>
      <Group position="right">
        <Button color="appPurple" component="a" href={dmLink} target="blank">
          <BrandInstagram />
          <Space mr="0.5em" />
          DM me
        </Button>
      </Group>
    </Modal>
  );
};

export default PricingModal;
