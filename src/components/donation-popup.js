import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/ARLogo-full-color.png';
import cover from '../images/smile-3.jpg';
import { CSSTransition } from 'react-transition-group';

const DonationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  // When the popup is open, prevent scroll on the page
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  return (
    <CSSTransition in={showPopup} timeout={500} classNames="fade" unmountOnExit>
      <div
        className="donation-popup"
        style={{ zIndex: '100', position: 'relative' }}
        ref={nodeRef}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#002C6DD0',
            minHeight: '100vh',
            minWidth: '100vw',
            position: 'fixed',
          }}
        >
          <div
            className="usa-card__container"
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              margin: '-10px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'row',
              maxWidth: '800px',
            }}
          >
            <div
              className="mobile-hidden tablet:grid-col-6"
              style={{ margin: '0' }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CkmZ3WY2ay8?si=eU0mEd28r7t4DX6I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className="grid-col-12 tablet:grid-col-6"
              style={{
                textAlign: 'center',
                padding: '2rem 1rem 1rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <img
                src={logo}
                className="mobile-hidden"
                alt="Ashwin Ramaswami for State Senate"
                style={{ height: '120px', objectFit: 'scale-down' }}
              />
              <div className="desktop-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CkmZ3WY2ay8?si=eU0mEd28r7t4DX6I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <h2 style={{ textAlign: "center" }}>Join our campaign!</h2>
              <div className="" style={{ justifyContent: "center", margin: "0 auto", display: "flex", flexWrap: "wrap", maxWidth: "450px", gap: "0.25rem" }}>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup&amount=25" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$25</Link>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup&amount=100" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$100</Link>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup&amount=250" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$250</Link>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup&amount=500" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$500</Link>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup&amount=1000" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>$1,000</Link>
                <Link to="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=popup" className="usa-button tablet:grid-col-3" style={{ backgroundColor: "#002C6D", color: "white" }}>Donate</Link>
              </div> */}
              <p style={{ textAlign: 'center', fontWeight: '500' }}>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#002C6D',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Continue to website &rarr;
                </button>
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#808080',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DonationPopup;
