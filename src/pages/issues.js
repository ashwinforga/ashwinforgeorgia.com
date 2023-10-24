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
      <h3>Tech: Let's make Metro Atlanta a sustainable tech hub for the South.</h3>
        <p>
          <ul>
            <li><strong>Collaborate with venture capital, Silicon Valley</strong> and beyond through university and public-private partnerships.</li>
            <li><strong>Establish a Metro Atlanta venture studio</strong>, a public-private partnership to help create jobs right here and businesses in the public interest.</li>
            <li><strong>Create high-paying jobs</strong> in the technology and public interest sector and attracting the next wave of innovation to GA: AI and digital infrastructure companies.</li>
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
            <li><strong>Ensure every high school offers a course on AI</strong>, that focuses not just on the technology, but the ethics behind it</li>
            <li><strong>Expand Dual Enrollment programs</strong> such as Move on When Ready and the availability of the HOPE Scholarship and Zell Miller Scholarships</li>
            <li><strong>Add rigorous civics and liberal arts requirements</strong> for all students who graduate from high school. Every student needs to understand civics and liberal arts to be a good citizen.</li>
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
            <li><strong>Advocate for <a href="https://atlanta.urbanize.city/post/introducing-atl-trains-revolutionary-approach-metro-commuter-transit">ATL Trains</a></strong> — a system to connect Metro Atlantans and drastically reduce congestion on I-85 / I-75 / I-285</li>
            <li><strong>Invest in better roads, more sidewalks, and more bike lanes</strong> in order to improve our transportation infrastructure. Let's make our suburbs more walkable!</li>
            <li><strong>Expand options for buses and public transit</strong> around the district. You shouldn't need a car just to visit your friend or go to the park.</li>
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
            <li><strong>Enact a GA child tax credit</strong>. This will help reduce child poverty and incentivize people to have families.</li>
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
            <li><strong>Place technologists</strong> into our court systems and other state and local agencies to bring an <strong>Agile methodology</strong> to government: improving access to justice and the user experience for all.</li>
            <li><strong>Increase salaries</strong> of our civil servants so that we can hire and retain more talented people.</li>
            <li><strong>Focus on cybersecurity</strong> by introducing a Bug Bounty program, Vulnerability Disclosure Policy, and coordinate closely with our federal and local partners.</li>
            <li><strong>Secure our elections</strong> by ensuring all voting machines use a paper trail and other practices recommended by experts.</li>
          </ul>
        </p>
      </div>
    </div>
  </section>
  </Layout>
);

export default IndexPage;
