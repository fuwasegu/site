import { Container, Text } from "@chakra-ui/react";

const Footer = () => (
    <Container as="footer">
        <Text fontSize="sm" color="subtle" textAlign="center">
            &copy; {new Date().getFullYear()} Fuwasegu. All rights reserved.
        </Text>
    </Container>
);

export default Footer;
