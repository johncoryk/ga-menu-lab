import React from 'react';

const FoodItem = ({ food, price }) => {
  return (
    <>
      <p>{food}</p>
      <p>{price}</p>
    </>
  );
};

export default FoodItem;
