import React from "react";

import { ListGroup } from "react-bootstrap";

const Interests = () => {
  return <section id="interests">
    <div className="container">
    <h1>Interests</h1>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Interests;