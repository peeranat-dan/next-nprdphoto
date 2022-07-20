import React, { RefObject } from "react";
// import Image from "next/image";
import { Blockquote, Center, Container, Grid, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const AboutSection = ({ target }: { target: RefObject<HTMLDivElement> }) => {
  const match = useMediaQuery("(min-width: 769px");
  const startYear = 2016;
  const experienceYear = new Date().getFullYear() - startYear;
  return (
    <Container
      sx={{ paddingTop: !match ? "8em" : 0, paddingBottom: !match ? "8em" : 0 }}
    >
      <Center
        style={{
          height: "95vh",
        }}
        ref={target}
      >
        <Grid justify="center" align="center" gutter="xs">
          <Grid.Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Center>
              <div>
                <Image
                  width="300px"
                  height="450px"
                  alt="A photo of me carrying a camera wearing a green shirt at Chulalongkorn University"
                  src="https://firebasestorage.googleapis.com/v0/b/photography-profile.appspot.com/o/myPhoto%2FDSC04005(1).jpg?alt=media&token=02590c87-be3c-4eae-9352-bc4dca168353"
                />
              </div>
            </Center>
          </Grid.Col>
          <Grid.Col xs={12} sm={12} md={6}>
            <Blockquote cite="- nprdphoto">
              Nin is a part-time photographer based in Thailand. He was filled
              with passion for photography since {startYear}. He usually brings
              his camera with him everywhere he goes. With {experienceYear}{" "}
              years-experience, Nin is ready to grab any opportunities you give
              him and he will return you the best of his photography skill.
            </Blockquote>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  );
};

export default AboutSection;
