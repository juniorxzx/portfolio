"use client";

import { useState } from "react";
import { Container, Content, ContentBody, ContentHeader, GroupHabilities, GroupLabel, IconDownload, IconSocial, ImageProfile, ItemHab, Main, RBody, RHeading, Resume, Title, TitleResume } from "./page.styled";
import Github from '@/assets/icons/github.svg'
import Linkedin from '@/assets/icons/linkedin.svg'
import { IoCloudDownloadOutline } from "react-icons/io5";
import Me from '@/assets/icons/me.svg'
import { ContainerAnimation, ItemAnimation } from "@/assets/animations/framer-list";
import Header from "@/components/header/header";
export default function Home() {

  const habilities = [
    'React Js',
    'Next Js',
    'Framer',
    'Typescript',
    'Javascript',
    'TailwindCSS',
    'SASS',
    'Nest Js',
    '.Net',
    'Kotlin',
    'React Native',
    'Swift'
  ]
  return (
    <Main>
      <Container>
        <Content>
          <ContentHeader initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>

            <Header />
          </ContentHeader>
          <ContentBody>
            <Title></Title>
          </ContentBody>
        </Content>

        <Resume>
          <RHeading>
            <IconSocial src={Github} alt=""
              initial={{ top: -100, left: -200 }}
              animate={{ top: 0, left: 20 }}
            />
            <IconSocial src={Linkedin} alt=""
              initial={{ top: -100, right: -200 }}
              animate={{ top: 0, right: 20 }}
            />
            <IconDownload
              initial={{ bottom: -100, right: -200 }}
              animate={{ bottom: 50, right: 23 }}>
              <IoCloudDownloadOutline size={16} />
              <span>CV</span>
            </IconDownload>
            <ImageProfile src={Me} alt="" width={150} height={150} />
            <TitleResume
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >Software Engineer</TitleResume>
          </RHeading>
          <RBody variants={ContainerAnimation}
            initial="hidden"
            animate="visible">
            <GroupLabel variants={ItemAnimation}>
              <span>Name</span>
              <span>Alexandre Rodrigues Júnior</span>
            </GroupLabel>
            <GroupLabel variants={ItemAnimation}>
              <span>Email</span>
              <span>al860270@gmail.com</span>
            </GroupLabel>

            <GroupHabilities variants={ContainerAnimation}
              initial="hidden"
              animate="visible">
              {habilities.map((hab, index) => (
                <ItemHab key={index} variants={ItemAnimation}>
                  {hab}
                </ItemHab>
              ))}
            </GroupHabilities>

          </RBody>
        </Resume>
      </Container>
    </Main>
  );
}
