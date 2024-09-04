import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';

const VotePage = () => (
  <Layout>
    <SEO title="Vote" />
    <h1>Vote</h1>
    <p><a href="https://mvp.sos.ga.gov/s/">Click here</a></p>
    <Helmet>
        <meta http-equiv="refresh" content="0; url=https://mvp.sos.ga.gov/s/" />
    </Helmet>
  </Layout>
);

export default VotePage;
