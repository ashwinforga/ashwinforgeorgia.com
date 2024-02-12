import React, { useCallback, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import img from "../images/solo-wide.jpg";
// import img from "../images/writing-club.jpg";
import smile from "../images/smile-4.jpg";
import smileSquare from "../images/smile-square.jpg";
import sal from "../images/ashwin-sal.jpg";
import logo from "../images/ARLogo-full-color-white-text.png";
import cover from "../images/cover.png";
import capitol from "../images/capitol.jpeg";
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
      alert("There was an error opening the form. Please contact contact@ashwinforgeorgia.com.");
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
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Why now?
          </h2>
          {/* <img src={lecture} /> */}
          <div className="smile-outer">
            <div className="smile-container">
              <img src={smile} />
            </div>
          </div>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            <ul>
              <li>"<strong>I am from Johns Creek, GA and the only candidate who grew up in this district.</strong> I've worked to make positive change in my community through nonprofits, religious communities, technology startups, and law and policy — all thanks to the wonderful people and resources in my hometown. It's time for me to pay it forward and help advocate for the futures of young people — and everyone — in our community."</li>
              <li><strong>I am running as a Democrat in District 48,</strong> which includes parts of Johns Creek, Cumming, Sugar Hill, Suwanee, Alpharetta, and Buford.</li>
              <li><strong>We have a once-in-a-generation opportunity</strong> to make transformative investments in our communities. Did you know that the State of Georgia now has $10.7 billion in surplus cash? We should invest it wisely in our future.</li>
              <li><strong>Our current State Senator, Shawn Still, has been indicted</strong> for trying to overturn the 2020 election results. This is a chance to stand up for democracy and show this was unacceptable. I'm committed to accepting the election results and the democratic process.</li>
              <li><strong>We need diverse leadership</strong> that reflects our communities. I would be the first Indian American in the Georgia State Senate, first Gen Z member, and the only State Senator with a computer science and a law degree.</li>
            </ul>
            <div style={{ textAlign: "center" }}>
              <a className="usa-button" href="/about">
                Meet Ashwin
              </a>
            </div>
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
            <Issue href="/issues#government" img="⚖️" title="Make Government Work Better">Let's build state and local government capacity by empowering workers with technology and ensuring they are paid competitive wages.</Issue>
            <Issue href="/issues#economy" img="🚓" title="Invest in Public Safety">Let's be smarter at keeping our communities safe by training police, passing commonsense gun laws, and focusing on consumer protection.</Issue>
            <Issue href="/issues#healthcare" img="🏥" title="Make Healthcare Affordable">Let's lower costs and improve care for those who need it most by expanding Medicaid, lowering drug prices, and helping our healthcare workers.</Issue>
            <Issue href="/issues#economy" img="📈" title="Grow a High-Tech Economy for All">Let's make Metro Atlanta a sustainable tech hub for the South by attracting investment and giving the best and brightest talent a reason to stay here.</Issue>
            <Issue href="/issues#climate" img="🌎" title="Protect the Earth and Our Community">Let's address the climate crisis and reduce traffic by investing in roads, sidewalks, and a safe public transit system, which is needed more than ever as Metro Atlanta grows.</Issue>
            <Issue href="/issues#education" img="📚" title="Provide Everyone with a World-Class Education">Let's give all Georgians access to a quality education by paying teachers more, investing in <em>all</em> schools and community colleges, and giving our students a greater voice.</Issue>
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
