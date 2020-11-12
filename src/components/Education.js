import React from "react";

import { ListGroup } from "react-bootstrap";

const Education = () => {
  return <section id="education">
    <div className="container">
    <h1>Education</h1>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Education;