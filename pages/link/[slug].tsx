import {NextPage} from "next";

// Components
import MainLayout from "../../layouts/MainLayout";
import {Container} from "../../styles/GlobalStyle";

const LinkDetailsPage: NextPage = () => {
    return (
        <MainLayout>
            <section>
                <Container>
                    <h1>Link info</h1>
                </Container>
            </section>
        </MainLayout>
    )
}

export default LinkDetailsPage
