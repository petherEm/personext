import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Mail, LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import Burger from "./Burger";

const NavBarContainer = styled.div`
  width: 100%;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
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
`;

const Left = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 70%;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 16px;

  @media only screen and (max-width: 480px) {
  }
`;

const Menu = styled.ul`
  display: flex;

  @media only screen and (max-width: 480px) {
    display: none;
  }

  a {
    text-decoration: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  list-style: none;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const MenuItemChallenge = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #bd3b14;
  list-style: none;
  border: 1px solid red;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #4151e6;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => (
  <NavBarContainer>
    <Wrapper>
      <Left>
        <Link href="/">
          <Logo>
            <Image src="/logo.svg" width="80" height="80" alt="logo" />
          </Logo>
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
          {/* <Link href="/#service">
                        <MenuItemChallenge>Challenge</MenuItemChallenge>
                    </Link> */}
          <a href="https://www.piotrdev.com" target="_blank">
            <MenuItem>Blog</MenuItem>
          </a>
          <Link href="/#contact">
            <MenuItem>Contact</MenuItem>
          </Link>
        </Menu>
      </Left>
      <Right>
        <Link
          href="https://www.linkedin.com/in/piotrek-maciejewski"
          target="_blank"
        >
          <MenuItem>
            <LinkedIn style={({ color: "#0f20b3" }, { fontSize: "25px" })} />
          </MenuItem>
        </Link>
        <Link href="https://github.com/petherEm" target="_blank">
          <MenuItem>
            <GitHub style={({ color: "#0f20b3" }, { fontSize: "25px" })} />
          </MenuItem>
        </Link>
        {/* <Link href="https://instagram.com" target="_blank">
                        <MenuItem><Instagram style={{color: '#0f20b3'}, {fontSize: '25px'}}/></MenuItem>
                    </Link> */}
        <Burger />
      </Right>
    </Wrapper>
  </NavBarContainer>
);

export default Navbar;
