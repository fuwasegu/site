import { Box, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";

type SkillCardProps = {
    name: string,
    imagePath: string,
    level: number,
};
const SkillCard = (props: SkillCardProps) => {
    const stars = [];
    for (let i = 1; i < 4; i++) {
        if (props.level - i >= 0) {
            stars.push(<AiFillStar />);
        } else {
            stars.push(<AiOutlineStar />);
        }
    }

    return (
        <>
            <Card width="150px">
                <Box px="4px">
                    <CardHeader>
                        <Center>
                            <Heading as='h4' size='md'>{props.name}</Heading>
                        </Center>
                    </CardHeader>
                    <Divider borderColor="gray.500"></Divider>
                    <CardBody>
                        <Center>
                            <Image src={props.imagePath} alt="skill-icon" maxHeight="48px"></Image>
                        </Center>
                    </CardBody>
                    <CardFooter justify='space-between'>
                        {stars.map((star, idx) => (<Text fontSize="4xl" key={idx}>{star}</Text>))}
                    </CardFooter>
                </Box>
            </Card>
        </>
    )
};

const Skills = () => (
    <>
        <Container maxW='container.xl' mt="40px" mb="40px">
            <SimpleGrid columns={[2, 3, 4, 5]} spacing="20px">
                <SkillCard name="AWS" imagePath="/skills/aws.png" level={2}></SkillCard>
                <SkillCard name="C" imagePath="/skills/c.png" level={2}></SkillCard>
                <SkillCard name="C++" imagePath="/skills/cp.png" level={1}></SkillCard>
                <SkillCard name="CSS" imagePath="/skills/css.png" level={2}></SkillCard>
                <SkillCard name="Docker" imagePath="/skills/docker.png" level={2}></SkillCard>
                <SkillCard name="Git" imagePath="/skills/git.png" level={2}></SkillCard>
                <SkillCard name="GitHub" imagePath="/skills/github.png" level={3}></SkillCard>
                <SkillCard name="Go" imagePath="/skills/go.png" level={2}></SkillCard>
                <SkillCard name="GraphQL" imagePath="/skills/graphql.png" level={1}></SkillCard>
                <SkillCard name="HTML" imagePath="/skills/html.png" level={2}></SkillCard>
                <SkillCard name="Java" imagePath="/skills/java.png" level={2}></SkillCard>
                <SkillCard name="jQuery" imagePath="/skills/jquery.png" level={2}></SkillCard>
                <SkillCard name="JavaScript" imagePath="/skills/js.png" level={2}></SkillCard>
                <SkillCard name="Kotlin" imagePath="/skills/kotlin.png" level={1}></SkillCard>
                <SkillCard name="Laravel" imagePath="/skills/laravel.png" level={3}></SkillCard>
                <SkillCard name="MySQL" imagePath="/skills/mysql.png" level={2}></SkillCard>
                <SkillCard name="Next.js" imagePath="/skills/nextjs.webp" level={1}></SkillCard>
                <SkillCard name="PHP" imagePath="/skills/php.png" level={3}></SkillCard>
                <SkillCard name="PostgreSQL" imagePath="/skills/psql.png" level={2}></SkillCard>
                <SkillCard name="Python" imagePath="/skills/python.png" level={2}></SkillCard>
                <SkillCard name="R" imagePath="/skills/r.png" level={1}></SkillCard>
                <SkillCard name="React" imagePath="/skills/react.png" level={1}></SkillCard>
                <SkillCard name="Redis" imagePath="/skills/redis.png" level={1}></SkillCard>
                <SkillCard name="Rust" imagePath="/skills/rust.png" level={1}></SkillCard>
                <SkillCard name="Slack" imagePath="/skills/slack.png" level={3}></SkillCard>
                <SkillCard name="TypeScript" imagePath="/skills/ts.png" level={2}></SkillCard>
                <SkillCard name="Vue.js" imagePath="/skills/vue.png" level={2}></SkillCard>
            </SimpleGrid>
        </Container>
    </>
);

export default Skills;
