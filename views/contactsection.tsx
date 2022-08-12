import React, { RefObject } from "react";

import { BrandInstagram, Mail } from "tabler-icons-react";
import {
  Avatar,
  Card,
  Center,
  Container,
  Group,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Typography } from "../components/base";
import { useCheckMobile } from "../utils/useCheckMobile";

const buttonConfig = (theme: any) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing.xs,
  borderRadius: theme.radius.sm,
  color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  "&:hover": {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
});

const contactOptions = [
  {
    name: "Instagram",
    accountName: "@nprdphoto",
    url: "https://www.instagram.com/nprdphoto",
    smallUrl: "instagram://user?username=nprdphoto",
    logo: <BrandInstagram />,
    color: "appPurple",
  },
  {
    name: "Email",
    accountName: "peeranatdan.photo@gmail.com",
    url: "mailto:peeranatdan.photo@gmail.com",
    smallUrl: "mailto:peeranatdan.photo@gmail.com",
    logo: <Mail />,
    color: "appGreen",
  },
];

const myImage = {
  url: "https://firebasestorage.googleapis.com/v0/b/photography-profile.appspot.com/o/myPhoto%2FS__117637413.jpg?alt=media&token=7d05db2f-a379-4b45-96c3-4fb00fcb5d97",
  alt: "A photo of me carrying my Fujifilm XH-1 with Fujinon XF90F2",
};

const ContactSection = ({ target }: { target: RefObject<HTMLDivElement> }) => {
  const match = useMediaQuery("(min-width: 769px");
  const isMobile = useCheckMobile();
  return (
    <Container
      fluid
      sx={{
        paddingTop: !match ? "8em" : 0,
        paddingBottom: !match ? "8em" : 0,
      }}
    >
      <Center
        style={{
          height: "95vh",
        }}
        ref={target}
      >
        <Card shadow="md" p="lg" style={{ width: "400px" }}>
          <Card.Section>
            {/* <Image height="9em" src={myImage.url} alt={myImage.alt} /> */}
          </Card.Section>

          <Typography size="xl" weight={600} color="appGreen" my="0.5em">
            Contact me
          </Typography>

          {contactOptions.map((option) => {
            return (
              <Stack mt="0.5em" key={option.name}>
                <UnstyledButton
                  component="a"
                  target="_blank"
                  rel="noopener noreferer"
                  href={!isMobile ? option.url : option.smallUrl}
                  sx={buttonConfig}
                >
                  <Group>
                    <Avatar radius="md" size={40} color={option.color}>
                      {option.logo}
                    </Avatar>
                    <div>
                      <Typography>{option.name}</Typography>
                      <Typography size="xs" color="gray">
                        {option.accountName}
                      </Typography>
                    </div>
                  </Group>
                </UnstyledButton>
              </Stack>
            );
          })}
        </Card>
      </Center>
    </Container>
  );
};

export default ContactSection;
