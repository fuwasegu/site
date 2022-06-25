<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
    import Fa from 'svelte-fa'
    import {
        faBirthdayCake,
        faGraduationCap,
        faLaptopCode,
        faSchool,
        faClapperboard,
    } from '@fortawesome/free-solid-svg-icons'
</script>

<Timeline position="alternate">
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>1998.08.04</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faBirthdayCake} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 80px;'}>
			<h3>長崎県で生まれる</h3>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p style={'margin-top: -1px;'}>2005.04 ~ 2014.03</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot style={'background-color: #78DEC7;'} />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<h3 style={'margin-top: -2px;'}>義務教育期間</h3>
			<p style={'margin-top: -2px;'}>長崎大学教育学部附属小学校</p>
            <p style={'margin-top: -2px;'}>長崎大学教育学部附属中学校</p>
		</TimelineContent>
	</TimelineItem>

	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2014.04 ~ 2017.03</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faGraduationCap} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 120px;'}>
			<h3>高校入学</h3>
            <p>長崎県立長崎西高等学校<br />普通科普通コース</p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2017.04 ~ 2021.03</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faGraduationCap} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 120px;'}>
			<h3>大学入学</h3>
            <p>国立静岡大学<br />情報学部情報科学科</p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2017.05 ~ 2020.03</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faSchool} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 200px;'}>
			<h3>塾講師</h3>
            <p>小・中・高一貫総合予備校<br />クラ・ゼミ</p>
            <p>中学：英・数・理<br />高校：数・物 を担当</p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2019.08 ~ 2020.12</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faLaptopCode} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 220px;'}>
			<h3>開発アルバイト</h3>
            <p>株式会社ウェブインパクト</p>
            <p>
                サーバーサイド・フロントエンドを担当<br>
                子育て支援のWEB情報サイトの管理システム<br>
                学術研究の特許管理システム<br>
                飲食店向けサブスクサービスアプリ<br>
            </p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2020.08 ~ 2021.04</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faClapperboard} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 220px;'}>
			<h3>YouTube 動画編集</h3>
            <p>天才プログラマーKBOY チャンネル</p>
            <p>
                YouTube 動画の企画・構成<br>
                Adobe PremierePro を使った動画 編集<br>
            </p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2021.01 ~ now</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faLaptopCode} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 150px;'}>
			<h3>株式会社ゆめみ</h3>
            <p>
                フルサイクルエンジニアとして新卒入社．<br>
                コーポレートエンジニアとして社内サービスの開発に従事．
            </p>
		</TimelineContent>
	</TimelineItem>

    <TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>2022.05 ~ now</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 45px; height: 36px; background-color: #fff; display: flex; justify-content: center; border-color: transparent; '}
			>
            <Fa icon={faLaptopCode} size="2x"/>
			</TimelineDot>
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent style={'height: 150px;'}>
			<h3>株式会社AD5</h3>
            <p>
                業務委託でジョイン．<br>
                サーバーサイドエンジニアとして実装を担当
            </p>
		</TimelineContent>
	</TimelineItem>
</Timeline>

<style>
	p {
		margin: px 0;
		color: grey;
	}
</style>
