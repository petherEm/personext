import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Mail, LinkedIn, GitHub, Instagram } from '@material-ui/icons'



const NavBarContainer = styled.div`
    width: 100%;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`
const Wrapper = styled.div`
    
    width: 80%;
    height: 40px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

    @media only screen and (max-width: 480px) {
        width: 95%;
        padding: 5px 10px;
        

    }
    
`

const Left = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    

`

const Right = styled.div`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 480px) {
        width: 70%;

    }
    

`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: crimson;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        font-size: 30px;

    }
    
`

const Menu = styled.ul`
    display: flex;

    @media only screen and (max-width: 480px) {
        display: none;

    }
    

`

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 22px;
    font-weight: bold;
    color: black;
    list-style: none;
    cursor: pointer;

`

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: #4151e6;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`


const Navbar = () => (
    
    <NavBarContainer>
        <Wrapper>
            <Left>
                <Link href="/">
                    <Logo>&lt;PM&gt;</Logo>
                </Link>
                
                <Menu>
                    <Link href="/">
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link href="/#feature">
                        <MenuItem>About</MenuItem>
                    </Link>
                    <Link href="/#service">
                        <MenuItem>Portfolio</MenuItem>
                    </Link>
                    <Link href="/blog">
                        <MenuItem>Blog</MenuItem>
                    </Link>
                    
                </Menu>
            </Left>
            <Right>
                    <Link href="/">
                        <MenuItem><LinkedIn style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem><GitHub style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
                    <Link href="/">
                        <MenuItem><Instagram style={{color: '#0f20b3'}, {fontSize: '30px'}}/></MenuItem>
                    </Link>
            </Right>
           
        </Wrapper>
        
    </NavBarContainer>
    
)

export default Navbar;
