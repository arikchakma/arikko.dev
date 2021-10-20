import React from 'react';
import Layout from '../components/layout/layout';
import ChatSection from '../components/sections/ChatSection';
import HeroSection from '../components/sections/HeroSection';
import PartnersSection from '../components/sections/PartnersSection';

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <ChatSection />
      <PartnersSection />
    </Layout>
  );
}

export default IndexPage;
