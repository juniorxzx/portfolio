import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  gap: 1rem;
`;

// Resume 
export const Resume = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  height: 100%;
  gap: 1rem;
  padding: 1.5rem;
  max-width: 300px;
  width: 100%;
  border-radius: 24px;
  border:2px solid ${({ theme }) => theme.colors.primaryColor};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
// Resume - Head
export const RHeading = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: 200px;
    width: 100%;
    position: relative;
`;
export const IconSocial = styled(motion(Image))`
  position: absolute;
  cursor: pointer;
`;
export const ImageProfile = styled(motion(Image))`
  border-radius: 30px;
`;
export const TitleResume = styled(motion.h2)`
  text-align: center;
`;
export const IconDownload = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 12px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  & > span{
    font-weight: 800;
  }
`;
// Resume - Body
export const RBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;
export const GroupLabel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  
  
  &> :nth-child(1){
    color:${({ theme }) => theme.colors.primaryColor};
  }
`
export const GroupHabilities = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;

`;
export const ItemHab = styled(motion.div)`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  padding: 0.5rem 1rem;
  
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

// Content
export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  height: 100%;
  border-radius: 24px;
  padding: 1.5rem;
`;

export const ContentHeader = styled(motion.div)`
  display: flex;
  width: 100%;
`;

export const ContentBody = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Title = styled(motion.h2)`

`;