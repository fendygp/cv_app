import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;


const Experience = () => {
  return <section id="experience">
    <div className="container">
    <Title>Experience</Title>
    <ListGroup variant="flush">
      <ListGroup.Item>  <Icon.Bookmark size={12} /> 2014-2015 Full Stack Developer on Raion Studio</ListGroup.Item>
      <ListGroup.Item><Icon.Bookmark size={12} /> 2016 Freelance</ListGroup.Item>
      <ListGroup.Item><Icon.Bookmark size={12} /> 2017-Now Developer API on BRI</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Experience;