import Layout from "../components/Layout";
import Footer from "../components/Footer";
import styled from "styled-components";
import Link from "next/link";
import { articles } from "../articles";

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

const Blog = () => (

    <>
        
        <ContainerBlog>
                <Layout>
                <Wrapper>
                    <h1>Blog/My Articles</h1>
                    
                        {
                            articles.map(({title, intro, tags, content, link}, id) => (
                                <Article key={id}>
                                    <ArtTitle>{title}</ArtTitle>
                                    <ArtIntro>{intro}</ArtIntro>
                                    <ArtTag>{tags}</ArtTag>
                                    <ArticleText>
                                        {content}
                                    
                                    <Link 
                                        href={link} 
                                        target="_blank">
                                    <ReadMore>Read more</ReadMore>
                                    </Link>
                                    
                                    </ArticleText>
                                </Article>
                            ))

                        }
                    
                        
                </Wrapper>
                
            </Layout>
            
        </ContainerBlog>
        <Footer />
        
        
        
    </>


)

export default Blog;