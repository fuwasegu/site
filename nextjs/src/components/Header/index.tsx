import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Link, LinkProps, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link"

const HoverLink = (props: LinkProps) => (
    <Link rounded="base" _hover={{ bg: "gray.200" }} p={2} {...props} />
);

const Navigation = () => (
    <Stack as="nav">
        <NextLink href="/" passHref>
            <HoverLink>トップ</HoverLink>
        </NextLink>
        <NextLink href="/history" passHref>
            <HoverLink>ふわせぐの人生</HoverLink>
        </NextLink>
        <NextLink href="/skills" passHref>
            <HoverLink>ふわせぐにできること</HoverLink>
        </NextLink>
        <NextLink href="/contribution" passHref>
            <HoverLink>OSS貢献自慢</HoverLink>
        </NextLink>
    </Stack>
);

const DrawerMenu = () => {
    // useDisclosureで閉じ・開きの管理
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box textAlign="center">
                <Box
                    as="button"
                    onClick={onOpen}
                    _focus={{ _focus: "none" }}
                    width="fit-content"
                    transition=".5s"
                    transform="rotateZ( 0deg )"
                    _hover={{
                        transform: "rotateZ( 360deg )"
                    }}
                >
                    <Text fontSize="36px"> 🚀 </Text>
                </Box>
            </Box>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            お品書き
                        </DrawerHeader>
                        <DrawerBody>
                            <Navigation />
                        </DrawerBody>
                        <DrawerFooter>
                            <Image src="/favicon.png" alt="fuwasegu"></Image>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
};

const Header = () => (
    <>
        <Box
            opacity="0.9"
            color="#fb7afc"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Stack>
                <NextLink href="/">
                    <Text fontSize={{ sm: "24px", lg: "36px" }} ml="16px" mt="16px">ふわせぐのホームページ</Text>
                </NextLink>
                <DrawerMenu />
            </Stack>
        </Box>
        <Divider />
    </>
);

export default Header;
