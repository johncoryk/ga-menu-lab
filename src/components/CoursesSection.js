import React from 'react';

import { foodItems } from '../data/data';

import CourseHeader from './CourseHeader';
import FoodItem from './FoodItem';

const CoursesSection = ({ title }) => {
  return (
    <>
      <CourseHeader title={title} />
      <section className='items'>
        {foodItems.map(item => (
          <FoodItem food={item.food} price={item.price} />
        ))}
      </section>
    </>
  );
};

export default CoursesSection;
