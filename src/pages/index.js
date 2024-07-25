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
import { Link } from 'gatsby';

import au from '../images/endorsements/au.jpeg';
import blackman from '../images/endorsements/blackman.jpeg';
import butler from '../images/endorsements/butler.jpeg';
import carden from '../images/endorsements/carden.jpeg';
import carter from '../images/endorsements/carter.jpeg';
import duggal from '../images/endorsements/duggal.jpeg';
import islam from '../images/endorsements/islam.jpeg';
import jackson from '../images/endorsements/jackson.jpeg';
import kannan from '../images/endorsements/kannan.jpeg';
import khanna from '../images/endorsements/khanna.jpeg';
import low from '../images/endorsements/low.jpeg';
import mcbath from '../images/endorsements/mcbath.jpeg';
import parent from '../images/endorsements/parent.jpeg';
import park from '../images/endorsements/park.jpeg';
import romman from '../images/endorsements/romman.jpeg';
import tran from '../images/endorsements/tran.jpeg';
import ossoff from '../images/endorsements/ossoff.jpeg';
import rahman from '../images/endorsements/rahman.jpeg';
import thompson from '../images/endorsements/thompson.jpg';

import newPolitics from '../images/endorsements/new-politics.png';
import collegeDems from '../images/endorsements/collegedems.png';
import pathToProgress from '../images/endorsements/pathtoprogress.jpeg';
import realActionInc from '../images/endorsements/realactioninc.jpeg';
import _2030Project from '../images/endorsements/2030.png';
import dreamForAmerica from '../images/endorsements/dreamforamerica.png';
import voicesOfMuslims from '../images/endorsements/voices-of-muslims.png';
import runForSomething from '../images/endorsements/rfs.jpeg';
import safa from '../images/endorsements/safa.png';
import _314 from '../images/endorsements/314actionfund.png';
import theNext50 from '../images/endorsements/thenext50.png';
import leadersWeDeserve from '../images/endorsements/lwd.png';
import stacked from '../images/endorsements/stacked.png';
import gcv from '../images/endorsements/gcv.png';
import iaImpact from '../images/endorsements/ia-impact.png';
import moms from '../images/endorsements/moms.png';
import gahsdems from '../images/endorsements/gahsdems.jpeg';
import mentalhealthnow from '../images/endorsements/mentalhealthnow.png';
import cgcandidate from '../images/endorsements/CGCandidate.png';
import theyseeblue from '../images/endorsements/theyseeblue.jpeg';

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

const Endorsement = ({ title, name, href, img, headshot, alt }) => (
  <li className="usa-card tablet:grid-col-3 issue">
    <div className="usa-card__container" style={{border: 0}}>
      <div className="usa-card__header" style={{textAlign: "center", padding: 0, height: "100%", display: "flex", flexDirection: "column"}}>
        {headshot && <img src={headshot} />}
        <h4>{title}</h4>
        <h2 className="usa-card__heading">{name}</h2>
        {/* {img && !href && <img src={img} alt={alt} style={{margin: "auto"}} />}
        {img && href && <a target="_blank" href={href}><img src={img} alt={alt} style={{margin: "auto"}} /></a>} */}
        <img src={img} alt={alt} style={{margin: "auto"}} />
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
            "I’m <strong>Ashwin Ramaswami,</strong> I was born and raised right here in Johns Creek and I’m ready to get to work for our community in the Georgia Senate for District 48.</p>
          <p>I’m the son of immigrants, I’m a computer scientist, and I’m Gen Z. I hold a B.S. in Computer Science from Stanford University and a J.D. from Georgetown University Law Center, and decided to work in public service: cybersecurity and election security in the federal government.</p>
          <p>I’m ready to provide everyone with a world-class education, build an economy ready for the technology of the future, pass common-sense gun safety laws, and protect access to reproductive healthcare. And I will always lead with integrity and stand up for our democracy, our civil servants, and our poll workers.</p>
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
        <div className="tablet:grid-col-6">
          <iframe width="100%" height="310" src="https://www.youtube.com/embed/VU1EVNaoSfk?si=G4d1GoVjZckzT2hd&amp;start=239" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="tablet:grid-col-6">
          <iframe width="100%" height="310" src="https://www.youtube.com/embed/Zhn6IqZr4ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
      <hr />
      <div className="grid-row grid-gap grid-donate">
        <div className="tablet:grid-col-12"><h1 style={{ marginTop: "0 !important" }}>Join our campaign!</h1></div>
        <div className="tablet:grid-col-12" style={{ justifyContent: "center", margin: "0 auto", display: "flex", flexWrap: "wrap", width: "100%", maxWidth: "1000px", gap: "0.5rem" }}>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button&amount=25" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$25</Link>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button&amount=100" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$100</Link>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button&amount=250" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$250</Link>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button&amount=500" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$500</Link>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button&amount=1000" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$1,000</Link>
          <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-button" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>Donate</Link>
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
            <Endorsement headshot={ossoff} title="U.S. Senator" name="Jon Ossoff" />
            <Endorsement headshot={mcbath} title="U.S. Representative" name="Lucy McBath" />
            <Endorsement headshot={butler} title="Georgia Democratic Caucus Leader Sen." name="Gloria Butler" />
            <Endorsement headshot={parent} title="Georgia Democratic Caucus Chair Sen." name="Elena Parent" />
            <Endorsement headshot={park} title="Georgia Democratic Whip Rep." name="Sam Park" />
            <Endorsement headshot={carter} title="Fmr. Sen." name="Jason Carter" />
            <Endorsement headshot={au} title="HD50 Rep." name="Michelle Au" />
            <Endorsement headshot={khanna} title="U.S. Representative" name="Ro Khanna" />
            <Endorsement headshot={islam} title="SD7 Sen." name="Nabilah Islam" />
            <Endorsement headshot={rahman} title="SD5 Sen." name="Sheikh Rahman" />
            <Endorsement headshot={romman} title="HD97 Rep." name="Ruwa Romman" />
            <Endorsement headshot={tran} title="HD80 Rep." name="Long Tran" />
            <Endorsement headshot={jackson} title="HD68 Rep." name="Derrick Jackson" />
            <Endorsement headshot={carden} title="Gwinnett County District 1 Commissioner" name="Kirkland Carden" />
            <Endorsement headshot={thompson} title="Lawrenceville City Councilman" name="Austin Thompson" />
            <Endorsement headshot={blackman} title="Fmr. Candidate, Georgia Public Service Commission" name="Daniel Blackman" />
            <Endorsement headshot={duggal} title="Fmr. State House Candidate" name="Om Duggal" />
            <Endorsement headshot={kannan} title="Chair of Forsyth County Dems" name="Kannan Udayarajan" />
            <Endorsement headshot={low} title="CA Assemblymember" name="Evan Low" />

            <Endorsement img={leadersWeDeserve} href="https://leaderswedeserve.com/" alt="Leaders We Deserve" />
            <Endorsement img={stacked} href="https://www.stackedpac.org/" alt="StackedPAC" />
            <Endorsement img={theNext50} href="https://thenext50.us/" alt="The Next 50" />
            <Endorsement img={_314} href="https://314action.org/" alt="314 Action Fund" />
            <Endorsement img={safa} href="https://www.saforamerica.org/" alt="South Asians for America" />
            <Endorsement img={gcv} href="https://www.gcvoters.org/" alt="Georgia Conservation Voters Logo" />
            <Endorsement img={newPolitics} alt="New Politics" />
            <Endorsement img={iaImpact} alt="Indian American Impact Fund" />
            <Endorsement img={voicesOfMuslims} alt="Voices of Muslims" />
            <Endorsement img={runForSomething} alt="Run for Something" />
            <Endorsement img={moms} alt="Moms Demand Action Gun Sense Candidate" />

            <Endorsement img={dreamForAmerica} alt="Dream for America" />
            <Endorsement img={_2030Project} alt="The 2030 Project" />
            <Endorsement img={realActionInc} alt="REAL Action, Inc." />
            <Endorsement img={pathToProgress} alt="Path to Progress" />
            <Endorsement img={collegeDems} alt="College Democrats of America" />

            <Endorsement img={gahsdems} alt="Georgia High School Democrats" />
            <Endorsement img={mentalhealthnow} href="https://mentalhealthnow.us/" alt="Mental Health now" />
            <Endorsement img={cgcandidate} alt="Candidates for Common Good" />
            <Endorsement img={theyseeblue} alt="They See Blue Candidate" />
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
