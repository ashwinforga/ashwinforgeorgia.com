import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <section className="grid-container usa-section usa-prose">
      <h1 id="privacy">Privacy Policy</h1><br /><br />
      <iframe width="100%" height="1000" src="https://docs.google.com/document/d/e/2PACX-1vSUpkpixRCnCcCOaPvjybk0LgH6S2bK-xiJRd3iIdggE6hq2lOqVoFi9GNi2czR9QMHBn2diNFlHjS-/pub?embedded=true"></iframe>
    </section>
  </Layout>
);

export default IndexPage;
