import React from "react";
import {
  AppShell,
  Burger,
  Group,
  MediaQuery,
  Navbar,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { Home, Phone, User } from "tabler-icons-react";
import { Typography } from "../base";
import BackToTopButton from "../backtotop";
import PricingButton from "../pricingbutton";

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

const NAVIGATION_LINK = [
  {
    title: "Home",
    icon: <Home />,
    color: "blue",
  },
  {
    title: "About",
    icon: <User />,
    color: "appGreen",
  },
  {
    title: "Contact",
    icon: <Phone />,
    color: "appPurple",
  },
];

interface LayoutProps {
  scrollToGallery: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  children: React.ReactNode;
}

const Layout = ({
  scrollToGallery,
  scrollToAbout,
  scrollToContact,
  children,
}: LayoutProps) => {
  const [opened, handlers] = useDisclosure(false);
  const isLargerThanMd = useMediaQuery("(min-width: 769px)");
  const scrollTo = (target: string) => {
    if (target === "Home") {
      scrollToGallery();
      handlers.close();
      return;
    }
    if (target === "About") {
      scrollToAbout();
      handlers.close();
      return;
    }
    if (target === "Contact") {
      scrollToContact();
      handlers.close();
      return;
    }
  };
  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      padding="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ xs: "100%", sm: 300 }}
          p="2em"
        >
          <Typography header="true" order={2} mb="1em">
            NPRDPHOTO
          </Typography>
          {NAVIGATION_LINK.map((nav) => {
            return (
              <UnstyledButton
                onClick={() => scrollTo(nav.title)}
                sx={buttonConfig}
                key={nav.title}
              >
                <Typography
                  variant="link"
                  component="a"
                  size="lg"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "gray",
                  }}
                >
                  <Group>
                    <ThemeIcon p={3} color={nav.color}>
                      {nav.icon}
                    </ThemeIcon>
                    <Typography size="md">{nav.title}</Typography>
                  </Group>
                </Typography>
              </UnstyledButton>
            );
          })}
          <PricingButton />
        </Navbar>
      }
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <div style={{ alignItems: "center", height: "3em" }}>
          <Burger
            ml="1em"
            opened={opened}
            onClick={() => handlers.toggle()}
            size="sm"
          />
        </div>
      </MediaQuery>
      {children}
      <BackToTopButton />
    </AppShell>
  );
};

export default Layout;
