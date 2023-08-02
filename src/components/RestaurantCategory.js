import React from 'react';
import downArrow from '../assets/images/downarrow.png';
import ItemCard from './ItemCard';

const RestaurantCategory = (item) => {
  const { show, handleHeaderClick } = item;
  const { itemCards, title } = item.data;
  // console.log(itemCards);
  
  
  return (
    <div>
      {/* Header */}
      <div
        className='flex items-center justify-between py-8 cursor-pointer'
        onClick={handleHeaderClick}
      >
        <h3 className='font-bold'>
          {title} ({itemCards.length})
        </h3>
        <img
          src={downArrow}
          className={`w-4 ${show ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {/* Body */}
      {show &&
      <ItemCard itemData={itemCards} />
      }
    </div>
  );
};

export default RestaurantCategory;
