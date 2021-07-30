import React from "react";
import AchievementImage from "../component/AchievementImage";
import { itdays, sitani } from "../assets";

const Achievement = () => {
  return (
    <>
      <AchievementImage
        heading="Finalist Web Development Competition Sriwijaya University 2020"
        paragraph="Sinau Tani or can be called Sitani is a courses website that was
              built for Web Development Competition in 2020. This website aims
              to educate people about Agriculture. Sitani covered three
              different sectors of Agriculture include farming, plantation, and
              hydroponic"
        to="sinautani.herokuapp.com"
        image={sitani}
      />
      <AchievementImage
        heading="3rd Place Web Design Competition
        IT Days Sanata Dharma University 2019"
        paragraph="The main idea of this website is to tell the public
        about the It Days event. I made this website with 
       one-page scroll technology which, I think it's the most 
       suitable technology for an event website."
        to="sinautani.herokuapp.com"
        image={itdays}
        direction="row-reverse"
      />
    </>
  );
};

export default Achievement;
