import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Education = () => {
  return <section id="education">
    <div className="container">
    <Title>Education</Title>
    <ListGroup variant="flush">
    <ListGroup.Item>  <Icon.BookOpen size={16} /> Bachelor degree of Informatics, Brawijaya University </ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Education;