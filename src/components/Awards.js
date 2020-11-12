import React from "react";

import { ListGroup } from "react-bootstrap";

const Awards = () => {
  return <section id="awards">
    <div className="container">
    <h1>Awards</h1>
    <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Awards;