import Layout from "../components/Layout";
import Footer from "../components/Footer";
import styled from "styled-components";

const ContainerBlog = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    
`
const Wrapper = styled.div`
    height: 60vh;
    width: 80%;
    padding-top: 50px;

    h3 {
        color: red;
    }
    
`

const PortfolioFull = () => (

    <>
        <Layout>
        <ContainerBlog> 
                <Wrapper>
                    <h1>My Dev Portfolio</h1>
                    <h3>Under construction - will be up shortly</h3>
                </Wrapper>
        </ContainerBlog>
        </Layout>
        <Footer />
    </>


)

export default PortfolioFull;