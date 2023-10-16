import React from 'react';
import circle from 'uswds/img/circle-124.png';
import ashwinMvp from '../images/ashwin-mvp-cropped.jpg';
import still1 from '../images/still 1.png';
import still2 from '../images/still 2.png';
import headshot from '../images/headshot-square.jpeg';
import still from '../images/still.jpeg';
import leafblowers from '../images/leaf blowers.jpeg';
import jif from '../images/jif-fellows.jpeg';
import sossa from '../images/sossa.jpg';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <>
  <hr />
  <section className="usa-graphic-list usa-section">  {/* usa-section--dark" */}
    <h1>Ashwin works on the <strong>REAL</strong> issues.<br />In 2020...</h1>
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={still} alt="Shawn Still" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Shawn Still was trying to overturn the results of Georgia's election.
            </h3>
            <p>
              <img src={still2} />
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Ashwin worked with Secretary of State Raffensperger's office to secure Georgia's elections.
            </h3>
            <p>
              <img src={ashwinMvp} />
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h1>In 2022...</h1>
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={still} alt="Shawn Still" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                Shawn Still focused his legislative work on the LEAF Act, which would ban gas-powered leaf blowers.
              </h3>
              <p>
                <img src={leafblowers} />
                {/* TODO: add attribution - https://commons.wikimedia.org/wiki/File:Husqvarna_leaf_blowers.jpg */}
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                Ashwin's research led Congress to introduce a bill on securing our small businesses through open source software.
              </h3>
              <p>
                <img src={sossa} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1>In 2023...</h1>
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={still} alt="Shawn Still" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                Shawn Still got indicted for impersonating a public officer and forgery in the first degreee.
              </h3>
              <p>
                <img src={still1} />
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={headshot} alt="Ashwin Ramaswami" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                Ashwin helped provide state and local courts with technologists to improve court access for people without lawyers.
              </h3>
              <p>
                <img src={jif} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
);

export default Highlights;
