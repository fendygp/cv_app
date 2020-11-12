import React from "react";

import styled from "styled-components";

import bgImg from "../assets/img/bg_home.jpg";

import { GitHub , Linkedin } from 'react-feather';

const Section = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${bgImg});

`;

const BgOverlay = styled.div`
  background: linear-gradient(33deg, #fff, #fff);
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #fff, #fff);
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: left;
  color: #1b5cce;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: #1b5cce;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-bottom: 10px;
  }
`;


const Icons = styled.h1`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.83;
  text-align: left;
  color: #1b5cce;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-bottom: 49px;
  }
`;



const About = () => {
  return (
    <Section id="about">
      <BgOverlay />
      <div className="container">
        <HomeTitle data-aos="zoom-in">
          Fendy Gusta Pradana
        </HomeTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          make it simple but significant.
        </SubTitle>
        <Icons
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
         <Linkedin size={20} fill="yes" stroke="none"/> <GitHub size={20} fill="yes" stroke="none"/>  
        </Icons>
      </div>
    </Section>
  );
};

export default About;
