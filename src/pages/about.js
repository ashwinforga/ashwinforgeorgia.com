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
import capitol from "../images/capitol-1.jpg";
import startups from "../images/startups.jpg";
import codalab from "../images/codalab.jpeg";
import gatech from "../images/gatech.png";
import stanford from "../images/stanford.png";
import gulc from "../images/gulc.png";
import hooch from "../images/hooch.jpeg";


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
    <h3 className="site-preview-heading">What Ashwin has been working on...</h3>
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
            Ashwin established and managed a cybersecurity program for state and local election officials while at the Cybersecurity and Infrastructure Security Agency (CISA), supporting election security efforts for both the 2020 and 2022 elections. He worked with states across the country, including GA Secretary of State Brad Raffensperger's office, to flag and fix election security problems.
          </p>
        </div>
      </li>
      <li className="usa-collection__item hidden-desktop">
        <img src={images[0]} />
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
            Ashwin was a fellow in the Georgia Attorney General's Consumer Protection Division, helping keep Georgians safe online and on social media.
          </p>
        </div>
      </li>
      <li className="usa-collection__item hidden-desktop">
        <img src={images[1]} />
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">SEP</span>
            <span className="usa-collection__calendar-date-day">2021</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Giving back to the South Asian community
          </h4>
          <p className="usa-collection__description">
            Ashwin began teaching classes at Chinmaya Mission for middle and high schoolers about Hindu philosophy and culture, including the Bhagavad Gita. At Georgetown, he founded the Dharmic Law Student Organization (programs for Buddhist, Hindu, Sikh, and Jain students) and helped raise $100K to establish an endowment.
          </p>
        </div>
      </li>
      <li className="usa-collection__item hidden-desktop">
        <img src={images[2]} />
      </li>
      {/* <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">NOV</span>
            <span className="usa-collection__calendar-date-day">2022</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin advocates for law students
          </h4>
          <p className="usa-collection__description">
            While pursuing his J.D. at Georgetown Law, Ashwin was elected to student government and <a href="https://georgetownlawtechreview.org/ai-transcription-isnt-working-for-students-with-disabilities-heres-how-to-fix-it/GLTR-11-2022/">advocated</a> for students with disabilities to have more access to accommodations. He educated the community about why automated transcription tools using AI are not sufficient and can be incorrect and harmful. He also helped raise $1 million to <a target="_blank" href="https://www.law.georgetown.edu/tech-institute/initiatives/georgetown-justice-lab/judicial-innovation/">start</a> the Judicial Innovation Fellowship program at Georgetown, which creates a pathway for technologists and designers to work in state and local courts to improve access to justice for those without access to lawyers.
          </p>
        </div>
      </li> */}
      <li className="usa-collection__item hidden-desktop">
        <img src={images[3]} />
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">APR</span>
            <span className="usa-collection__calendar-date-day">2021</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin invests in technology and security
          </h4>
          <p className="usa-collection__description">
          While at Schmidt Futures, Ashwin created $6 million in new philanthropic initiatives to help sustain and increase visibility for open source software communities, which every small business relies on. His research helped inspire a bill in Congress: H.R.3286, Securing Open Source Software Act. He's also worked across the free culture and open access movement, from the Wikimedia Foundation to the Linux Foundation.
          </p>
        </div>
      </li>
      <li className="usa-collection__item hidden-desktop">
        <img src={images[4]} />
      </li>
      {/* <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">JAN</span>
            <span className="usa-collection__calendar-date-day">2021</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin addresses COVID-19 misinformation
          </h4>
          <p className="usa-collection__description">
            Ashwin addressed COVID-19 misinformation on social media through the Virality Project, a collaboration between Stanford Internet Observatory, the New York University, the University of Washington, the National Council on Citizenship, and Graphika, building tools and seeing firsthand how misinformation affects our communities.
          </p>
        </div>
      </li> */}
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">NOV</span>
            <span className="usa-collection__calendar-date-day">2017</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin begins working with technology startups
          </h4>
          <p className="usa-collection__description">
            Ashwin began working with his first technology startup around healthcare regulation. Since then, Ashwin has provided consulting and engineering support for technology startups and technology entrepreneurship and investing.
          </p>
        </div>
      </li>
      <li className="usa-collection__item hidden-desktop">
        <img src={images[5]} />
      </li>
      <li className="usa-collection__item">
        <div className="logo-gallery">
          <div><img src={hooch} /></div>
          <div><img src={gatech} style={{marginLeft: 10}} /></div>
          <div><img src={stanford} /></div>
          <div><img src={gulc} /></div>
        </div>
      </li>
      {/* <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">MAY</span>
            <span className="usa-collection__calendar-date-day">2017</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin graduates from Chattahoochee High School
          </h4>
          <p className="usa-collection__description">
            Ashwin graduated as salutatorian from Chattahoochee High School to attend Stanford University. He competed nationally in Hooch's quizbowl, National Science Bowl, and Science Olympiad teams; participated in the Georgia Governor's Honors Program; and in his last year, he enrolled full-time at Georgia Tech through Georgia's Move on When Ready dual enrollment program.
          </p>
        </div>
      </li> */}
      <li className="usa-collection__item hidden-desktop">
        <img src={images[6]} />
      </li>
    </ul>
  </div>)
}

const IndexPage = () => (
  <Layout className="about-ashwin-page">
    <SEO title="Meet Ashwin" />
    <section className="grid-container usa-section usa-prose">
      <h1 id="about">Meet Ashwin</h1><br /><br />
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center about-images">
            {/* Background and values<br /><br /> */}

            {/* <img src={twins} /> */}
            <img src={family} />
            <div className="hidden-mobile">
              {images.map(i => <img src={i} />)}
            </div>
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            I was born and grew up in Johns Creek, GA. I'm a second-generation immigrant, an Indian American, a twin brother, and an engineer. I've built a career in software engineering, election security, and technology law and policy research.
          </p>
          <p>
              I have over seven years of experience working to build tech startups; have worked in the federal government on cybersecurity for three years; and currently run a consulting company around software architecture, technology law and policy. I've attended Georgia Tech, Stanford University, and Georgetown University Law Center. 
          </p>
          <Timeline />
        </div>
      </div>
    </section>
    {/* <hr style={{marginTop: -25, marginBottom: 0}} /> */}
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            About Senate District 48<br />
          </h2>
          <p>
            Senate District 48 contains parts of North Fulton County, South Forsyth County, and North Gwinnett County and parts of Johns Creek, Cumming, Sugar Hill, Suwanee, Alpharetta, and Buford. To see if you live in the district, check your voter registration at <a target="_blank" href="https://mvp.sos.ga.gov/">mvp.sos.ga.gov</a> or look up your address on <a target="_blank" href="https://georgia.redistrictingandyou.org/?districtType=sd&propA=current_2012&propB=genassm_20211104&selected=-84.150,34.082&opacity=2#%26map=12.29/34.15027/-84.1564">this search tool</a>.
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
