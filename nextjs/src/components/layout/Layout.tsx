import { Box, Divider } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type LayoutProps = Required<{
    readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
    <>
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <Header />
            <Box
                flex={1}
                overflowX="hidden"
            >
                {children}
            </Box>
            <Footer />
        </Box>
    </>
)
