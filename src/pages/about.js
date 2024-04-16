import React from 'react';
import { Script } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import writingClub from "../images/writing-club.jpg";
import thind from "../images/thind.jpg";
import frenchHorn from "../images/french-horn-cropped.jpg";
import family from "../images/ashwin-family.jpeg";
import oss from "../images/oss.png";
import district from "../images/2023SD48.png";
import nsb from "../images/nsb.jpeg";
import reporter from "../images/ashwin-reporter.jpg";
import startups from "../images/startups.jpg";
import codalab from "../images/codalab.jpeg";
import gatech from "../images/gatech.png";
import stanford from "../images/stanford.png";
import gulc from "../images/gulc.png";
import hooch from "../images/hooch.jpeg";
import ashwinSerious from "../images/ashwin-serious-cropped-2.jpg"


const images = [
  // capitol,
  thind,
  codalab,
  writingClub,
  // oss,
  startups,
  // nsb
];

const Timeline = () => {
  return (<div className="tablet:grid-col-12">
    <p>Hi, I'm Ashwin, from Johns Creek, GA. I <a target="_blank" href="https://www.nbcnews.com/politics/2024-election/gen-z-democrat-georgia-fake-elector-state-senate-rcna144294">quit my job in election security</a> in order to serve our community and protect our democracy. <strong>Here's what I've done...</strong></p>
    {/* <h3 className="site-preview-heading">Here's what I've done...</h3> */}
    <ul className="usa-collection">
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">NOV</span>
            <span className="usa-collection__calendar-date-day">2020-2023</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Securing the 2020 elections
          </h4>
          <p className="usa-collection__description">
            Ashwin worked at the Cybersecurity and Infrastructure Security Agency (CISA), where he worked with states across the country, including Georgia, to secure their elections.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">AUG</span>
            <span className="usa-collection__calendar-date-day">2023</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Keeping Georgians safe online
          </h4>
          <p className="usa-collection__description">
            Ashwin was a fellow in the Georgia Attorney General's Consumer Protection Division, helping keep Georgians safe online.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">SEP</span>
            <span className="usa-collection__calendar-date-day">2021</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Giving back to the next generation
          </h4>
          <p className="usa-collection__description">
            Ashwin teaches classes for high schoolers about Hindu philosophy and culture. At Georgetown, he helped raise $100K to establish an endowment for Dharmic programs (for students from Buddhist, Hindu, Sikh, Jain, and other traditions).
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">APR</span>
            <span className="usa-collection__calendar-date-day">2021</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Investing in technology and security
          </h4>
          <p className="usa-collection__description">
            At Schmidt Futures, Ashwin created $6 million in philanthropic initiatives to help sustain and secure open source software, which every small business relies on. His research helped inspire a bill in Congress: <a target="_blank" href="https://www.congress.gov/bill/118th-congress/senate-bill/917/text">H.R. 3286</a>, the Securing Open Source Software Act. Ashwin also helped raise $1 million to start <a target="_blank" href="https://www.law.georgetown.edu/tech-institute/initiatives/georgetown-justice-lab/judicial-innovation/">JIF</a>, a program that places technologists in state and local courts to improve access to justice.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">NOV</span>
            <span className="usa-collection__calendar-date-day">2017</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Building technology startups
          </h4>
          <p className="usa-collection__description">
            Ashwin began working with his first technology startup around healthcare regulation. Since then, Ashwin has provided consulting and engineering support for technology startups and technology entrepreneurship and investing.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin has attended...
          </h4>
          <p className="usa-collection__description">
            <div className="logo-gallery">
              <div><img src={hooch} alt="Chattahoochee High School" /></div>
              <div><img src={gatech} alt="Georgia Institute of Technology" style={{ marginLeft: 10 }} /></div>
              <div><img src={stanford} alt="Stanford University" /></div>
              <div><img src={gulc} alt="Georgetown University Law Center" /></div>
            </div>
          </p>
        </div>
      </li>
    </ul>
  </div>)
}

const IndexPage = () => (
  <Layout className="about-ashwin-page">
    <SEO title="Meet Ashwin" />
    <section className="grid-container usa-section usa-prose section-about" style={{ backgroundImage: `url(${ashwinSerious})` }}>
      {/* <h1 id="about">Meet Ashwin</h1><br /><br /> */}
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-12 usa-prose">
          {/* <p>
            "I’m <strong>Ashwin Ramaswami,</strong> I was born and raised right here in Johns Creek and I truly love my hometown.</p>
            <p>I’m the son of immigrants, I’m a computer scientist, and I’m Gen Z. But most importantly, I’m ready to get to work for our community in the Georgia Senate."
          </p> */}
          <Timeline />
        </div>
      </div>
    </section>
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            About Senate District 48<br />
          </h2>
          <p>
            Senate District 48 contains parts of North Fulton County, South Forsyth County, and North Gwinnett County and parts of Johns Creek, Cumming, Sugar Hill, Suwanee, Alpharetta, and Buford. To see if you live in the district, check your voter registration at <a target="_blank" href="https://mvp.sos.ga.gov/">mvp.sos.ga.gov</a> or look up your address on <a target="_blank" href="https://pluralpolicy.com/find-your-legislator/">this search tool</a>.
          </p>
        </div>
        <div className="tablet:grid-col-8 usa-prose">

          <a target="_blank" href="https://www.senate.ga.gov/senators/Documents/Maps/2023SD48.pdf"><img src={district} /></a>
          <p style={{ textAlign: "center" }}><strong>Schools in this district:</strong></p>
          <div className="grid-row" style={{ marginTop: 0 }}>
            <ul className="tablet:grid-col-6">
              {/* <li>Abbotts Hill Elementary School</li>
            <li>Barnwell Elementary School</li>
            <li>Big Creek Elementary School</li>
            <li>Creek View Elementary School</li>
            <li>Daves Creek Elementary School</li>
            <li>Dolvin Elementary School</li>
            <li>Findley Oaks Elementary School</li>
            <li>Johns Creek Elementary School</li>
            <li>Lake Windward Elementary School</li>
            <li>Ocee Elementary School</li>
            <li>Medlock Bridge Elementary School</li>
            <li>Roberts Elementary School</li>
            <li>Riverside Elementary School</li>
            <li>Settles Bridge Elementary Schol</li>
            <li>Shakerag Elementary School</li>
            <li>Sharon Elementary School</li>
            <li>State Bridge Crossing Elementary School</li>
            <li>Sugar Hill Elementary School</li>
            <li>Sycamore Elementary School</li>
            <li>White Oak Elementary School</li>
            <li>Wilson Creek Elementary School</li> */}

              <li>Autrey Mill Middle School</li>
              <li>Lanier Middle School</li>
              <li>Riverwatch Middle School</li>
              <li>River Trail Middle School</li>
              <li>South Forsyth Middle School</li>
              <li>Taylor Road Middle School</li>
              <li>Webb Bridge Middle School</li>

            </ul>
            <ul className="tablet:grid-col-6">
              <li>Chattahoochee High School</li>
              <li>Johns Creek High School</li>
              <li>Lambert High School</li>
              <li>Northview High School</li>
              <li>North Gwinnett High School</li>
              <li>South Forsyth High School</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
