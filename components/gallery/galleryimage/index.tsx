import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import ImageModal from "../imagemodal/index";
import { AspectRatio, Box, Container } from "@mantine/core";

interface GalleryImageProps {
  src: string;
  fullSrc: string;
  alt: string;
  model: string;
}

const GalleryImage = ({ src, alt, fullSrc, model }: GalleryImageProps) => {
  const [opened, handlers] = useDisclosure(false);
  return (
    <>
      <ImageModal
        src={fullSrc}
        alt={alt}
        model={model}
        opened={opened}
        handlers={() => handlers.toggle()}
      />

      <Image
        onClick={() => handlers.toggle()}
        src={src}
        alt={alt}
        layout="responsive"
        width="300px"
        height="450px"
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default GalleryImage;
