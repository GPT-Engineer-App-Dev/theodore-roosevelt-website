import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="gray.100" py={4}>
          <Heading as="h1" size="xl" textAlign="center">
            Theodore Roosevelt
          </Heading>
        </Box>

        {/* Main Content */}
        <Box px={4}>
          <Heading as="h2" size="lg" mb={4}>
            About Theodore Roosevelt
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nisi ac magna consequat rutrum. Nullam sit amet feugiat augue, sit amet tempor lacus. Pellentesque in imperdiet metus. Nulla vehicula turpis non felis malesuada, at rutrum libero pellentesque. Quisque a nulla et metus faucibus aliquam sit amet sed eros. Morbi sed neque luctus, maximus sapien sed, facilisis nisi.</Text>
        </Box>

        {/* Footer */}
        <Box bg="gray.100" py={4} mt="auto">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Theodore Roosevelt. All rights reserved.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
