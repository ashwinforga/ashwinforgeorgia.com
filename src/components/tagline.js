import React from 'react';
import ashwinRun from "../images/ashwin.run.jpg";
import nsb3 from "../images/nsb3.jpeg";
import nsb2 from "../images/nsb2-cropped.jpeg";
import court from "../images/court 3.jpg";
import atlTrains from "../images/atl-trains.jpg";
import startups from "../images/ashwin-teaching.jpeg";
import police from "../images/police.jpeg";
import hospital from "../images/hospital.jpg";
import capitol from "../images/capitol.jpeg";

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <>
  <section className="grid-container usa-section usa-prose">
  <h1 id="about">About Ashwin</h1><br /><br />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          My background and values<br /><br />

          <img src={nsb3} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          I was born and grew up in Johns Creek, GA, in Bridgestone Farms. Throughout my life, I've worked to make positive change through nonprofits, religious communities, Silicon Valley startups, lawyers and policy advocates, philanthropic foundations, and more. My life has been a series of instances of incredible opportunities that were only made possible through the education resources offered to me and my family when growing up: Chattahoochee High School, the dual enrollment program, and the HOPE and Zell Miller Scholarship. It's time for me to pay it forward and be an advocate for the futures of young people — and everyone — in our community.
        </p>
        <p>
        By running for office, I’d like to help others have the same, or better, opportunities than I have had. Everyone should have the opportunities and resources to succeed. My values come from my upbringing from the Dharmic traditions as a Hindu American:
        <ul>
          <li><strong>Listen to others' viewpoints.</strong> Each viewpoint has a person who holds it, and that person has a reason why they hold it: the values, circumstances and experiences unique to each of us. I accept and embrace the differences in our community.</li>
          <li><strong>Be an advocate for those who can't.</strong> Those in positions of privilege have the obligation to listen to others, and act to empower those who don't have the same voice.</li>
          <li><strong>Do the right thing.</strong> Regardless of political pressure or what donors say, I will stay honest with my consituents and do the right thing.</li>
        </ul>
        </p>
      </div>
    </div>
  </section>
  <hr />
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          My experience<br /><br />

          <img src={ashwinRun} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          My experience has ranged from technology, government, and philanthropy, and I've worked with others on a bipartisan basis:
          <ul>
            <li><strong>Election Security:</strong> I worked under both President Trump and President Biden in the federal government; I was at the Cybersecurity and Infrastructure Security Agency, where I protected the nation's critical infrastructure — and election systems — from cyberattacks during the 2020 and 2022 elections.</li>
            <li><strong>State Government:</strong> I worked as a Janet D. Steiger Fellow in the Georgia Attorney General's Consumer Protection Division under Georgia Attorney General Chris Carr, where I worked to protect Georgians from business scams.</li>
            <li><strong>Philanthropy:</strong> While working at Schmidt Futures — a philanthropy led by Eric Schmidt, the first CEO of Google — I established $6 million in new initiatives around open source software, sustaining the digital infrastructure that powers our small businesses.</li>
            <li><strong>Venture Capital:</strong> I worked at Sequoia Capital as a Technology Law & Policy Fellow, where I helped inform their investment strategy.</li>
            <li><strong>Software:</strong> I studied computer science at Stanford University and now own a tech consulting business that works to support startups with new ideas around the world.</li>
            <li><strong>Religion: </strong>I helped run the Dharmic Life chaplaincy at <strong>Georgetown University</strong>, which supports Hindu, Buddhist, Jain, and Sikh students, and raised $100K to establish an endowment. I also worked on interreligious advocacy and understanding.</li>
          </ul>
           
        </p>
      </div>
    </div>
  </section>
  <hr />
    <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          Why now?<br /><br />

          <img src={court} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
        We’re in a moment where politics is often devoid of substance and focused on show. Incumbent Shawn Still for the 48th state senate district has proved unfit for office, focusing on gas-powered lawn mowers and overturning the 2020 election results rather than the issues that affect our communities every day, such as education, jobs, healthcare costs, public safety, transportation, and government capacity. Increasingly, we are also facing bigger issues around technology, from education and ChatGPT/AI to children's safety on social media, while few in the state legislature actually have the tech experience to understand and address these issues.
        </p>
        <p>
        Moreover, I'd be the first Hindu American to be a Georgia state legislator and first South Asian to represent this district. In May 2024, I'll also finish my law degree (J.D.) at Georgetown University Law Center. I look forward to bringing my experience in law and federal policy to help address issues in our state.
        </p>
      </div>
    </div>
  </section>
  <hr />
    <section className="grid-container usa-section usa-prose" style={{paddingTop: 30}}>
      <h1 id="issues">The Issues</h1><br /><br />


    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={startups} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Let's make Metro Atlanta a Sustainable Tech Hub for the South</h3>
        <p>
        Metro Atlanta has enormous potential to become the nation's leader in technology and entrepreneurship. I will:
          <ul>
            <li><strong>Collaborate with venture capital, Silicon Valley</strong> and beyond through university and public-private partnerships.</li>
            <li><strong>Establish a Metro Atlanta venture studio</strong>, a public-private partnership to help create jobs right here and businesses in the public interest.</li>
            <li><strong>Create many high-paying jobs</strong> in the technology and public interest sector and attracting the next wave of innovation to GA: AI and digital infrastructure companies.</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={nsb2} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Education</h3>
        <p>
        Every Georgian should have access to a quality education. We will:
          <ul>
            <li><strong>Ensure every high school offers a course on AI</strong>, that focuses not just on the technology, but the ethics behind it</li>
            <li><strong>Expand Dual Enrollment programs</strong> such as Move on When Ready and the availability of the HOPE Scholarship and Zell Miller Scholarships</li>
            <li><strong>Add rigorous civics and liberal arts requirements</strong> for all students who graduate from high school. Every student needs to understand civics and liberal arts to be a good citizen.</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <img src={atlTrains} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Transit and Transportation</h3>
        <p>
        We need a bold vision to reduce traffic and improve quality of life in the Metro Atlanta area. I will:
          <ul>
            <li><strong>Advocate for <a href="https://atlanta.urbanize.city/post/introducing-atl-trains-revolutionary-approach-metro-commuter-transit">ATL Trains</a></strong> — a system to connect Metro Atlantans and drastically reduce congestion on I-85 / I-75 / I-285</li>
            <li><strong>Invest in better roads, more sidewalks, and more bike lanes</strong> in order to improve our transportation infrastructure. Let's make our suburbs more walkable!</li>
            <li><strong>Expand options for buses and public transit</strong> around the district. You shouldn't need a car just to visit your friend or go to the park.</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          {/* https://www.flickr.com/photos/mr_t_in_dc/1021262724 */}
          <br /><br />
          <img src={police} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Public Safety</h3>
        <p>
        We deserve safer communities for all. I will:
          <ul>
            <li><strong>Pass commonsense gun safety reform</strong> such as background checks, while standing up for the right to bear arms. I believe in the Second Amendment, but owning a gun shouldn't be easier than getting a driver's license.</li>
            <li><strong>Pass commonsense police accountability steps</strong> such as wearing body cameras and having additional training, and invest in other services such as mental health and counseling for non-violent offenses. I <strong>support the police</strong> and law enforcement and thank them for protecting our communities, but with great responsibility comes <strong>great accountability.</strong></li>
            <li><strong>Pass state consumer protection, online safety, and antitrust laws</strong> to keep big tech companies accountable for online harms and children safe on social media.</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <br /><br /><br />
          <img src={hospital} />
          {/* https://www.google.com/local/place/fid/0x88f5991858566f7b:0x4874bf6c636a43c3/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D5vpqtAEF_0a6JEY145ZDPA%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D251.87053%26pitch%3D0%26thumbfov%3D100&ik=CAISFjV2cHF0QUVGXzBhNkpFWTE0NVpEUEE%3D */}
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Healthcare</h3>
        <p>
        Healthcare is a top issue facing all of us in our state. I will:
          <ul>
            <li><strong>Expand Medicaid</strong> so that low-income Georgians can receive the essential healthcare they need. We have a responsibility to help our fellow citizens stand on their own feet.</li>
            <li><strong>Lower prescription drug costs</strong> by passing a state-level drug pricing transparency law. This will require healthcare companies operating in GA to be more transparent and accountable with drug pricing.</li>
            <li><strong>Provide a tax credit for doctors, nurses, and healthcare professionals</strong>, to thank them for their work during the COVID-19 pandemic and encourage more to join the profession.</li>
            <li><strong>Enact a GA child tax credit</strong>. This will help reduce child poverty and incentivize people to have families.</li>
            <li><strong>Protect women's right to choose</strong> whether or not they have an abortion.</li>
          </ul>
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          <br /><br /><br />
          <img src={capitol} />
          {/* https://commons.wikimedia.org/wiki/File:Georgia_State_Capitol,_Atlanta,_GA_%2846751457534%29.jpg */}
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
      <h3>Build State and Local Government Capacity</h3>
        <p>
        Your experience at the DMV or courts may be terrible, but that's because we haven't given it the resources and talent we need to suceed. Civil servants are amazing and dedicated and we need to support them. I will:
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
  </>
);

export default Tagline;
