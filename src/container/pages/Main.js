import React from "react";
import { home as HomeBg } from "../assets";

import { Home, About, Footer } from "../";

export default function Main() {
  return (
    <>
      <Home
        heading="Pudyasta Satria P"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reprehenderit obcaecati corporis natus sapiente a!"
        background={HomeBg}
      />
      <About />
      <Footer
        to="instagram.com/pudyasta_satria"
        text="Connect with me on instagram"
        buttonText="Connect"
      />
    </>
  );
}
