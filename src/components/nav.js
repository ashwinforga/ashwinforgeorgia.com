import { Link } from 'gatsby';
import logo from "../images/ARLogo-full-color-white-text.png";
import React from 'react';

import close from 'uswds/img/close.svg';

export const NavMobile = ({ className }) => (<nav className={"nav-mobile hidden-desktop " + (className || "")}>
  <a href="/">
    <img src={logo} />
  </a>
  <div className="nav-list">
    <div className="donate">
      <Link className="usa-button usa-nav__link" to="/about">
        ABOUT
      </Link>
    </div>
    <div className="donate">
      <Link className="usa-button usa-nav__link" to="/endorsements">
        Endorsements
      </Link>
    </div>
    <div className="donate">
      <Link className="usa-button usa-nav__link" to="/issues">
        ISSUES
      </Link>
    </div>
    <div className="donate">
      <Link className="usa-button usa-nav__link" to="/media">
        MEDIA
      </Link>
    </div>
    <div className="donate">
      <a className="usa-button usa-nav__link" target="_blank" href="https://www.mobilize.us/ashwinforgeorgia/">
        VOLUNTEER
      </a>
    </div>
    <div className="donate">
      <a className="usa-button usa-nav__link" target="_blank" href="https://secure.actblue.com/donate/ashwin-for-georgia">
        DONATE
      </a>
    </div>
  </div>
</nav>
);

const Nav = ({ navigation, secondaryLinks }) => (<>

  <NavMobile />
  <nav role="navigation" className="usa-nav">
    <div className="usa-nav__inner">
      <button className="usa-nav__close">
        <img src={close} alt="close" />
      </button>
      <div className="nav-title">
        <ul className="usa-accordion usa-nav__primary">
          <li className="usa-nav__primary-item">
            <a href="/">
              <img src={logo} />
            </a>
            {/* <a href="/"><img src="https://ashwin.run/assets/lightning.svg" style={{width: 30}}/></a> */}
          </li>
        </ul>
      </div>
      <div className="nav-list">
        <ul className="usa-accordion usa-nav__primary">
          {navigation.map((navGroup, idx) => (
            <li key={idx} className="usa-nav__primary-item">
              {navGroup.items.length > 1 ? (
                <>
                  <button
                    className={`usa-accordion__button usa-nav__link ${(idx === 0 && false) ? 'usa-current' : ''
                      }`}
                    aria-controls={`extended-nav-section-${idx}`}
                    aria-expanded={false}
                  >
                    <span>{navGroup.title}</span>
                  </button>
                  <ul
                    id={`extended-nav-section-${idx}`}
                    className="usa-accordion__content usa-nav__submenu"
                    hidden
                  >
                    {navGroup.items.map((navItem, idx) => (
                      <li key={idx} className="usa-nav__submenu-item">
                        <Link to={navItem.link}>{navItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  className="usa-nav__link"
                  activeClassName="usa-current"
                  to={navGroup.items[0].link}
                >
                  <span>{navGroup.items[0].text}</span>
                </Link>
              )}
            </li>
          ))}
          <li className="usa-nav__primary-item">
            <a
              className="usa-nav__link"
              activeClassName="usa-current"
              target="_blank"
              href="https://www.mobilize.us/ashwinforgeorgia/"
            >
              <span>Volunteer</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="donate">
        <a className="usa-button usa-nav__link" target="_blank" href="https://secure.actblue.com/donate/ashwin-for-georgia?refcode=website-nav">
          DONATE
        </a>
      </div>
      {/* <div className="usa-nav__secondary">
        <ul className="usa-nav__secondary-links">
          {secondaryLinks.map((secondaryLink, idx) => (
            <li key={idx} className="usa-nav__secondary-item">
              <Link to={secondaryLink.link}>{secondaryLink.text}</Link>
            </li>
          ))}
        </ul>
        <SearchForm />
      </div> */}
    </div>
  </nav></>
);

export default Nav;
