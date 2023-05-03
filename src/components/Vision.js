import React from "react";
import { Container,Row } from "react-bootstrap";

const Vision = () => {
  return (
    <Container className="vision " >
      <Row className=" mt-4" >
        <h2 className=" font-bold text-5xl mt-1 smtext-5xl text-[gray] capitalize font-[Roboto Slab]" >Our Vision</h2>

        <p style={{fontSize:'25px'}}>
        Our vision is to inspire our employees to be the best they can be. In future, we are overseeing expansion in more cities and new divisions with new clients to maximize the growth opportunities for our people.
        </p>
        {/* <br /> */}
        <p>Our Mission is to be the pre-eminent face to face marketing organization in world wide.</p>
        <p className=" sm:text-4xl text-[gray] " >
          Have to open up more branches in all over india and wish to achieve
          bigger than this.
        </p>
      </Row>
    </Container>
  );
};

export default Vision;
