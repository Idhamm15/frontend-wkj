// AboutAndContactComp.jsx
import React from 'react';
import { ContactSection } from '../contact';
import AboutSection from '../../includes/about';

const AboutAndContactComp = () => {
  return (
    <div>
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default AboutAndContactComp;