import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Article = ({ title, img, quote, href, date }) => (
  <li className="usa-card tablet:grid-col-6 issue">
    <div className="usa-card__container">
      <div className="usa-card__header">
        {img && <div className="img-container">
            <img src={img} />
        </div>}
        <a target="_blank" href={href}><h2 className="usa-card__heading">{title}</h2></a>
      </div>
      <div className="usa-card__body">
        <div><em>{date}</em>: "{quote}"</div>
      </div>
    </div>
  </li>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Media" />
    <section className="grid-container usa-section usa-prose grid-media">
      {/* <h1 id="media">Media</h1><br /><br /> */}
      <div className="grid-row grid-gap">
        {/* <div className="tablet:grid-col-12">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Issues<br />
          </h2>
        </div> */}
        <div className="tablet:grid-col-12">
          <ul className="usa-card-group">
            <Article title="This Gen Z Democrat quit his job protecting elections to run against a fake elector" img="https://theme.zdassets.com/theme_assets/2334076/14c36808af8b0cc77fb4d8eabc27a1f937a4eaf0.jpeg" quote="Ashwin Ramaswami spent the last three years working for the federal government to protect elections from hackers. Now, he’s targeting what he says is a greater threat to democracy: his state senator." href="https://www.nbcnews.com/politics/2024-election/gen-z-democrat-georgia-fake-elector-state-senate-rcna144294" date="March 23, 2024" />
            <Article title="Young voters backed Biden in 2020. Now some are running for office." img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MSNBC_2015-2021_logo.svg/2560px-MSNBC_2015-2021_logo.svg.png" quote="March for Our Lives co-founder David Hogg joins MSNBC’s Lawrence O’Donnell along with two candidates that his organization, Leaders We Deserve, has endorsed for state legislative office...Ashwin Ramaswami is a candidate for State Senate in Georgia's 48th District." href="https://www.youtube.com/watch?v=G8UoHvarLmU" date="March 13, 2024" />
            <Article title="Ashwin Ramaswami: How We Can Take On Election Deniers and Prevent Another Jan. 6" img="https://upload.wikimedia.org/wikipedia/commons/9/98/Courier_Newsroom_logo.png" quote="On November 17, 2020, Donald Trump fired my boss for stating the truth: that the American people should have confidence in the security and integrity of the 2020 elections, the most secure in American history...Election deniers and partisan extremists are no match for policy nerds and tech geeks, and most importantly, young people of integrity who know how to get things done." href="https://couriernewsroom.com/news/ashwin-ramaswami-how-we-can-take-on-election-deniers-and-prevent-another-jan-6/" date="March 12, 2024" />
            <Article title="Ashwin Ramaswami becomes first Gen Z Indian-American running for Georgia Senate seat" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Hindu_logo.svg/2560px-The_Hindu_logo.svg.png" quote="Ashwin Ramaswami has become the first Indian-American from Gen Z to run for a State or federal legislature in the U.S., indicative of a new breed of young politicians emerging from the community." href="https://www.thehindu.com/news/international/ashwin-ramaswami-becomes-first-gen-z-indian-american-running-for-georgia-senate-seat/article67862739.ece" date="February 19, 2024" />
            <Article title="Integrity first: Ashwin Ramaswami launches historic campaign for Georgia State Senate" img="https://nripulse.com/wp-content/uploads/2023/08/NRIPulse_Logo_RGB_Website1.jpg" quote="If elected, Ramaswami will be the first member of the Indian American and Hindu-American communities and the first Gen Z State Senator in the Georgia state legislature. In his exclusive with NRI Pulse, Ramaswami spoke about his motivation to run, his priorities for the state, the importance of representation, his stance on gun control, reproductive rights, and much more." href="https://nripulse.com/integrity-first-ashwin-ramaswami-launches-historic-campaign-for-georgia-state-senate/" date="January 9, 2024" />
            <Article title="Meet The Candidate Running Against A Georgia State Senator Indicted With Trump In Fake Electors Plot" img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/2560px-Forbes_logo.svg.png" quote="I decided to run because I wanted to make sure that others would have the same opportunities as I had...The federal government can only do so much, we have to play our part in terms of what we're willing to support." href="https://www.forbes.com/video/6343478031112/meet-the-candidate-running-against-a-georgia-state-senator-indicted-with-trump-in-fake-electors-plot/?sh=1da5c2fe7838" date="December 19, 2023" />
          </ul>
        </div>
      </div>
    </section>
    <section className="grid-container usa-section usa-prose grid-media">
      <h1>Press Kit</h1>
      <div className="grid-row grid-gap">
        {/* <div className="tablet:grid-col-12">
          <h2 className="font-heading-xl margin-top-0 text-center">
            Issues<br />
          </h2>
        </div> */}
        <div className="tablet:grid-col-12">
          <ul>
            <li>Headshots:&nbsp;
              <a download href="/press-kit/headshot-1.jpg">1</a>&nbsp;
              <a download href="/press-kit/headshot-2.jpg">2</a>&nbsp;
              <a download href="/press-kit/headshot-3.jpg">3</a>&nbsp;
              <a download href="/press-kit/headshot-4.jpg">4</a>&nbsp;
              <a download href="/press-kit/headshot-5.jpg">5</a>&nbsp;
              <a download href="/press-kit/headshot-6.png">6</a>&nbsp;
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
