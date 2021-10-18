import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Link from "next/link";
import { articles } from "../../articles";

const ContainerBlog = styled.div`
    max-height: auto;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    
`
const Wrapper = styled.div`
    height: auto;
    width: 60%;
    padding-top: 50px;

    h1 {
        margin-bottom: 50px;

        @media only screen and (max-width: 480px) {
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 90%;

    }
    
`
const Article = styled.div`
    margin-top: 50px;
`
const ArtTitle = styled.h2`

    @media only screen and (max-width: 480px) {
            font-size: 25px;
        }

`
const ArtIntro = styled.p`
    @media only screen and (max-width: 480px) {
            font-size: 20px;
        }

`

const ArticleText = styled.p`
    font-weight: 300;
    padding-bottom: 40px;
    
    @media only screen and (max-width: 480px) {
            font-size: 18px;
        }

`

const ArtTag = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #4151e6;
    @media only screen and (max-width: 480px) {
        font-size: 14px;

    }
    
`
const ReadMore = styled.p`
    cursor: pointer;
    font-weight: 400;
    color: #4151e6;
`

const corpfinarticle = () => (

    <>
        <ContainerBlog>
                <Layout>
                <Wrapper>
                    <h1>Blog/My Articles</h1>
                    <Article>
                        <ArtTitle>{articles[0].title}</ArtTitle>
                        <ArtIntro>{articles[0].intro}</ArtIntro>
                                    <ArtTag>{articles[0].tags}</ArtTag>
                                    <ArticleText>
                                        {articles[0].fullArticle}

                                    </ArticleText>
                                    <Link 
                                        href="/blog"
                                        target="_blank">
                                    <ReadMore>Back</ReadMore>
                                    </Link>
                    </Article>
                    
                              
                </Wrapper>          
            </Layout>
            
        </ContainerBlog>
        <Footer />
        
    </>


)

export default corpfinarticle;