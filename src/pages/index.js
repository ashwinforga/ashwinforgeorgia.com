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

const Issue = ({ title, children }) => (
<li className="usa-card tablet:grid-col-4">
              <div className="usa-card__container">
                <div className="usa-card__header">
                  <h2 className="usa-card__heading">{title}</h2>
                </div>
                <div className="usa-card__body">
                  <p>
                  {children}
                  </p>
                </div>
                {/* <div className="usa-card__footer">
                  <a href="/issues" className="usa-button">Learn More</a>
                </div> */}
              </div>
            </li>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
            <strong>I'm Ashwin Ramaswami, and I'm running to be your next State Senator</strong> for the 48th District.
          </p>
          <p>
          <strong>It's time for the next generation of leadership</strong> to put young people's futures front and center.
          </p>
          <p>
          Let's make transformative investments in public safety, education, technology, transit, and government capacity. <strong>Let's imagine a better future together!</strong>
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
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Why now?
          </h2>
          <img src={thind} />
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            <ul>
              <li><strong>I am from Johns Creek, GA.</strong> I've worked to make positive change in my community through nonprofits, religious communities, technology startups, and law and policy — all thanks to the wonderful people and resources in my hometown. It's time for me to pay it forward and help advocate for the futures of young people — and everyone — in our community.</li>
              <li><strong>We have a once-in-a-generation opportunity</strong> to make transformative investments in our communities. Did you know that the State of Georgia now has $10.7 billion in surplus cash? We should invest it wisely in our future.</li>
              <li><strong>Our current State Senator, Shawn Still, has been indicted</strong> for trying to overturn the 2020 election results. This is a chance to stand up for democracy and show this was unacceptable. I'm committed to accepting the election results and the democratic process.</li>
              <li><strong>We need diverse leadership</strong> that reflects our communities. I would be the first Hindu American to be a Georgia state legislator and first South Asian to represent this district. I'd be the youngest member of the State Senate and the only State Senator with a computer science degree.</li>
              {/* TODO: check computer science claim */}
            </ul>
            <a className="usa-button" href="/about" style={{ marginLeft: "2em" }}>
              Meet Ashwin
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-12">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Issues<br />
          </h2>
        </div>
        <div className="tablet:grid-col-12">
          <ul className="usa-card-group">
            <Issue title="📈 Economy">Let's make Metro Atlanta a sustainable tech hub for the South by attracting investment and giving the best and brightest talent a reason to stay here.</Issue>
            <Issue title="📚 Education">Let's give all Georgians access to a quality education by paying teachers more, investing in <em>all</em> schools and community colleges, and giving our students a greater voice.</Issue>
            <Issue title="🛣️ Transit">Let's reduce traffic by investing in roads, sidewalks, and a safe public transit system, which is needed more than ever Metro Atlanta grows.</Issue>
            <Issue title="🚓 Public Safety">Let's be smarter at keeping our communities safe by training police, passing commonsense gun laws, and focusing on consumer protection.</Issue>
            {/* TODO: opioids? */}
            <Issue title="🏥 Healthcare">Let's lower costs and improve care for those who need it most by expanding Medicaid, lowering drug prices, and helping our healthcare workers.</Issue>
            <Issue title="👩🏾‍⚖️ Government">Let's build state and local government capacity by empowering workers with technology and ensuring they are paid competitive wages.</Issue>
          </ul>
          <div style={{textAlign: "center"}}>
          <a href="/issues" className="usa-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="usa-graphic-list usa-section why-not" style={{ paddingTop: 0 }}>  {/* usa-section--dark" */}
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
