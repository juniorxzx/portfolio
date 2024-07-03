import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export const HeaderStyled = styled(motion.header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  width: 100%;
`;

export const Logo = styled(motion.h1)`
  text-transform: uppercase;
  font-size: clamp(24px, 32px, 40px);
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Nav = styled(motion.nav)``;

export const Items = styled(motion.ul)`
  display: flex;
  gap: 2rem;

  & > .color{
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Item = styled(motion.li)`
  text-transform: uppercase;
  font-size: clamp(16px, 24px, 32px);
  cursor: pointer;
  &:hover{
    color: ${({ theme }) => theme.colors.primaryColor}
  }
`;

