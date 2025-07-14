import React from 'react';
import signature from '../images/signature.jpg';
import logo from '../images/ARLogo-full-color.png';

const ArchiveBanner = () => {
  return (
    <div className="archive-banner">
      <div
        style={{
          background: '#002C6D',
          color: 'white',
          padding: '0.5rem 1rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: '400',
          borderBottom: '2px solid #2e5d87',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div className="grid-container">
          <p style={{ margin: 0, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            In 2024, Ashwin Ramaswami ran for Georgia State Senate in District
            48. This is an archived version of Ashwin's campaign website for
            historical purposes. To keep up with Ashwin's current work, please
            visit{' '}
            <a style={{ color: 'white' }} href="https://ashwin.run">
              ashwin.run
            </a>
            .
          </p>
        </div>
      </div>

      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderBottom: '1px solid #ddd',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img
            src={logo}
            alt="Ashwin Ramaswami for State Senate"
            style={{
              maxWidth: '150px',
              height: 'auto',
              marginBottom: '1rem',
            }}
          />
          <div style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
            From the desk of Ashwin Ramaswami
            <br />
            <span style={{ fontSize: '0.8rem', color: '#666' }}>
              November 7, 2024
            </span>
          </div>
        </div>

        <div style={{ lineHeight: '1.6', fontSize: '1rem', color: '#333' }}>
          <p>
            I want to personally thank you for your support in my campaign for
            State Senate.
          </p>

          <p>
            Though this district was drawn to keep me out — it was won by 14
            points (57-43) in 2022 —{' '}
            <strong>
              we closed that gap to just 7 points (53-47) this year, running at
              just about the level of the Presidential ticket in our district.
            </strong>{' '}
            Given the national environment, we ran the best campaign we could —
            and I am so proud of the progress we have made together.
          </p>

          <p>
            This campaign has upended expectations of what young people are
            capable of. We have mobilized people from across our community, from
            educators, students, business owners, and working class people, to
            support and believe in the next generation. We smashed records with
            nearly $1M raised and over 10,000 unique contributions to power our
            campaign. We have opened the door to more people like me, with
            unconventional backgrounds, to enter and succeed in politics.{' '}
            <strong>
              We have shown that young people are not a liability, but an asset.
              And that one is truly never too young to do the right thing.
            </strong>
          </p>

          <p>
            This race may be over, but it is only the start. I'm committed to
            fighting for our communities and working to serve all of you. It's
            time to work with the public servants we have elected to address the
            issues that matter, and hold them accountable. And it's time to
            encourage more young people across the nation to step up and serve
            their communities. Our future depends on it.
          </p>

          <p>Remember: the most valuable asset in politics is time.</p>

          <div style={{ marginTop: '2rem' }}>
            <p>Onwards and upwards,</p>
            <img
              src={signature}
              alt="Ashwin Ramaswami signature"
              style={{
                maxWidth: '300px',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveBanner;
