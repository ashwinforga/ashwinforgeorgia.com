import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import nsb3 from "../images/nsb3.jpeg";
import atlTrains from "../images/atl-trains.jpg";
import map from "../images/atlanta-ga-location-map.jpeg";
import startups from "../images/ashwin-teaching.jpeg";
import police from "../images/police.jpeg";
import hospital from "../images/hospital.jpg";
import capitol from "../images/capitol.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO title="Issues" />
    <section className="grid-container usa-section usa-prose">
      <h1 id="issues">The Issues</h1><br /><br />


    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={map} />
          {/* https://www.mapsofworld.com/location-maps/usa/maps/atlanta-ga-location-map.jpg */}
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Economy: Let's make Metro Atlanta a sustainable tech hub for the South.</h3>
        <p>
          <ul>
            <li><strong>Establish a Metro Atlanta entrepreneurship studio</strong>, a public-private partnership to help create jobs right here and businesses in the public interest.</li>
            <li><strong>Collaborate with the federal government, investors, and philanthropy</strong> to create sustainable technology companies and organizations that work towards the social good.</li>
            <li><strong>Create high-paying jobs</strong> in the technology and public interest sector and attracting the next wave of innovation to GA: AI and digital infrastructure companies.</li>
            <li><strong>Bring high-speed Internet</strong> throughout Metro Atlanta and Georgia so that all Georgians have the righ access they need.</li>
          </ul>
        </p>
      </div>
    </div>

    <hr />

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={startups} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Education: Let's give all Georgians access to a quality education.</h3>
        <p>
          <ul>
            <li><strong>Require courses in civics and financial literacy</strong> for all students who graduate from high school.</li>
            <li><strong>Provide healthy and free meals</strong> in state schools to students who cannot afford it themselves.</li>
            <li><strong>Ensure every high school offers a course on computer science</strong>, that equips every student to learn about software, AI and the ethics behind it.</li>
            <li><strong>Expand Dual Enrollment programs</strong> such as Move on When Ready and the availability of the HOPE Scholarship and Zell Miller Scholarships, so more Georgian students can get a quality education in-state.</li>
            <li><strong>Invest in community colleges</strong> such as Georgia Perimeter College so that they can equip our children with the skills they need to succeed.</li>
          </ul>
        </p>
      </div>
    </div>
    <hr />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={atlTrains} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Transit and Transportation: Let's reduce traffic.</h3>
        <p>
          <ul>
            <li><strong>Advocate for <a href="https://atlanta.urbanize.city/post/introducing-atl-trains-revolutionary-approach-metro-commuter-transit">ATL Trains</a></strong> — a public transit system to connect Metro Atlantans, drastically reduce congestion on I-85 / I-75 / I-285, and provide more accessibility to those who cannot drive a car.</li>
            <li><strong>Invest in better roads, more sidewalks, and more bike lanes</strong> in order to improve our transportation infrastructure. Let's make our suburbs more walkable!</li>
          </ul>
        </p>
      </div>
    </div>
    <hr />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          {/* https://www.flickr.com/photos/mr_t_in_dc/1021262724 */}
          <img src={police} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Public Safety: Let's make our communities safer.</h3>
        <p>
          <ul>
            <li><strong>Pass commonsense gun safety reform</strong> such as background checks, while standing up for the right to bear arms.</li>
            <li><strong>Pass commonsense police accountability steps</strong> such as wearing body cameras and having additional training, and invest in other services such as mental health and counseling for non-violent offenses.</li>
            <li><strong>Pass state consumer protection, online safety, and antitrust laws</strong> to keep big tech companies accountable for online harms and children safe on social media.</li>
          </ul>
        </p>
      </div>
    </div>
    <hr />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={hospital} />
          {/* https://www.google.com/local/place/fid/0x88f5991858566f7b:0x4874bf6c636a43c3/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D5vpqtAEF_0a6JEY145ZDPA%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D251.87053%26pitch%3D0%26thumbfov%3D100&ik=CAISFjV2cHF0QUVGXzBhNkpFWTE0NVpEUEE%3D */}
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Healthcare: Let's lower costs and improve care.</h3>
        <p>
          <ul>
            <li><strong>Expand Medicaid</strong> so that low-income Georgians can receive the essential healthcare they need.</li>
            <li><strong>Lower prescription drug costs</strong> by passing a state-level drug pricing transparency law. This will require healthcare companies operating in GA to be more transparent and accountable with drug pricing.</li>
            <li><strong>Provide a tax credit for doctors, nurses, and healthcare professionals</strong>, to thank them for their work during the COVID-19 pandemic and encourage more to join the profession.</li>
            <li><strong>Enact a GA child tax credit</strong>, to help reduce child poverty and incentivize people to have families.</li>
            <li><strong>Protect women's reproductive rights</strong>. The right to choose shouldn't be dictated by the government.</li>
          </ul>
        </p>
      </div>
    </div>
    <hr />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={capitol} />
          {/* https://commons.wikimedia.org/wiki/File:Georgia_State_Capitol,_Atlanta,_GA_%2846751457534%29.jpg */}
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Government: Let's build state and local government capacity.</h3>
        <p>
          <ul>
          <li><strong>Provide hand-marked paper ballots in all elections</strong>, the best way to ensure our elections are secure, and give agencies more resources for cybersecurity.</li>
          <li><strong>Pay our civil servants more</strong> so that we can hire and retain more talented people.</li>
          <li><strong>Place more technologists</strong> into our court systems and other state and local agencies to improve citizens' experience with government websites and technology.</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
  </Layout>
);

export default IndexPage;
