import {NextPage} from "next";
import Head from 'next/head'

// Components
import MainLayout from "../layouts/MainLayout";
import {Section} from "../styles/GlobalStyle";
import Hero from "../components/Hero/Hero";
import ShortForm from "../components/ShortForm/ShortForm";
import LinkList from "../components/LinkList/LinkList";

const HomePage: NextPage = () => (
    <MainLayout>
        <Head>
            <title>Shortly | URL Short APP</title>
        </Head>
        <Section>
            <Hero/>
            <ShortForm/>
            <LinkList/>
        </Section>
    </MainLayout>
)

export default HomePage
