"use client";

import React, { useState } from "react";
import { Container, Item } from "./menu.styled";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Container onClick={() => setOpen(!open)}>
      <Item
        animate={{
          transform: open
            ? "translateY(10px)  rotateZ(45deg)"
            : "translateZ(0)",
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      ></Item>
      <Item animate={{ display: open ? "none" : "" }}></Item>
      <Item
        animate={{
          transform: open
            ? "translateY(-12px) rotateZ(-45deg)"
            : "translateZ(0)",
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      ></Item>
    </Container>
  );
};

export default Menu;
