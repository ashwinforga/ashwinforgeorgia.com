import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import abrams from '../images/endorsements/abrams.jpg';
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
import bourdeaux from '../images/endorsements/bourdeaux.png';
import young from '../images/endorsements/young.jpg';

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
import gae from '../images/endorsements/gae.png';
import georgia_stonewall from '../images/endorsements/georgia_stonewall.jpg';
import ibew from '../images/endorsements/IBEW_LOCAL_613.jpg';
import momsrising from '../images/endorsements/momsrising.jpg';
import UCFW from '../images/endorsements/UCFW.jpeg';

import climatecabinet from '../images/endorsements/climatecabinet.png';
import redclay from '../images/endorsements/redclay.png';
import georgiaequality from '../images/endorsements/georgiaequality.png';
import hrc from '../images/endorsements/hrcpac.png';

const Endorsement = ({ title, name, href, img, headshot, alt }) => (
  <li className="usa-card tablet:grid-col-3 issue">
    <div className="usa-card__container" style={{ border: 0 }}>
      <div
        className="usa-card__header"
        style={{
          textAlign: 'center',
          padding: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {headshot && <img src={headshot} />}
        <h4>{title}</h4>
        <h2 className="usa-card__heading">{name}</h2>
        {/* {img && !href && <img src={img} alt={alt} style={{margin: "auto"}} />}
        {img && href && <a target="_blank" href={href}><img src={img} alt={alt} style={{margin: "auto"}} /></a>} */}
        <img src={img} alt={alt} style={{ margin: 'auto' }} />
      </div>
    </div>
  </li>
);

function Endorsements() {
  return (
    <Layout>
      <SEO title="Media" />
      <section className="grid-container usa-section usa-prose grid-media">
        <div className="grid-row grid-gap grid-endorsements">
          <div className="tablet:grid-col-12">
            <h2 className="font-heading-xl margin-top-0 text-center">
              Endorsements
              <br />
            </h2>
          </div>
          <div className="tablet:grid-col-12">
            <ul className="usa-card-group">
              <Endorsement
                headshot={ossoff}
                title="U.S. Senator"
                name="Jon Ossoff"
              />
              <Endorsement
                headshot={mcbath}
                title="U.S. Representative"
                name="Lucy McBath"
              />
              <Endorsement
                headshot={butler}
                title="Georgia Democratic Caucus Leader Sen."
                name="Gloria Butler"
              />
              <Endorsement
                headshot={parent}
                title="Georgia Democratic Caucus Chair Sen."
                name="Elena Parent"
              />
              <Endorsement
                headshot={park}
                title="Georgia Democratic Whip Rep."
                name="Sam Park"
              />
              <Endorsement
                headshot={abrams}
                title="Fmr. Georgia Democratic Rep. Minority Leader"
                name="Stacy Abrams"
              />
              <Endorsement
                headshot={bourdeaux}
                title="Fmr. U.S. Representative"
                name="Carolyn Bourdeaux"
              />
              <Endorsement
                headshot={carter}
                title="Fmr. Sen."
                name="Jason Carter"
              />
              <Endorsement headshot={au} title="HD50 Rep." name="Michelle Au" />
              <Endorsement
                headshot={khanna}
                title="U.S. Representative"
                name="Ro Khanna"
              />
              <Endorsement
                headshot={islam}
                title="SD7 Sen."
                name="Nabilah Islam"
              />
              <Endorsement
                headshot={rahman}
                title="SD5 Sen."
                name="Sheikh Rahman"
              />
              <Endorsement
                headshot={romman}
                title="HD97 Rep."
                name="Ruwa Romman"
              />
              <Endorsement headshot={tran} title="HD80 Rep." name="Long Tran" />
              <Endorsement
                headshot={jackson}
                title="HD68 Rep."
                name="Derrick Jackson"
              />
              <Endorsement
                headshot={carden}
                title="Gwinnett County District 1 Commissioner"
                name="Kirkland Carden"
              />
              <Endorsement
                headshot={thompson}
                title="Lawrenceville City Councilman"
                name="Austin Thompson"
              />
              <Endorsement
                headshot={young}
                title="Fmr. Mayor of Atlanta"
                name="Andrew Young"
              />
              <Endorsement
                headshot={blackman}
                title="Fmr. Candidate, Georgia Public Service Commission"
                name="Daniel Blackman"
              />
              <Endorsement
                headshot={duggal}
                title="Fmr. State House Candidate"
                name="Om Duggal"
              />
              <Endorsement
                headshot={kannan}
                title="Chair of Forsyth County Dems"
                name="Kannan Udayarajan"
              />
              <Endorsement
                headshot={low}
                title="CA Assemblymember"
                name="Evan Low"
              />

              <Endorsement
                img={leadersWeDeserve}
                href="https://leaderswedeserve.com/"
                alt="Leaders We Deserve"
              />
              <Endorsement
                img={stacked}
                href="https://www.stackedpac.org/"
                alt="StackedPAC"
              />
              <Endorsement
                img={theNext50}
                href="https://thenext50.us/"
                alt="The Next 50"
              />
              <Endorsement
                img={_314}
                href="https://314action.org/"
                alt="314 Action Fund"
              />
              <Endorsement
                img={safa}
                href="https://www.saforamerica.org/"
                alt="South Asians for America"
              />
              <Endorsement
                img={gcv}
                href="https://www.gcvoters.org/"
                alt="Georgia Conservation Voters Logo"
              />
              <Endorsement img={newPolitics} alt="New Politics" />
              <Endorsement img={iaImpact} alt="Indian American Impact Fund" />
              <Endorsement img={voicesOfMuslims} alt="Voices of Muslims" />
              <Endorsement img={runForSomething} alt="Run for Something" />
              <Endorsement
                img={moms}
                alt="Moms Demand Action Gun Sense Candidate"
              />

              <Endorsement img={dreamForAmerica} alt="Dream for America" />
              <Endorsement img={_2030Project} alt="The 2030 Project" />
              <Endorsement img={realActionInc} alt="REAL Action, Inc." />
              <Endorsement img={pathToProgress} alt="Path to Progress" />
              <Endorsement
                img={collegeDems}
                alt="College Democrats of America"
              />

              <Endorsement img={gahsdems} alt="Georgia High School Democrats" />
              <Endorsement
                img={mentalhealthnow}
                href="https://mentalhealthnow.us/"
                alt="Mental Health now"
              />
              <Endorsement img={cgcandidate} alt="Candidates for Common Good" />

              <Endorsement
                img={climatecabinet}
                href="https://climatecabinet.org/candidates/ashwin-ramaswami"
                alt="Climate Cabinet Action Fund"
              />
              <Endorsement
                img={redclay}
                href="https://redclaydems.org/about-us/2024-endorsements/"
                alt="Red Clay Dems"
              />

              <Endorsement
                img={hrc}
                href="https://www.hrc.org/in-your-area/georgia"
                alt="Human Rights Campaign"
              />
              <Endorsement
                img={georgiaequality}
                href="https://georgiaequalitypac.org/2024-endorsements/"
                alt="Georgia Equality"
              />
              <Endorsement img={gae} alt="Georgia Equality" />
              <Endorsement
                img={georgia_stonewall}
                alt="Georiga Stonewall Democrats"
              />
              <Endorsement img={ibew} alt="IBEW Local 613" />
              <Endorsement
                img={momsrising}
                alt="MomsRising - Moms Seal of Approval"
              />
              <Endorsement img={UCFW} alt="UFCW Local 1996" />
            </ul>
            {/* <div style={{ textAlign: "center" }}>
        <a href="/issues" className="usa-button">Learn More</a>
      </div> */}
          </div>
        </div>
        <hr />
      </section>
    </Layout>
  );
}

export default Endorsements;
