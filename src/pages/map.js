import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';

const MapPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Map</h1>
    <p><a href="https://www.senate.ga.gov/senators/Documents/Maps/2023SD48.pdf">Click here</a></p>
    <Helmet>
        <meta http-equiv="refresh" content="0; url=https://www.senate.ga.gov/senators/Documents/Maps/2023SD48.pdf" />
    </Helmet>
  </Layout>
);

export default MapPage;
