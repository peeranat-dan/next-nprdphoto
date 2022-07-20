import { Ref } from "react";
import { Center, Container, Grid } from "@mantine/core";

import { GalleryImage } from "../components/gallery";

import { photosList } from "../utils/getPhotoList.js";

interface GallerySectionProps {
  target: Ref<HTMLDivElement>;
}

const photos = photosList;

const GallerySection = ({ target }: GallerySectionProps) => {
  return (
    <Container fluid ref={target}>
      <Grid align="center">
        {photos.map((photo) => {
          return (
            <Grid.Col xs={12} sm={6} md={4} lg={3} xl={3} key={photo.name}>
              <GalleryImage
                src={`/photos/preview/${photo.name}.jpg`}
                alt={photo.ig}
                fullSrc={`/photos/fullRes/${photo.name}.jpg`}
                model={photo.ig}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default GallerySection;
