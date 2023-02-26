import "src/styles/globals.css"
import { Layout } from '@/components/layout/Layout'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>ふわせぐのホームページ</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="ふわせぐのホームページです" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>

    )
}

export default MyApp
