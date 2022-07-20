import React from "react";
import Image from "next/image";
import { Modal, Typography } from "../../base";
import { BrandInstagram } from "tabler-icons-react";
import { Button, Group, Stack } from "@mantine/core";

interface ImageModalProps {
  src: string;
  alt: string;
  model: string;
  opened: boolean;
  handlers: () => void;
}

const ImageModal = ({ src, alt, model, opened, handlers }: ImageModalProps) => {
  return (
    <Modal title="Preview" centered opened={opened} onClose={handlers}>
      <Image
        layout="responsive"
        width="400px"
        height="600px"
        src={src}
        alt={alt}
      />
      <Stack align="stretch">
        <Button
          leftIcon={<BrandInstagram />}
          component="a"
          href={`https://www.instagram.com/${model}`}
          target="_blank"
          mt="0.5em"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          <Typography>IG: {model}</Typography>
        </Button>
      </Stack>
    </Modal>
  );
};

export default ImageModal;
