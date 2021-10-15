import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import Image from 'next/image'
import WU from '../public/WU.png'
import WBS from '../public/WBS.png'
import SGH from '../public/SGH.jpeg'
import Flag from 'react-world-flags'
import Python from '../public/python.svg'
import JS from '../public/javascript.svg'
import ReactIcon from '../public/react.svg'
import NodeIcon from '../public/nodejs.svg'

const Container = styled.div`
    
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 480px) {
        flex-direction: column;

    }
    
    
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        
        width: 100%;
        flex-direction: column;

    }
`

const Left = styled.div`
    /* background-color: #d3deeb; */
    
    padding: 10px;
    margin-left: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media only screen and (max-width: 480px) {
        width: 95%;
        margin: 4px;
        padding: 2px;

    }
    
`

const Right = styled.div`
    background-color: #dfc6ee;
    opacity: 0.9;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    width: 30% auto;
    max-height: 100vh;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
        width: 95%;
        height: 100%;
        margin: 10px;
        padding: 2px;
        padding-bottom: 10px;
        max-height: 200vh;

    }
    

`
const RightInfo = styled.div`
    display: flex;
    align-items: center;
    
    
`
const LangSection = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        
        

    }
    
    
`
const SpeakLang = styled.div`
    display: flex;
    flex-direction: column;
`
const WriteLang = styled.div`
    display: flex;
    flex-direction: column;
`

const FlagContainer = styled.div`
    margin-right: 20px;
    
    
`

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 25px;
    
`


const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width: 480px) {
        font-size: 50px;

    }
`
const Subtitle = styled.span`
    font-size: 24px;
    font-weight: 300;
    color: #333;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 20px;

    }
`
const Desc = styled.p`
    width: 90%;
    line-height: 27px;
    font-size: 22px;
    font-weight: 300;
    color: black;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 20px;

    }
`

const Button = styled.button`
    width: 180px;
    border: none;
    padding: 15px 20px;
    background-color: #4151e6;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`


const Feature = () => {
    return (
        <Container id="feature">
            <Wrapper>
            <Left>
                <Title>
                    <b>never</b> stop learning.<br/>
                </Title>
                {/* <Subtitle>About Me</Subtitle> */}
                <Desc>I am digitizing the Payments and Remittance sector in Europe. I am a seasoned (14+ years) <b>Senior Manager in Banking & Finance industry. As a Head of Sales and Integrations at Western Union (NYSE: WU)</b>, I sell and integrate WU payments platform to Financial Institutions across EEA countries.
                </Desc>
                <Desc>My current role is spanning from contract negotiations, Business and Compliance requirements set (AMLD, PSD2, GDPR, MIFID) through solution design in a highly regulated financial industry.
                Previously I was responsible for WU digital expansion and development of WU App and westernunion.com. I was integrating new, local payment methods, improving the customer onboarding and verification process. I held various Business, Operations and Compliance roles in ABN Amro Bank, Royal Bank of Scotland, State Street Bank and Western Union.
                </Desc>
                <Desc>
                It all begun with Amstrad CPC 464 in the early 90s. Thanks to my father (Computer Scientist), I became passionate about Computer Science (programming and networking), and I still develop my passion for code, combining it with my professional path.
                </Desc>
                <Desc>I am particularly interested in <b>Artificial Intelligence adoption across Financial Industry.</b></Desc>
                <Button>Download CV</Button>
            </Left>
            <Right>
                
                <Subtitle><h3>Current Role</h3></Subtitle>
                <RightInfo>
                    <IconContainer>
                        <Image src={WU}/>
                    </IconContainer>
                    <Desc>Head of Sales & Integrations, Financial Institutions</Desc>

                </RightInfo>
                
                <Subtitle><h3>Education</h3></Subtitle>
                <RightInfo>
                    <IconContainer>
                        <Image src={WBS}/>
                    </IconContainer>
                    <Desc>MBA, Warwick Business School (2021, with Merit)</Desc>

                </RightInfo>
                <RightInfo>
                    <IconContainer>
                        <Image src={SGH}/>
                    </IconContainer>
                    <Desc>M.Sc., Banking & Finance, Warsaw School of Economics (2009)</Desc>

                </RightInfo>
                
                
                <LangSection>
                    <SpeakLang>
                    <Subtitle><h3>Languages</h3></Subtitle>
                        <RightInfo>
                                    <FlagContainer><Flag code="pl" height="25"/></FlagContainer>
                                    <FlagContainer><Flag code="gb" height="25"/></FlagContainer>
                                    <FlagContainer><Flag code="fr" height="25"/></FlagContainer>
                                    <FlagContainer><Flag code="es" height="25"/></FlagContainer>
                        </RightInfo>
                    </SpeakLang>
                    <WriteLang>
                    <Subtitle><h3>Stack in use</h3></Subtitle>
                        <RightInfo>
                            <IconContainer>
                                <Image src={Python}/>
                            </IconContainer>
                            <IconContainer>
                                <Image src={JS}/>
                            </IconContainer>
                            <IconContainer>
                                <Image src={ReactIcon}/>
                            </IconContainer>
                            <IconContainer>
                                <Image src={NodeIcon}/>
                            </IconContainer>
                        </RightInfo>
                    </WriteLang>
                </LangSection>
                   
            </Right>
            <AnimatedShapes />
        </Wrapper>
        </Container>
    )
}

export default Feature
