import React from 'react';
import downArrow from '../assets/images/downarrow.png';
import { CARD_LOGO_URL } from '../utils/constants';

const RestaurantCategory = (item) => {
  const { show, handleHeaderClick } = item;
  const { itemCards, title } = item.data;
  // console.log(itemCards);
  return (
    <div>
      {/* Header */}
      <div className='flex items-center justify-between py-8 cursor-pointer' onClick={handleHeaderClick}>
        <h3 className='font-bold'>
          {title} ({itemCards.length})
        </h3>
        <img src={downArrow} className={`w-4 ${show ? 'rotate-180': 'rotate-0'}`} />
      </div>
      {/* Body */}
      {show &&
        itemCards.map((item) => {
          const { name, id, price, defaultPrice, imageId, description } = item.card.info;
          return (
            <div className='flex items-center justify-between border-b-2'>
              <div key={id} className='w-10/12 py-8'>
                <h4 className='text-sm font-semibold'>{name}</h4>
                <h6 className='text-sm font-semibold'>Rs {(price || defaultPrice) / 100}</h6>
                <h6 className='pt-2 pr-2 text-xs leading-4 text-gray-500'>{ description }</h6>
              </div>
              <div className='relative flex w-2/12'>
                {imageId && (
                  <img
                    src={CARD_LOGO_URL + imageId}
                    className='w-full rounded-md'
                  />
                )}
                <button
                  className={`bottom-0 left-0 right-0 z-10 px-4 py-1 ml-2 mr-2 -mb-2 text-sm font-semibold text-green-600 uppercase bg-gray-200 border-green-400 rounded-md ${
                    imageId ? 'absolute' : ''
                  }`}
                >
                  Add +
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCategory;
