import React, { useEffect } from "react";
import AOS from "aos";
import $ from "jquery";

import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import { Col, Container, Row } from "react-bootstrap";
import Education from "./components/Education";



const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Container fluid>
    <Row>
        <Col xs={4} id="sidebar-wrapper">      
          <Sidebar />
        </Col>
        <Col  xs={8} id="page-content-wrapper">
        <main>
              <About />
              <Experience />
              <Education />
        </main>
        </Col> 
    </Row>

</Container>
    
  );
};

export default App;
