import React from 'react';
import Layout from '../components/layout/layout';
import BlogSection from '../components/sections/BlogSection';
import HeroSection from '../components/sections/HeroSection';

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <BlogSection />
    </Layout>
  );
}

export default IndexPage;
