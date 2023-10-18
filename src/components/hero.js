import React from 'react';
// import img from "../images/solo-wide.jpg";
import img from "../images/writing-club.jpg";
// import img from "../images/thind.jpg";

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Callout = (props) => (
  <div {...props}>
    <div className="usa-hero__callout">
      <h2 className="usa-hero__heading">
        Let's get things done. 👋
      </h2>
      <p>
        I'm Ashwin Ramaswami. Let's work together on the issues that really matter in Georgia's 48th state senate district.
      </p>
      <a className="usa-button" href="/">
        Join Us
      </a>
    </div>
  </div>
)

const Hero = () => (
  <>
    <section className="usa-hero" style={{ backgroundImage: `url(${img})` }}>
      <div className="grid-container">
        <Callout className="hidden-mobile" />
      </div>
    </section>
    <Callout className="hidden-desktop" />
  </>
);

export default Hero;
