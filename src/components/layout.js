/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from './banner';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import DonationPopup from './donation-popup';
import ArchiveBanner from './archive-banner';

const Layout = ({ children, className = '', donationPopup = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navigation {
            title
            items {
              text
              link
            }
          }
          secondaryLinks {
            text
            link
          }
        }
      }
    }
  `);

  const { title, navigation, secondaryLinks } = data.site.siteMetadata;

  return (
    <div className={className}>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      {/* {donationPopup && <DonationPopup />} */}
      {/* <Banner /> */}
      <ArchiveBanner />
      <div className="usa-overlay" />
      <Header siteTitle={title}>
        <Nav {...{ navigation, secondaryLinks }} />
      </Header>
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
