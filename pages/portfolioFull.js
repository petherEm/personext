import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";
import styled from "styled-components";
import { projects } from "../profile";
import { challengeInQ1 } from "../challengeq1";

const Container = styled.div`
  overflow: hidden;
`;

const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    height: auto;
  }

  
`;
const Intro = styled.div`
  width: 80%;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    width: 90%;
    font-size: 18px;
  }
`;

const Top = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Title = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const PortfolioList = styled.div``;

const PortfolioItem = styled.div`
  -webkit-box-shadow: 5px 5px 15px 5px #f3efef;
  box-shadow: 5px 5px 15px 5px #f3efef;
  width: 320px;
  height: auto;
  border-radius: 20px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 90%;
    margin: 5px 10px;
  }
`;
const PortfolioInfo = styled.div`
  background-color: white;
  height: 20%;
  width: 100%;
  z-index: 99;
`;

const PortfolioInfoChallenge = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  height: 20%;
  width: 100%;
  z-index: 99;
`;


const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: blue;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const ItemTitleChallenge = styled.h3`
  
  font-size: 18px;
  font-weight: bold;
  color: crimson;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const ChallengeNumber = styled.h3`
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: crimson;
  font-size: 18px;
  font-weight: bold;


`

const PortfolioImg = styled.img`
  width: 100%;
  /* max-height: 200px; */
  height: 200px;
  /* height: 50%; */
  object-fit: cover;
`;

const PortfolioDesc = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: black;
  margin: 10px;
  height: 30%;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const PortfolioTech = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: blue;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const PortfolioFull = () => (
  <Container>
    <Layout>
      <ContainerBlog>
        <Title>My Dev Portfolio</Title>
        <Wrapper>
          <Intro>
            Hi there, check and see how I am progressing with my Full Stack
            journey and engaging with different Web Dev projects. Below, my
            training ideas and some inspirational projects from the great
            tutors. I am incredibly thankful to {" "}
            <strong>
              Brad Traversy (Traversy Media), LamaDev, FaztCode and PapaReact.
            </strong>
          </Intro>
          <Intro>
            I am currently undertaking <strong>"50 projects in Q1" challenge</strong> to master
            my VanillaJS, React and Python skills.{" "}
            <Link href="#challenge"><strong style={{ cursor: 'pointer', color: 'crimson'}}>Follow my progress here.</strong></Link>
          </Intro>
          <Top>
            {projects.map(({ name, content, image, technology, link }, id) => (
              <a href={link} style={{ textDecoration: "none" }} target="_blank">
                <PortfolioItem key={id}>
                  <PortfolioInfo>
                    <ItemTitle>{name}</ItemTitle>
                  </PortfolioInfo>

                  <PortfolioImg src={image}></PortfolioImg>

                  <PortfolioDesc>
                    {content}
                    <PortfolioTech>{technology}</PortfolioTech>
                  </PortfolioDesc>
                </PortfolioItem>
              </a>
            ))}
          </Top>
          <Intro>
            <Title>50 Projects in Q1</Title>
          </Intro>
          <Top id="challenge">
            {challengeInQ1.map(({ day, name, content, image, technology, link }, id) => (
              <a href={link} style={{ textDecoration: "none" }} target="_blank">
                <PortfolioItem key={id}>
                  <PortfolioInfoChallenge>
                    <ChallengeNumber>Day: {day}</ChallengeNumber>
                    <ItemTitleChallenge>{name}</ItemTitleChallenge>
                  </PortfolioInfoChallenge>

                  <PortfolioImg src={image}></PortfolioImg>

                  <PortfolioDesc>
                    {content}
                    <PortfolioTech>{technology}</PortfolioTech>
                  </PortfolioDesc>
                </PortfolioItem>
              </a>
            ))}
          </Top>
        </Wrapper>
      </ContainerBlog>
    </Layout>
    <Footer />
  </Container>
);

export default PortfolioFull;
