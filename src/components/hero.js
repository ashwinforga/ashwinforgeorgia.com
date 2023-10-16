import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          {/* <span className="usa-hero__heading--alt">Let's get things done.</span> */}
          Let's get things done. 👋
        </h2>
        <p>
          I'm Ashwin Ramaswami. Let's work together to transform our future on the issues that really matter in Georgia's 48th state senate district.
        </p>
        <a className="usa-button" href="/">
          Join Us
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
