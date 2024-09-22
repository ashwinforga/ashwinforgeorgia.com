import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';

const VoterAlertPage = () => (
  <Layout className="voter-alert">
    <SEO title="Voter Alert from Ashwin Ramaswami" />
    <section className="grid-container usa-section usa-prose voter-alert">
    <a href="https://secure.actblue.com/donate/ashwin-voter-alert#"><button className="usa-button" type="button">
      Support Ashwin Now
    </button></a>

    <iframe width="100%" src="https://www.youtube.com/embed/LMFS8ldMbZ4?si=vI6yyOhBVqH2P7X_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <a href="https://secure.actblue.com/donate/ashwin-voter-alert#"><button className="usa-button" type="button">
      Support Ashwin Now
    </button></a>
    </section>
  </Layout>
);

export default VoterAlertPage;
