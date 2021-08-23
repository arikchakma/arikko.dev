import React from 'react';
import Layout from '../components/layout/layout';
import BlogSection from '../components/sections/BlogSection';
import Bio from '../components/vegetables/Bio';

function IndexPage() {
  return (
    <Layout>
      <Bio />
      <BlogSection />
    </Layout>
  );
}

export default IndexPage;
