import React from "react";
import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowNarrowUp } from "tabler-icons-react";

const BackToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<ArrowNarrowUp />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            color="appGreen"
            variant="white"
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default BackToTopButton;
