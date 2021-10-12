import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { Mail, LinkedIn, GitHub, Instagram } from '@material-ui/icons'

const Wrapper = styled.div`
    background-color: #333;
    color: white;
    width: 100%;
    height: 80px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
        padding: 5px 10px;
       

    }
    
`
const RightWrapper = styled.div`
    width: 50%;
    display: flex;
    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
`
const LeftWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;

    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
    
`
const Signature = styled.div`
    float: left;
    font-size: 22px;
    font-weight: 200;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        font-size: 15px;
    }
`

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 22px;
    font-weight: bold;
    color: white;
    list-style: none;
    cursor: pointer;

`

const Footer = () => {
    return (
        <Wrapper>
            <LeftWrapper>
            <Link href="http://www.piotrmaciejewski.com">
                <Signature>Created by <b> Piotr Maciejewski</b></Signature>
            </Link>
            </LeftWrapper>
            <RightWrapper>
                    <Link href="/">
                        <MenuItem><LinkedIn style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem><GitHub style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem><Instagram style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
            </RightWrapper>
                    
            
        </Wrapper>
    )
}

export default Footer
