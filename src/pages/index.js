import React, { useCallback, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import img from "../images/solo-wide.jpg";
// import img from "../images/writing-club.jpg";
import signature from "../images/signature.jpg";
import democrats from "../images/democrats-cropped.jpeg";
import townHall from "../images/town-hall.jpeg";
import smileSquare from "../images/smile-square.jpg";
import sal from "../images/ashwin-sal.jpg";
import logo from "../images/ARLogo-full-color-white-text.png";
import cover from "../images/cover.png";
import capitol from "../images/ashwin-capitol.jpeg";
import circle from 'uswds/img/circle-124.png';
import ashwinMvp from '../images/ashwin-mvp-cropped.jpg';
import suspended from '../images/suspended.png';
import still2 from '../images/still 2.png';
import still from '../images/still.jpeg';
import Socials from "../components/socials";
import leafblowers from '../images/leaf blowers.jpeg';
import jif from '../images/jif-fellows.jpeg';
import sossa from '../images/sossa.jpg';
import lecture from '../images/ashwin-bv-lecture-cropped.jpg';
import { NavMobile } from '../components/nav';
import DonationPopup from '../components/donation-popup';

const Issue = ({ title, img, href, children }) => (
  <li className="usa-card tablet:grid-col-4 issue">
    <div className="usa-card__container">
      <div className="usa-card__header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.75 66.87" width="30" height="30"><g dataName="Layer 2"><g fill="#002C6D" dataName="Layer 7"><path d="M34.75 47.9 15.61 28.14l6.63-6.43 12 12.38L62.65 0l7.1 5.91-35 41.99z" class="icon-check_svg__checkmark"></path><path d="m63.72 24-7.64 9.21v1A23.47 23.47 0 1 1 42.8 13.06l6-7.26a32.63 32.63 0 1 0 15 18.45Z" class="icon-check_svg__circle"></path></g></g></svg>
        <a href={href}><h2 className="usa-card__heading">{title}</h2></a>
      </div>
    </div>
  </li>
);

const Endorsement = ({ title, name, img, alt }) => (
  <li className="usa-card tablet:grid-col-3 issue">
    <div className="usa-card__container">
      <div className="usa-card__header">
        <h4>{title}</h4>
        <h2 className="usa-card__heading">{name}</h2>
        {img && <img src={img} alt={alt} />}
      </div>
    </div>
  </li>
);

const HeroText = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const submitForm = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    let prefilledFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeXuJ4XYVvyTkBuhLmHtnBUD8h_s4YySNrkrQtT2haS839OMg/viewform?entry.1833137286=${encodeURIComponent(name)}&entry.128759263=${encodeURIComponent(email)}&entry.815752677=${encodeURIComponent(phone)}`

    try {
      // Open the form in a new tab
      window.open(prefilledFormUrl, "_blank").focus();

      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
    } catch (e) {
      setLoading(false);
      window.location.href = prefilledFormUrl;
    }
  }, [name, email, phone, loading, setName, setEmail, setPhone, setLoading]);

  return (<div className="hero-text" {...props}>
    <div className="form">
      <input type="text" className="usa-input tablet:grid-col-6" placeholder="Name*" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" className="usa-input tablet:grid-col-6" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" className="usa-input tablet:grid-col-6" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <a className="usa-button usa-button--outline" onClick={submitForm} disabled={loading}>
        Submit
      </a>
    </div>
    <div style={{ marginTop: "1rem" }}>
      <Socials />
    </div>
  </div>
  );
}

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="callout">
        <img src={logo} />
        <div className="">
          <HeroText />
        </div>
      </div>
    </div>
    <div className="image">
      <img src={cover} />
    </div>
  </section>
);

const WhyNot = () => (<section className="usa-graphic-list usa-section why-not" style={{ paddingTop: 0 }}>  {/* usa-section--dark" */}
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
        <img className="usa-media-block__img" src={smileSquare} alt="Ashwin Ramaswami" />
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
          <img className="usa-media-block__img" src={smileSquare} alt="Ashwin Ramaswami" />
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
          <img className="usa-media-block__img" src={smileSquare} alt="Ashwin Ramaswami" />
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
</section>);

const IndexPage = () => (
  <Layout className="index-page">
    <SEO title="Home" />
    <DonationPopup />
    <div className="hidden-desktop show-mobile mobile-logo">
      <img src={logo} />
    </div>
    <Hero />
    <section className="grid-container usa-section usa-prose hidden-desktop show-mobile mobile-hero">
      <HeroText style={{ textAlign: "center" }} />
    </section>
    <NavMobile className="nav-mobile-homepage" />
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap why-now">
        <div className="usa-prose">
          <p className="bold-quote">
            "I’m <strong>Ashwin Ramaswami,</strong> I was born and raised right here in Johns Creek and I truly love my hometown.</p>
            <p>I’m the son of immigrants, I’m a computer scientist, and I’m Gen Z. But most importantly, I’m ready to get to work for our community in the Georgia Senate.</p>
            <p>I’m ready to build an economy that works for working families, ensure every child has the right to a world-class education, pass common sense gun safety laws, protect every family’s freedom to control their reproductive healthcare, and continue to defend our democracy from threats foreign and domestic.</p>
            <p>I truly believe we can live in that Georgia - that’s why I’m running for Georgia State Senate. It’s time to reduce the extreme polarization in politics and work together on the issues that matter to us. <strong>I hope I can count on your support and your vote.</strong>"
          </p>
          <p className="signature"><img src={signature} /></p>
          <p>
            <div style={{ textAlign: "center" }}>
              <a className="usa-button" href="/about">
                Meet Ashwin
              </a>
              <a className="usa-button" href="/issues">
                The Issues
              </a>
              <a className="usa-button" target="_blank" href="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button">
                Donate
              </a>
            </div>
          </p>
        </div>
      </div>
      <hr />
      <div className="grid-row grid-gap">
      <div className="tablet:grid-col-6">
          <img src={capitol} />
        </div>
        <div className="tablet:grid-col-6">
          <img src={democrats} />
        </div>
      </div>
      <hr />
      <div className="grid-row grid-gap grid-endorsements">
        <div className="tablet:grid-col-12">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Endorsements<br />
          </h2>
        </div>
        <div className="tablet:grid-col-12">
          <ul className="usa-card-group">
            <Endorsement title="Georgia Democratic Caucus Chair Sen." name="Elena Parent" />
            <Endorsement title="Georgia Democratic Whip Rep." name="Sam Park" />
            <Endorsement title="Fmr. Sen." name="Jason Carter" />
            <Endorsement title="HD50 Rep." name="Michelle Au" />
            <Endorsement title="U.S. Congressman" name="Ro Khanna" />
            <Endorsement title="HD97 Rep." name="Ruwa Romman" />
            <Endorsement title="HD80 Rep." name="Long Tran" />
            <Endorsement title="HD68 Rep." name="Derrick Jackson" />
            <Endorsement title="Gwinnett County District 1 Commissioner" name="Kirkland Carden" />
            <Endorsement title="Fmr. State House Candidate" name="Om Duggal" />
            <Endorsement title="Chair of Forsyth County Dems" name="Kannan Udayarajan" />

            <Endorsement name="Dream for America" />
            <Endorsement title="Targeted District" name="The 2030 Project" />
            <Endorsement name="REAL Action, Inc." />
            <Endorsement name="StackedPAC" />
            <Endorsement name="Indian American Impact Fund" />
            <Endorsement img="https://lh5.googleusercontent.com/ExhSA2l0RqoFyf3nNIvOZ17zbjpxPJYp44On5zWraZs_2R7CIHVA-YzrDGwuT7mA8rf6jsUqJraHsA1-xxUztRJUgA5u6BBDNfjU0u_kqKy1IpYqY_pz-WtJZdAz_DmNreLHwgzQ3a693Sq_5q0BMI2M81fahRrsmklCVbt9M7jHqixHbgfUGGoprg" alt="314 Action Fund" />
            <Endorsement img="data:image/png;base64,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" alt="South Asians for America" />
            <Endorsement img="https://leaderswedeserve.com/wp-content/uploads/2023/07/leaders_we_deserve-logo-a-1-3.png" alt="Leaders We Deserve" />
            <Endorsement img="https://schlosser.io/img/res/800/teams/thenext50.png" alt="The Next 50" />
          </ul>
          {/* <div style={{ textAlign: "center" }}>
            <a href="/issues" className="usa-button">Learn More</a>
          </div> */}
        </div>
      </div>
    </section>
    {/* <hr />
    <WhyNot /> */}
  </Layout>
);

export default IndexPage;

export const Head = () => <>
  <meta name="description" content="Ashwin Ramaswami is launching a historic run for State Senate in the 48th district for the Democratic nomination. Ramaswami was born and raised in this district and is running to represent every voice in the community. In a time of high partisanship and political polarization, Ashwin aims to bring a diverse and steady voice to the State Capitol." />
</>
