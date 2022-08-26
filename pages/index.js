import { Head } from "next/head";
import Layout from "../components/Layout";
import styled, { css } from "styled-components";
import About from "../components/About";
import Feature from "../components/Feature";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ContainerAbout = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
`;

const ContainerFeature = styled.div`
  max-height: auto;
  overflow: hidden;
  position: relative;
`;

const ContainerPortfolio = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
`;

const ContainerContact = styled.div`
  height: auto;

  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 480px) {
  }
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: circle(45.7% at 43% 88%);

  background-color: blueviolet;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  background-color: lightblue;
`;

const Index = () => (
  <>
    <ContainerAbout>
      <Layout>
        <About />
        {/* <IntroShape /> */}
      </Layout>
    </ContainerAbout>
    <ContainerFeature>
      <Feature />
      {/* <FeatureShape /> */}
    </ContainerFeature>
    <ContainerPortfolio id="service">
      <Service />
    </ContainerPortfolio>
    <ContainerContact>
      <Contact />
      <Footer />
    </ContainerContact>
  </>
);

export default Index;
