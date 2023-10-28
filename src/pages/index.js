import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import img from "../images/solo-wide.jpg";
// import img from "../images/writing-club.jpg";
import thind from "../images/thind.jpg";
import img from "../images/headshot3.jpeg";
import headshot1 from "../images/headshot1.jpeg";
import capitol from "../images/capitol.jpeg";
import circle from 'uswds/img/circle-124.png';
import ashwinMvp from '../images/ashwin-mvp-cropped.jpg';
import suspended from '../images/suspended.png';
import still2 from '../images/still 2.png';
import headshot from '../images/headshot-square.jpeg';
import still from '../images/still.jpeg';
import leafblowers from '../images/leaf blowers.jpeg';
import jif from '../images/jif-fellows.jpeg';
import sossa from '../images/sossa.jpg';

const Callout = (props) => (
  <div {...props}>
    <div className="usa-hero__callout">
      {/* <h2 className="usa-hero__heading">
        Let's get things done. 👋
      </h2>
      <p>
        I'm Ashwin Ramaswami. Let's work together on the issues that really matter in Georgia's 48th state senate district.
      </p>
      <a className="usa-button" href="/">
        Join Us
      </a> */}
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <section className="usa-hero" style={{ backgroundImage: `url(${img})` }}>
      <div className="grid-container">
        <Callout className="hidden-mobile" />
      </div>
    </section> */}
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-6">
          <img src={headshot1} />
        </div>
        <div className="tablet:grid-col-6 home-main">
          <h1 className="">
            Let's get things done. 👋
          </h1>
          <p>
            I'm Ashwin Ramaswami. Let's work together on the issues that really matter in Georgia's 48th state senate district.
          </p>
          <p>
            <strong>Let's make transformative investments</strong> in technology, education, transit, public safety, and government capacity. Let's imagine a better future together!
          </p>
          {/* <div className="grid-row grid-gap"> */}
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Name" /> <br />
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Email" /> <br />
          <input type="text" className="usa-input tablet:grid-col-6" placeholder="Zip" /> <br /> <br />
          <a className="usa-button" href="/">
            Join Us
          </a>
          {/* </div> */}
        </div>
      </div>
      <hr />
    {/* <Callout className="hidden-desktop" /> */}
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            {/* About<br /> */}
            <img src={thind} />
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            <ul>
              <li><strong>Ashwin is from Johns Creek, GA</strong> and has experience in software engineering, entrepreneurship, investing, law, and policy.</li>
              <li><strong>Incumbent Shawn Still got indicted</strong> for trying to overturn the 2020 election results, while I've worked on securing our elections since 2020.</li>
              <li><strong>Ashwin would be the first Hindu American to be a Georgia state legislator</strong> and first South Asian to represent this district.</li>
            </ul>
            <a className="usa-button" href="/about" style={{marginLeft: "2em"}}>
              Learn More
            </a>
          </p>
          {/* <p>
            We’re in a moment where politics is often devoid of substance and focused on show. Incumbent Shawn Still for the 48th state senate district has proved unfit for office, focusing on overturning the 2020 election results and gas-powered lawn mowers rather than the issues that affect our communities every day, such as education, jobs, healthcare costs, public safety, transportation, and government capacity.
          </p>
          <p>
            Increasingly, we are also facing bigger issues around technology, from education and ChatGPT/AI to children's safety on social media, while few in the state legislature actually have the tech experience to understand and address these issues.
          </p>
          <p>
            I'd be a Senator for all, as the . I look forward to bringing my experience in law and federal policy to help address issues in our state.
          </p> */}
        </div>
      </div>
    </section>
    <hr />
    <section className="usa-graphic-list usa-section why-not" style={{paddingTop: 0}}>  {/* usa-section--dark" */}
  <h1>Unlike Shawn Still, Ashwin works on the REAL issues.</h1>
  <h1>In 2020...</h1>
  <div className="grid-container">
    <div className="usa-graphic-list__row grid-row grid-gap">
      <div className="usa-media-block tablet:grid-col">
        <img className="usa-media-block__img" src={still} alt="Shawn Still" />
        <div className="usa-media-block__body">
          <h3 className="usa-graphic-list__heading">
            Shawn Still was trying to overturn the results of Georgia's election.
          </h3>
          <p>
            <img src={still2} />
          </p>
        </div>
      </div>
      <div className="usa-media-block tablet:grid-col">
        <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
        <div className="usa-media-block__body">
          <h3 className="usa-graphic-list__heading">
            Ashwin, as a federal employee, worked with Secretary of State Raffensperger's office to secure Georgia's elections.
          </h3>
          <p>
            <img src={ashwinMvp} />
          </p>
        </div>
      </div>
    </div>
    <hr />
    <h1>In 2022...</h1>
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={still} alt="Shawn Still" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shawn Still focused his legislative work on the LEAF Act, which would ban gas-powered leaf blowers.
            </h3>
            <p>
              <img src={leafblowers} />
              {/* TODO: add attribution - https://commons.wikimedia.org/wiki/File:Husqvarna_leaf_blowers.jpg */}
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Ashwin's research led Congress to introduce a bill on securing our small businesses through open source software.
            </h3>
            <p>
              <img src={sossa} />
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1>In 2023...</h1>
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={still} alt="Shawn Still" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shawn Still got indicted for impersonating a public officer and forgery in the first degree and is currently awaiting trial.
            </h3>
            <p>
              <img src={suspended} />
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              As an ABA Steiger Fellow, Ashwin helped Attorney General Chris Carr's Office of Consumer Protection sue Facebook over social media's harms on young children.
              {/* Ashwin helped provide state and local courts in three states with technologists to improve court access for people without lawyers. */}
            </h3>
            <p>
              <img src={jif} />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </Layout>
);

export default IndexPage;
