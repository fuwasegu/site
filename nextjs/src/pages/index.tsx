import { Box, Center, Container, Divider, Flex, Heading, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

type SnsIconProps = {
    permalink: string,
    imagePath: string,
};

const SnsIcon = (props: SnsIconProps) => (
    <>
        <Link
            href={props.permalink}
            isExternal
            _hover={{
                transform: "scale(1.1)",
                border: "1px",
                borderColor: "gray.200"
            }}
        >
            <Image
                src={props.imagePath}
                alt="sns-icon"
                height="40px"
                objectFit="cover"
                _hover={{
                    transform: "scale(1.1)",
                    border: "1px",
                    borderColor: "gray.200",
                    boxShadow: "0 0 20px rgb(214, 42, 208, 0.5), 0 2px 5px rgba(0, 0, 0, 0.3)",
                }}
            ></Image>
        </Link>
    </>
);

const Home = () => (
    <>
        <Container maxW='container.lg'>
            <SimpleGrid columns={[1, 1, 2]} spacing="40px" margin="40px">
                <Box>
                    <Center>
                        <Image
                            src="/favicon.png"
                            alt="fuwasegu"
                            borderRadius='full'
                            border="1px"
                            borderColor="#d62ad0"
                            maxWidth="240px"
                        ></Image>
                    </Center>
                </Box>
                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Heading as="h2" mb="8px">HirosuguTakeshita</Heading>
                    <Heading as="h4" size="md" mb="8px" color="#d62ad0">Nagoya, Aichi, Japan</Heading>
                    <Divider borderColor="gray.400" mb="8px"></Divider>
                    <Text>またの名を &quot;ふわせぐ&quot;.</Text>
                    <Text>学生結婚ののち第一子を授かりヤンチャボウズの父 かつ Laravel が好きな Web エンジニア．</Text>
                    <Text>Laravel Framework へのコントリビューションや, Laravel ソースコードリーディング会を開催したりするのが最近の楽しみ．</Text>
                    <Text>中学三年生のときに十進 BASIC に出会ったのがこのエンジニア人生の始まり．</Text>
                </Box>
            </SimpleGrid>
            <Heading as="h2" mt="20px">SNS</Heading>
            <Divider borderColor="gray.600"></Divider>
            <Flex>
                <Box m="8px">
                    <SnsIcon permalink="https://github.com/fuwasegu" imagePath="/icons/GitHub_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://www.linkedin.com/in/hirosugu-takeshita/" imagePath="/icons/Linkedin_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://note.com/fuwasegu" imagePath="/icons/note_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://qiita.com/fuwasegu" imagePath="/icons/Qiita_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://speakerdeck.com/fuwasegu" imagePath="/icons/SpeakerDeck_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://twitter.com/fuwasegu" imagePath="/icons/Twitter_logo.png"></SnsIcon>
                </Box>
                <Box m="8px">
                    <SnsIcon permalink="https://zenn.dev/fuwasegu" imagePath="/icons/Zenn_logo.png"></SnsIcon>
                </Box>
            </Flex>
        </Container>
    </>
)


export default Home;
