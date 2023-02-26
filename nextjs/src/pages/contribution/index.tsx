import { Box, Card, CardBody, Center, Container, Image, Link, LinkBox, LinkOverlay, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Contributions from "../history";
import { parseISO, format } from 'date-fns';

type PullRequest = {
    permalink: String,
    created_at: String,
    ogpOptionUrl: String,
}

type Contributions = {
    last_updated_at: String,
    pull_requests: PullRequest[],
}

const fetchContributions = async () => {
    const json = await fetch('/contributions.json')
        .then(res => res.json());

    return json as Contributions;
}

type ListProps = {
    contributions: Contributions | null
}

const List = (props: ListProps) => {
    if (props == null || props.contributions == null) {
        return (
            <Text>読み込みに失敗しました... orz</Text>
        );
    }
    const { contributions } = props;

    return (
        <Center>
            <SimpleGrid columns={[2, 2, 3, 4]} spacing="20px">
                {contributions.pull_requests.map((contribution) => {
                    return (
                        <>
                            <Link
                                href={contribution.permalink.toString()}
                                isExternal={true}
                                border="1px"
                                borderColor="gray.200"
                                width="fit-content"
                                transition="transform 0.3s"
                                _hover={{
                                    transform: "scale(1.1)",
                                    border: "1px",
                                    borderColor: "gray.200"
                                }}
                            >
                                <Image
                                    src={contribution.ogpOptionUrl.toString()}
                                    alt="github-ogp"
                                    width="400px"
                                    transition="transform 0.3s"
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
                })}
            </SimpleGrid>
        </Center >
    )
}

type DateStringOrEmptyProps = {
    date: Date | null
}
const DateStringOrEmpty = (props: DateStringOrEmptyProps) => {
    if (props.date) {
        return (
            <>
                {format(props.date, 'yyyy/MM/dd HH:mm')}
            </>
        );
    } else {
        return (
            <>
                不明
            </>
        )
    }
}

const Contribution = () => {
    const [contributions, setContributions] = useState<Contributions | null>(null);
    const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

    useEffect(() => {
        fetchContributions().then((data) => {
            setContributions(data);
            setUpdatedAt(parseISO(data.last_updated_at.toString()));
        })
    }, []);

    return (
        <Container maxW='container.xl' mt="40px">
            <Card mb="40px" border="1px" borderColor="#fbc7f7">
                <CardBody>
                    <Center>
                        <Text>普段利用している OSS への貢献記録です．</Text>
                    </Center>
                </CardBody>
            </Card>
            <List contributions={contributions}></List>
            <Box mt="20px">
                <Text>最終更新日: <DateStringOrEmpty date={updatedAt} /></Text>
            </Box>
        </Container>
    )
};

export default Contribution;
