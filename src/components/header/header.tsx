"use client";

import React, { useContext } from "react";
import {
  HeaderStyled,
  Item,
  Items,
  Logo,
  Nav,
} from "./header.styled";
import { ContainerAnimation, ItemAnimation } from "@/assets/animations/framer-list";
import { GlobalContext } from "@/context/GlobalContext";

const Header = () => {
  const { option, setOption } = useContext(GlobalContext)

  const checkOption = (value: string) => {
    console.log(value)
    setOption((prevOption: string) => {
      if (prevOption === value) {
        return '';
      } else {
        return value;
      }
    });
  };

  return (
    <HeaderStyled variants={ContainerAnimation} initial="hidden"
      animate="visible">
      <Logo variants={ItemAnimation}>Web Portfolio</Logo>
      <Nav>
        <Items variants={ContainerAnimation} initial="hidden"
          animate="visible">
          <Item variants={ItemAnimation}
            onClick={() => checkOption('About Me')}
            className={option === 'About Me' ? 'color' : ''}>
            About Me
          </Item>
          <Item variants={ItemAnimation}
            onClick={() => checkOption('Certificates')}
            className={option === 'Certificates' ? 'color' : ''}
          >
            Certificates
          </Item>
          <Item variants={ItemAnimation}
            onClick={() => checkOption('Projects')}
            className={option === 'Projects' ? 'color' : ''}
          >
            Projects
          </Item>
        </Items>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
