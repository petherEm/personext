import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { init } from 'ityped'
import styled from 'styled-components'
import Image from 'next/image'
import Piotr from '../public/mecasual.png'
import AnimatedShapes from './AnimatedShapes'
import Flag from 'react-world-flags'



const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 50px;

    @media only screen and (max-width: 480px) {
        
        flex-direction: column;
        padding: 20px 10px;

    }
    
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 480px) {
        width: 95%;
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    width: 60%;
    font-size: 50px;
    font-weight: 300;
    @media only screen and (max-width: 480px) {
        width: 80%;
        font-size: 40px;

    }
`;

const DescAnimated = styled.p`
    width: 60%;
    height: 50px;
    font-size: 24px;
    color: #4151e6;
    margin-top: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 22px;
        width: 80%;

    }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 24px;
    margin-top: 20px;
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        width: 80%;

    }

`;
const Button = styled.button`
    width: 200px;
    height: 70px;
    padding: 15px;
    background-color: #4151e6;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        display: none;

    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
    margin-top: 20px;

`;

const ContactText = styled.span`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Right = styled.div`
    /* margin-top: 70px; */
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    @media only screen and (max-width: 480px) {
        width: 90%;
        display: flex;
        justify-content: right;
        
    
    }
`;

const About = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ['Senior B2B Tech Sales', 'Full Stack Developer', 'Warwick MBA alumnus', 'Pythonista']
        });
    }, [])

    return (
        <Container>
            <Left>
                <Title>Hi, I am <b>Piotr.</b></Title>
                <DescAnimated ref={textRef}></DescAnimated>
                <Info>
                    <Link href="/#feature">
                        <Button>Learn More</Button>
                    </Link>
                    
                    {/* <Contact>
                        <Phone>Spoken languages</Phone>
                        <ContactText>
                            <Flag code="pl" height="30"/>
                            <Flag code="gb" height="30"/>
                            <Flag code="fr" height="30"/>
                            <Flag code="es" height="30"/>

                        </ContactText>
                        <Phone>Tech in use</Phone>
                        <ContactText>For any questions or concerns</ContactText>
                    </Contact> */}
                </Info>
            </Left>
            <Right>
                    
                        <Image src={Piotr} width={500} height={680} />
                    
            </Right>
            {/* <AnimatedShapes /> */}
            
            
        </Container>
    )
}

export default About
