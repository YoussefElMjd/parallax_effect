import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxEffect() {
  return (
    <Parallax
      pages={2}
      style={{
        top: 0,
        left: 0,
        position: "relative",
        backgroundColor: "#210002",
      }}
    >
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.4}
        style={{
          backgroundImage: "url(/images/background.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.3}
        style={{
          backgroundImage: "url(/images/mountains.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.35}
        style={{
          backgroundImage: "url(/images/logo_land.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        factor={1.5}
        offset={0}
        speed={0.25}
        style={{
          backgroundImage: "url(/images/jungle1.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.55}
        style={{
          backgroundImage: "url(/images/jungle2.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.4}
        style={{
          backgroundImage: "url(/images/jungle3.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.3}
        style={{
          backgroundImage: "url(/images/jungle4.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={-0.25}
        style={{
          backgroundImage: "url(/images/man_on_mountain.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "top center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={1.5}
        speed={0.25}
        style={{
          backgroundImage: "url(/images/jungle5.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 1038px",
          backgroundPosition: "left 100px center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer offset={1} factor={2}>
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          w="100%"
          spacing="80px"
        >
          <Text color="#FFAF1B" w="35%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            libero non nunc convallis faucibus ut ut risus. Nulla metus ante,
            pellentesque eu porttitor ut, pharetra eu ipsum. Quisque ut justo
            vel arcu suscipit sagittis ac tincidunt diam. Sed neque odio,
            consectetur sit amet egestas at, auctor sit amet nulla.
          </Text>
          <Text color="#FFAF1B" w="35%">
            Nunc mattis eget lectus et vehicula. Phasellus mattis justo sed
            tellus auctor, id luctus dolor hendrerit. Proin sit amet pretium
            eros. Donec auctor posuere felis ac molestie. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Curabitur in elit a dolor finibus
            pretium.
          </Text>
          <Text color="#FFAF1B" w="35%">
            Integer hendrerit luctus euismod. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Fusce in
            dapibus ex, sit amet aliquam orci. Nulla semper leo nec facilisis
            congue. Pellentesque faucibus nisl non massa gravida rhoncus. Sed
            eget luctus urna. Nunc a viverra dolor. Donec tortor diam, tempus ac
            sollicitudin eget, efficitur vel arcu. Nam elementum massa non
            tortor cursus, vestibulum iaculis felis egestas.
          </Text>
        </VStack>
      </ParallaxLayer>
    </Parallax>
  );
}
