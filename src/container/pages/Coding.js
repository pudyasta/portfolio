import React from "react";
import { jumbotron } from "../assets";
import { Home, Experience, Expertice, Footer } from "../";

const Coding = () => {
  return (
    <>
      <Home
        heading="Become a Programmer"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
        background={jumbotron}
      />
      <Experience />
      <Expertice />
      <Footer
        to="github.com/pudyasta"
        text="Check my awesome projects on my own Github"
        buttonText="Check"
      />
    </>
  );
};

export default Coding;
