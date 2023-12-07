import { Box, Text, VStack } from "@chakra-ui/react";
import ParallaxEffect from "./../../../packages/ui/components/contents/parallax/index";

export default function Home() {
  return (
    <VStack w="100%" h={"100vh"}>
      <ParallaxEffect></ParallaxEffect>
    </VStack>
  );
}
