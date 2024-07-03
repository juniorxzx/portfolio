import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;
  width: 25px;
`;

export const Item = styled(motion.span)`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textColor};
  border-radius: 12px;
`;
