import React from "react";
import {Stack, Box, Text, Link} from "@chakra-ui/react";
import {motion} from "framer-motion";
import NextLink from "next/link";

interface Props {
  title: string;
  dragConstraints?: React.RefObject<Element>;
}

const Window: React.FC<Props> = ({dragConstraints, title, children}) => {
  const [canDrag, toggleCanDrag] = React.useState(false);
  const [isDragging, toggleIsDragging] = React.useState(false);

  function handleDragHandleEnter() {
    toggleCanDrag(true);
  }

  function handleDragHandleLeave() {
    if (!isDragging) {
      toggleCanDrag(false);
    }
  }

  function handleDragHandleDown() {
    toggleIsDragging(true);
  }

  function handleDragHandleUp() {
    toggleIsDragging(false);
  }

  return (
    <Box height="1px" position="fixed" width="1px">
      <motion.div
        animate={{scale: 1}}
        drag={canDrag}
        dragConstraints={dragConstraints}
        dragElastic={false}
        dragMomentum={false}
        exit={{scale: 0}}
        initial={{scale: 0}}
        style={{width: "90vw", maxWidth: 640}}
      >
        <Stack
          backgroundColor="gray.700"
          borderColor="gray.600"
          borderRadius="md"
          borderWidth={1}
          boxShadow="xl"
          spacing={0}
        >
          <Stack
            alignItems="center"
            direction="row"
            padding={2}
            position="relative"
            onPointerDown={handleDragHandleDown}
            onPointerEnter={handleDragHandleEnter}
            onPointerLeave={handleDragHandleLeave}
            onPointerUp={handleDragHandleUp}
          >
            <Stack alignItems="center" direction="row" position="absolute">
              <NextLink passHref href="/">
                <Link>
                  <Box
                    backgroundColor="red.500"
                    borderRadius={9999}
                    cursor="pointer"
                    height={3}
                    tabIndex={0}
                    width={3}
                  />
                </Link>
              </NextLink>
              <Box
                backgroundColor="yellow.500"
                borderRadius={9999}
                height={3}
                opacity={0.25}
                width={3}
              />
              <Box
                backgroundColor="green.500"
                borderRadius={9999}
                height={3}
                opacity={0.25}
                width={3}
              />
            </Stack>
            <Text color="gray.400" flex={1} fontWeight="bold" textAlign="center" userSelect="none">
              {title}
            </Text>
          </Stack>
          {children}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Window;
