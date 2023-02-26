import "react-vertical-timeline-component/style.min.css";
import styles from "./History.module.css"

import { Box, Card, CardBody, Center, Heading, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode"
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { IoIosSchool } from "@react-icons/all-files/io/IoIosSchool";

const History = () => (
    <Box backgroundColor={"gray.100"} padding="40px">
        <Card mb="40px" border="1px" borderColor="#fbc7f7">
            <CardBody>
                <Center>
                    <Text>ふわせぐの人生と経歴です</Text>
                </Center>
            </CardBody>
        </Card>
        <VerticalTimeline>
            <VerticalTimelineElement
                className={styles.custom_line}
                date="1998.08.04"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaBirthdayCake></FaBirthdayCake>}
            >
                <Heading as='h2'>長崎で生まれる</Heading>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2005.04 - 2014.03"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaSchool></FaSchool>}
            >
                <Heading as='h2'>義務教育期間</Heading>
                <Text color={"gray.600"}>長崎大学教育学部附属小学校</Text>
                <Text color={"gray.600"}>長崎大学教育学部附属中学校</Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2017.04 - 2021.03"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<IoIosSchool></IoIosSchool>}
            >
                <Heading as='h2'>大学入学</Heading>
                <Text color={"gray.600"}>国立静岡大学情報学部情報科学科</Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2017.05 - 2020.03"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaSchool></FaSchool>}
            >
                <Heading as='h2'>塾講師</Heading>
                <Text color={"gray.600"}>小・中・高一貫総合予備校 クラ・ゼミ</Text>
                <Text color={"gray.600"}>（ 中学: 英・数・理 / 高校: 数・物 を担当 ）</Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2019.08 - 2020.12"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaLaptopCode></FaLaptopCode>}
            >
                <Heading as='h2'>株式会社ウェブインパクト</Heading>
                <Text color={"gray.600"}>開発アルバイト</Text>
                <Text color={"gray.600"}>サーバーサイド・フロントエンドを担当</Text>
                <Text color={"gray.600"}>
                    ・子育て支援のWEB情報サイトの管理システム<br />
                    ・学術研究の特許管理システム<br />
                    ・飲食店向けサブスクサービスアプリ
                </Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2020.08 - 2021.04"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaYoutube></FaYoutube>}
            >
                <Heading as='h2'>YouTube 動画編集</Heading>
                <Text color={"gray.600"}>天才プログラマーKBOY チャンネル</Text>
                <Text color={"gray.600"}>
                    ・YouTube 動画の企画・構成<br />
                    ・Adobe PremierePro を使った動画編集<br />
                </Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2021.01 - now"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaLaptopCode></FaLaptopCode>}
            >
                <Heading as='h2'>株式会社ゆめみ</Heading>
                <Text color={"gray.600"}>フルサイクルエンジニアとして新卒入社</Text>
                <Text color={"gray.600"}>コーポレートエンジニアとして社内サービスの開発に従事</Text>
                <Text color={"gray.600"}>PHP テックリードを兼任</Text>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2022.05 - now"
                iconStyle={{
                    background: '#fb7afc',
                    color: '#fff',
                    boxShadow: "0 0 0 4px #d62ad0, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)"
                }}
                contentStyle={{
                    borderTop: "3px solid #78dec7"
                }}
                icon={<FaLaptopCode></FaLaptopCode>}
            >
                <Heading as='h2'>株式会社AD5</Heading>
                <Text color={"gray.600"}>業務委託でジョイン</Text>
                <Text color={"gray.600"}>サーバーサイドエンジニアとして実装・コードレビューを担当</Text>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Box>
);

export default History;
