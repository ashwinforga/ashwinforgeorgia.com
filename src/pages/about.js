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
import friend from "../images/friend.jpg";

const Timeline = () => {
  return (<div className="tablet:grid-col-12">
    <h3 className="site-preview-heading">What Ashwin has been working on...</h3>
    <ul className="usa-collection">
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">AUG</span>
            <span className="usa-collection__calendar-date-day">2023</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin helps keep Georgians safe on social media
          </h4>
          <p className="usa-collection__description">
            Ashwin worked as a Janet D. Steiger Fellow in the Georgia Attorney General's Consumer Protection Division under Georgia Attorney General Chris Carr, helping protect Georgians from business scams and pursuing a <a href="https://www.gpb.org/news/2023/10/26/georgia-32-other-states-going-after-meta-in-federal-court">landmark lawsuit</a> against Facebook around safety of children on social media.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
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
      </li>
      <li className="usa-collection__item">
        <div className="usa-collection__calendar-date">
          <time datetime="2020-09-30T12:00:00+01:00"><span className="usa-collection__calendar-date-month">MAR</span>
            <span className="usa-collection__calendar-date-day">2022</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin invests in open source communities
          </h4>
          <p className="usa-collection__description">
            Every small business relies on open source software (OSS) to run their business, but this little-known part of our digital infrastructure is often maintained by volunteers who don't get paid for their work. While at Schmidt Futures — a philanthropy led by Eric Schmidt, the first CEO of Google — Ashwin created $6 million in new initiatives to help sustain and increase visibility for OSS communities. His research helped inspire a bill in Congress: <a target="_blank" href="https://fedscoop.com/senators-reintroduce-bipartisan-open-source-software-bill/">H.R. 3286, Securing Open Source Software Act.</a> He's also worked across the free culture / open access movement, from the Wikimedia Foundation's legal team to the Linux Foundation's research team.
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
            Ashwin gives back to the South Asian community
          </h4>
          <p className="usa-collection__description">
            Ashwin began teaching classes at Chinmaya Mission for middle and high schoolers about philosophy and culture, including the Bhagavad Gita. At Georgetown, he founded the Dharmic Law Student Organization (programs for Buddhist, Hindu, Sikh, and Jain students) and helped raise $100K to establish an endowment for these programs at Georgetown. He <a href="https://www.indiaspora.org/blog/100-years-later-embracing-our-legacy-of-dr-bhagat-singh-thind/" target="_blank">wrote about</a>, raised awareness and hosted a panel about the 100th anniversary of <em>US v. Thind</em>, when Dr. Bhagat Singh Thind attempted to get citizenship at the Supreme Court in 1923.
          </p>
        </div>
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
            <span className="usa-collection__calendar-date-day">2020</span></time>
        </div>
        <div className="usa-collection__body">
          <h4 className="usa-collection__heading">
            Ashwin helps secure the 2020 elections
          </h4>
          <p className="usa-collection__description">
            Ashwin established and managed a cybersecurity program for state and local election officials while at the Cybersecurity and Infrastructure Security Agency (CISA), supporting election security efforts for both the 2020 and 2022 elections — a program which nearly received <a target="_blank" href="https://fedscoop.com/beyond-biden-cyber-directive-government-agencies-need-to-manage-their-attack-surface/">$50 million</a> in follow-on funding from Congress and is still active today. He worked with states across the country, including GA Secretary of State Brad Raffensperger's office, to flag and fix election security problems.
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
            Ashwin begins working with technology startups
          </h4>
          <p className="usa-collection__description">
            During his first year at Stanford, Ashwin began working with his first technology startup around healthcare regulation. Since then, Ashwin has provided consulting and engineering support for technology startups including Nooks, Skiff, Pulsar, and Eventive; and worked for technology companies including Google and NCR in Atlanta. He's also worked in venture capital and investing at Sequoia Capital.
          </p>
        </div>
      </li>
      <li className="usa-collection__item">
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
      </li>
    </ul>
  </div>)
}

const IndexPage = () => (
  <Layout>
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
              <img src={capitol} />
              <img src={thind} />
              <img src={writingClub} />
              {/* <img src={kumar} /> */}
              <img src={friend} />
              <img src={oss} />
              <img src={startups} />
              <img src={nsb} />
              {/* <img src={frenchHorn} /> */}
            </div>
          </h2>
        </div>
        <div className="tablet:grid-col-8 usa-prose">
          <p>
            I was born and grew up in Johns Creek, GA. I'm a second-generation immigrant, an Indian American, a twin brother, and a Hindu. I've worked to make positive change in my community through nonprofits, religious communities, technology startups, law and policy, and investing. This was only made possible through resources around me when growing up: Chattahoochee High School, GA's Dual Enrollment program, and the HOPE and Zell Miller Scholarships. It's time for me to pay it forward and help advocate for the futures of young people — and everyone — in our community.
            <Timeline />
          </p>
          {/* <p>
            I was born and grew up in Johns Creek, GA. Throughout my life, I've worked to make positive change through nonprofits, religious communities, Silicon Valley startups, lawyers and policy advocates, philanthropic foundations, and more. My life has been a series of instances of incredible opportunities that were only made possible through the education resources offered to me and my family when growing up: Chattahoochee High School, the dual enrollment program, and the HOPE and Zell Miller Scholarship. It's time for me to pay it forward and be an advocate for the futures of young people — and everyone — in our community.

            By running for office, I'd like to help others have the same, or better, opportunities than I have had. Everyone should have the opportunities and resources to succeed. My values come from my upbringing from the Dharmic traditions as a Hindu American:
            <ul>
              <li><strong>Listen to others' viewpoints.</strong> Each viewpoint has a person who holds it, and that person has a reason why they hold it: the values, circumstances and experiences unique to each of us. I accept and embrace the differences in our community.</li>
              <li><strong>Be an advocate for those who can't.</strong> Those in positions of privilege have the obligation to listen to others, and act to empower those who don't have the same voice.</li>
              <li><strong>Do the right thing.</strong> Regardless of political pressure or what donors say, I will stay honest with my consituents and do the right thing.</li>
            </ul>
          </p> */}
        </div>
      </div>
    </section>
    <hr />
    <section className="grid-container usa-section usa-prose">
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-4">
          <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
            About Senate District 48<br />


          </h2>
          <p>
            Senate District 48 contains parts of North Fulton County, South Forsyth County, and North Gwinnett County and parts of Johns Creek, Cumming, and Sugar Hill. To see if you live in the district, check your voter registration at <a target="_blank" href="https://mvp.sos.ga.gov/">mvp.sos.ga.gov</a> or look up your address on <a target="_blank" href="https://georgia.redistrictingandyou.org/?districtType=sd&propA=current_2012&propB=genassm_20211104&selected=-84.150,34.082&opacity=2#%26map=12.29/34.15027/-84.1564">this search tool</a>.
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
