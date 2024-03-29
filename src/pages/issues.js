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

const Issue = ({ title, img, href, children }) => (
  <li className="usa-card tablet:grid-col-4 issue">
    <div className="usa-card__container">
      <div className="usa-card__header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.75 66.87" width="30" height="30"><g dataName="Layer 2"><g fill="#002C6D" dataName="Layer 7"><path d="M34.75 47.9 15.61 28.14l6.63-6.43 12 12.38L62.65 0l7.1 5.91-35 41.99z" class="icon-check_svg__checkmark"></path><path d="m63.72 24-7.64 9.21v1A23.47 23.47 0 1 1 42.8 13.06l6-7.26a32.63 32.63 0 1 0 15 18.45Z" class="icon-check_svg__circle"></path></g></g></svg>
        <a href={href}><h2 className="usa-card__heading">{title}</h2></a>
      </div>
      <div className="usa-card__body">
        <p>
          {/* {children}<br /><a href="/issues">Read more...</a> */}
        </p>
      </div>
      <div className="usa-card__footer">
        {children}
      </div>
    </div>
  </li>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Issues" />
    <section className="grid-container usa-section usa-prose">
      <h1 id="issues">The Issues</h1><br /><br />

      <div className="grid-row grid-gap">
        {/* <div className="tablet:grid-col-12">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Issues<br />
          </h2>
        </div> */}
        <div className="tablet:grid-col-12">
          <ul className="usa-card-group">
            <Issue img="⚖️" title="Make Government Work Better">
            Let's pay state employees competitive wages, introduce better technology, and secure our elections. Let's fund our courts and pass a state civil rights law. Let's do campaign finance reform. I pledge to not take donations from corporate PACs.</Issue>
            <Issue img="🚓" title="Invest in Public Safety">
            We must keep our communities safe by training police, expanding community safety initiatives, and passing common-sense gun laws. We also need better consumer protection and antitrust laws to keep big technology companies accountable for online harms.</Issue>
            <Issue img="🏥" title="Make Healthcare Affordable">
            We need serious reform. Let's lower costs and improve care for those who need it most by expanding Medicaid, lowering drug prices, protecting the right to choose, expanding family tax credits, and supporting our healthcare workers.</Issue>
            <Issue img="📈" title="Grow a High-Tech Economy for All">
            Let's make Metro Atlanta a sustainable tech hub for the South by attracting investment and creating high-paying jobs in technology and innovation. Let's retain talent and encourage small businesses and entrepreneurship.</Issue>
            <Issue img="🌎" title="Protect the Earth and Our Community">
            Let's fight climate change by making Georgia a leader in green energy investments and green economy jobs. Our district also deserves better roads to reduce traffic, clean green spaces, and a safer public transit system.</Issue>
            <Issue img="📚" title="Provide Everyone with a World-Class Education">
            I'll fight to expand access to quality education. We need to give students more resources and courses, increase teachers' pay, teach financial literacy, and expand the HOPE Scholarship and Dual Enrollment programs.</Issue>
          </ul>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={map} />
              {/* https://www.mapsofworld.com/location-maps/usa/maps/atlanta-ga-location-map.jpg */}
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="economy">Economy: Let's make Metro Atlanta a sustainable tech hub for the South.</h3>
            <p>
              <ul>
                <li><strong>Establish a Metro Atlanta entrepreneurship studio</strong>, a public-private partnership to help create jobs right here and businesses in the public interest.</li>
                <li><strong>Collaborate with the federal government, investors, and philanthropy</strong> to create sustainable technology companies and organizations that work towards the social good.</li>
                <li><strong>Create high-paying jobs</strong> in the technology and public interest sector and attracting the next wave of innovation to GA: AI and digital infrastructure companies.</li>
                <li><strong>Bring high-speed Internet</strong> throughout Metro Atlanta and Georgia so that all Georgians have the right access they need.</li>
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
            <h3 id="education">Education: Let's give all Georgians access to a world-class education.</h3>
            <p>
              <ul>
                <li><strong>Require courses in civics and financial literacy</strong> for all students who graduate from high school.</li>
                {/* TODO: pay teachers more? */}
                <li><strong>Provide healthy and free meals</strong> in state schools to students who cannot afford it themselves.</li>
                <li><strong>Ensure every high school gives students a voice</strong> in governance, so that they can share what policies work best and worst for them.</li>
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
            <h3 id="climate">Climate: Let's take care of the environment and keep our towns beautiful.</h3>
            <p>
              <ul>
                <li><strong>Address climate change</strong> by investing in green energy; encouraging people to reuse and recycle; and working with federal programs to get funding and jobs in clean energy sectors.</li>
                <li><strong>Invest in more parks and green space</strong> to keep our homes and streets beautiful.</li>
                <li><strong>Invest in better roads, more sidewalks, and more bike lanes</strong> in order to improve our transportation infrastructure. Let's make our suburbs more walkable!</li>
                <li><strong>Advocate for <a href="https://atlanta.urbanize.city/post/introducing-atl-trains-revolutionary-approach-metro-commuter-transit">ATL Trains</a></strong> — a public transit system to connect Metro Atlantans, drastically reduce congestion on I-85 / I-75 / I-285, and provide more accessibility to those who cannot drive a car.</li>
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
            <h3 id="safety">Public Safety: Let's make our communities safer.</h3>
            <p>
              <ul>
                <li><strong>Protect the right to bear arms</strong> while increasing background checks to make it harder for dangerous people to get guns.</li>
                <li><strong>Support our police in keeping us safe</strong> by investing in body cameras and training, and invest in other services such as mental health and counseling for non-violent offenses.</li>
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
            <h3 id="healthcare">Healthcare: Let's lower costs and improve care.</h3>
            <p>
              <ul>
                <li><strong>Expand Medicaid</strong> so that low-income Georgians can receive the essential healthcare they need.</li>
                <li><strong>Lower prescription drug costs</strong> by passing a state-level drug pricing transparency law. This will require healthcare companies operating in GA to be more transparent and accountable with drug pricing.</li>
                <li><strong>Provide a tax credit for doctors, nurses, and healthcare professionals</strong>, to thank them for their work during the COVID-19 pandemic and encourage more to join the profession.</li>
                <li><strong>Enact a GA child tax credit</strong>, to help reduce child poverty and incentivize people to have families.</li>
                <li><strong>Protect reproductive rights</strong>. The right to choose shouldn't be dictated by the government.</li>
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
            <h3 id="government">Government: Let's build state and local government capacity.</h3>
            <p>
              <ul>
                <li><strong>Provide hand-marked paper ballots in all elections</strong>, the best way to ensure our elections are secure, and give agencies more resources for cybersecurity.</li>
                <li><strong>Pay our civil servants more</strong> so that we can hire and retain more talented people.</li>
                <li><strong>Place more technologists</strong> into our court systems and other state and local agencies to improve citizens' experience with government websites and technology.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
