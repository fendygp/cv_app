import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import userImg from "../assets/img/man.png";


const Sidebar = () => {
 
  const scrollTo = id => e => {
    e.preventDefault();
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };

  return (    
    <div className="container">
            <Nav className="col-md-4 sidebar">
            
              <Image src={userImg} 
              href="#About"
              onClick={scrollTo("home")}
              className="imageRound"
              />
             <Nav.Item>
                    <Link
                        href="#home"
                        className="sidebar-link"
                        activeClass="active"
                        onClick={scrollTo("About")}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        ABOUT
                    </Link>
             </Nav.Item>
             <Nav.Item>
                 <Link
                        href="#"
                        className="sidebar-link"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        EXPERIENCE
                    </Link>
             </Nav.Item>
             <Nav.Item>
                 <Link
                        href="#"
                        className="sidebar-link"
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        EDUCATION
                    </Link>
             </Nav.Item>
             <Nav.Item>
                 <Link
                        href="#"
                        className="sidebar-link"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        SKILLS
                    </Link>
             </Nav.Item>
             <Nav.Item>
                 <Link
                        href="#"
                        className="sidebar-link"
                        activeClass="active"
                        to="interests"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        INTERESTS
                    </Link>
             </Nav.Item>
             <Nav.Item>
                 <Link
                        href="#"
                        className="sidebar-link"
                        activeClass="active"
                        to="awards"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                    >
                        AWARDS
                    </Link>
             </Nav.Item>
            </Nav>
            </div>
  );
};

export default Sidebar;
