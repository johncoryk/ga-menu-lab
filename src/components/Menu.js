import React from 'react';

import { courseHeaders } from '../data/data';

import MenuHeader from './MenuHeader';
import CoursesSection from './CoursesSection';

const Menu = () => {
  return (
    <main>
      <MenuHeader />
      {courseHeaders.map(header => (
        <CoursesSection title={header} />
      ))}
    </main>
  );
};

export default Menu;
