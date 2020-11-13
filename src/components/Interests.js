import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Interests = () => {
  return <section id="interests">
    <div className="container">
    <Title>Interests</Title>
    <ListGroup variant="flush">
    <ListGroup.Item>  <Icon.Film size={12} /> Action, Romcom, Anime, Marvel Movie list</ListGroup.Item>
    <ListGroup.Item>  <Icon.Music size={12} /> Sobat Ambyar Playlist, TOP Indo Spotify Playlist, sometime K-POP wkwk</ListGroup.Item>
    <ListGroup.Item>  <Icon.Play size={12} /> RPG Game</ListGroup.Item>
    <ListGroup.Item>  <Icon.DollarSign size={12} /> Cuan Cuan</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Interests;