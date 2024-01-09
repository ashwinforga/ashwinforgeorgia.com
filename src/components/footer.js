import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="">
      <p className="">
        Paid for by Ashwin for Georgia Inc.
        <br />
        PO Box 4433, Alpharetta, GA 30023
        <br />
        <Link to="/privacy" className=''>Privacy&nbsp;Policy</Link>
        <span> </span>
        <a href="mailto:contact@ashwinforgeorgia.com">contact@ashwinforgeorgia.com</a>
      </p>
    </div>
  </footer>
);

export default Footer;
