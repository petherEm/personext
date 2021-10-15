import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { projects } from '../profile'


const ServiceContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 480px) {
        height: auto;
        padding-bottom: 50px;
        
        
    }
    
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        height: auto;
        
    }
    
    
`

const Top = styled.div`
    height: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 480px) {
        
        
    }
    
`

const Bottom = styled.div`
    margin-top: 40px;
    height: 10vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    
    @media only screen and (max-width: 480px) {
        

    }

`

const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    @media only screen and (max-width: 480px) {
        font-size: 30px;

    }

`
const PortfolioList = styled.div`


`

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

`
const PortfolioInfo = styled.div`
    background-color: white;
    height: 20%;
    width: 100%;
    z-index: 99;
`
const ItemTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: blue;
    text-align: center;
    @media only screen and (max-width: 480px) {
        font-size: 16px;

    }
    
`

const PortfolioImg = styled.img`
    width: 100%;
    max-height: 200px;
    height: 50%;
    object-fit: cover;
    
    
`

const PortfolioDesc = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: black;
    margin: 10px;
    height: 30%;
    @media only screen and (max-width: 480px) {
        font-size: 14px;

    }

`
const PortfolioTech = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: blue;
    @media only screen and (max-width: 480px) {
        font-size: 12px;

    }
    
`


const Button = styled.button`
    
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: #4151e6;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    
    @media only screen and (max-width: 480px) {
        

    }
`

const Service = () => {
    return (
        <>
        <ServiceContainer id="service">
            <Title>My Dev Portfolio</Title>
            <Wrapper>
                <Top>
                    {
                        projects.map(({name, content, image, technology, link},id) => (
                            <a href={link} style={{textDecoration: 'none'}} target="_blank">
                                <PortfolioItem key={id}>
                                    <PortfolioInfo>
                                        <ItemTitle>{name}</ItemTitle>
                                    </PortfolioInfo>
                                    
                                        <PortfolioImg src={image}></PortfolioImg>
                                   
                                    
                                    <PortfolioDesc>
                                        {content} 
                                        <PortfolioTech>
                                            {technology}
                                        </PortfolioTech>
                                        
                                    </PortfolioDesc>
                                </PortfolioItem>
                            </a>
                        ))
                    }
                </Top>
                
                <Bottom>
                    <Link href="/portfolioFull">
                        <Button>See More</Button>
                    </Link>
                </Bottom>
            </Wrapper>
            
            
        </ServiceContainer>
        
        </>
    )
}

export default Service
