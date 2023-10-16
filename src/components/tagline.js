import React from 'react';
import nsb from "../images/nsb.jpeg";
import court from "../images/court 3.jpg";

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <>
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          About Ashwin<br /><br />

          <img src={nsb} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          I was born and grew up in Johns Creek, GA, in Bridgestone Farms. I grew up coding and building technology for nonprofit organizations. I studied computer science at Stanford University and now own a tech consulting business that works to support startups with new ideas around the world. After that, I worked in the federal government at the Cybersecurity and Infrastructure Security Agency on protecting the nation's critical infrastructure — and election systems — from cyberattacks.
          
           My life has been a series of instances of incredible opportunities that were only made possible through the education resources offered to me and my family when growing up: Chattahoochee High School, the dual enrollment program, and the HOPE and Zell Miller Scholarship. It's time for me to pay it forward and be an advocate for the futures of young people in our community.
        </p>
        <p>
        By running for office, I’d like to help others have the same, or better, opportunities than I have had. Everyone should have the opportunities and resources to succeed.
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
        We’re in a moment where politics is often devoid of substance and focused on show. Incumbent Shawn Still for the 48th state senate district has proved unfit for office, focusing on gas-powered lawn movers and overturning the 2020 election results rather than the issues that affect our communities every day, such as healthcare costs, reproductive rights, gun control, public safety, and public transit and transportation infrastructure. We are facing bigger issues around technology, from education and ChatGPT/AI to childrens’ safety on social media, while few in the state legislature actually have the tech experience to understand and address these issues.
        </p>
        <p>
        Moreover, I'd be the first Hindu American to be a Georgia state legislator and first South Asian to represent this district. In May 2024, I'll also finish my law degree (J.D.) at Georgetown University Law Center. I look forward to bringing my experience in law and federal policy to help address issues in our state.
        </p>
      </div>
    </div>
  </section>
  </>
);

export default Tagline;
