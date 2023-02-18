import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "@/components/Header"

export default function Home() {
    return (
        <>
            <Head>
                <title>ふわせぐのホームページ</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="ふわせぐのホームページです" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header></Header>
            <Box>
                Hello World
            </Box>
        </>
    )
}
